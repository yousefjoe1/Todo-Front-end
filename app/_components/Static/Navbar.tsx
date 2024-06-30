import React from "react";
import Nav from "./Nav";
import getToken from "@/app/_ServerActions/getToken";

const Navbar = async () => {

  const mytoken = await getToken()

  console.log(mytoken,'my tk');
  
  
  return (
    <Nav userAccount={mytoken.data.current_user} />
  );
};

export default Navbar;
