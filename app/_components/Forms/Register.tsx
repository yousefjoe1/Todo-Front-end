"use client";
import { ChakraUiProv } from "@/app/Providers/ChakraUiProv";
import createUser from "@/app/_ServerActions/createFunc";
import { Spinner, useToast } from "@chakra-ui/react";
import React, { FormEvent, useEffect, useRef, useState } from "react";

const Register = () => {
  const msg = useToast();


  useEffect(() => {
    setTimeout(() => {
      document.getElementById('username')?.classList.add('name-anim')
      document.getElementById('password-login')?.classList.add('pass-anim')
      document.getElementById('useremail')?.classList.add('email-anim')
    }, 1000);
    // pass-anim email-anim
  }, [])
  

  const [isSend, setIsSend] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSend((p) => !p);
    let resp = await createUser(info);
    // console.log(resp);
    if (resp.isError) {
      msg({
        title: "Error",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } else {
      msg({
        title: "created",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }
    setIsSend((p) => !p);
  };
  return (
    <ChakraUiProv>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="ml-3">
            Your Name
          </label>
          <input
            onChange={(e) =>
              setInfo((p) => (p = { ...p, name: e.target.value }))
            }
            id="username"
            type="text"
            className={`bg-rose-50 text-teal-600 block p-2 rounded-r-xl translate-x-[70%] ease-in-out duration-700 transition-all`}
          />
        </div>
        {/* <br /> */}
        <div className="mt-5 lg:w-[300px] md:w-[300px] mx-auto">
          <label htmlFor="useremail">
            Email
          </label>
          <input
            onChange={(e) =>
              setInfo((p) => (p = { ...p, email: e.target.value }))
            }
            type="email"
            id="useremail"
            className={`bg-rose-50 text-teal-600 max-[400px]:w-full h-4 p-2 block lg:rounded-xl ease-in-out duration-700 transition-all`}
          />
        </div>
        <div className="flex justify-end mt-5">
          <div>
            <label htmlFor="password-login">
              Password
            </label>
            <input
              onChange={(e) =>
                setInfo((p) => (p = { ...p, password: e.target.value }))
              }
              type="password"
              id="password-login"
              className={`bg-rose-50 text-teal-600 p-2 block rounded-l-xl translate-x-[-70%] ease-in-out duration-700 transition-all`}
            />
          </div>
        </div>
        {isSend ? (
          <Spinner w={3} h={6} />
        ) : (
          <button className="w-[100px] text-white mx-auto mt-5 block p-2 bg-slate-900 ">
            Register
          </button>
        )}
      </form>
    </ChakraUiProv>
  );
};

export default Register;
