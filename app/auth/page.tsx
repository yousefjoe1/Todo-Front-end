'use client'
import React, { useState } from "react";
import Section from "../_components/Customs/Section";
import Login from "../_components/Forms/Login";
import Register from "../_components/Forms/Register";

const Auth = () => {

    const [compNum,setCompNum] = useState(1)

  return (
    <Section>
      <br />
      <center>
        <b>Welcome</b>
      </center>
      <br />

      <div className="auth-components-btns flex items-center justify-between  w-[80%] mx-auto">
        <button onClick={()=> setCompNum(p=> 1)} className={`registerbtn relative p-2 rounded-xl ${compNum == 1 ? 'mainbg text-white registerbtn-active':'bg-slate-400'}`}>
          Regsiter
        </button>
        <button onClick={()=> setCompNum(p=> 2)} className={`loginbtn relative bg-slate-400 p-2 rounded-xl ${compNum == 2 ? 'mainbg text-white loginbtn-active':'bg-slate-400'}`}>Login</button>
      </div>

      <div className="auth-container mt-6 pt-2 mainbg w-[80%] mx-auto rounded-xl overflow-hidden ">
        {
            compNum == 1 ?
            <Register showLogin={()=> setCompNum(p=> 2)} />
            :
            <Login />
        }
      </div>
    </Section>
  );
};

export default Auth;
