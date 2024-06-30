import React from "react";
import { ChakraUiProv } from "@/app/Providers/ChakraUiProv";
import {
    Avatar,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";

import { ImProfile } from "react-icons/im";
import { TbUserHexagon } from "react-icons/tb";


interface UserInfo {
    name:string;
    email: string
}


const UserCard = ({userInfo}:{userInfo:UserInfo}) => {
    
  return (
    <>

    <button>
    <ImProfile />
    </button>

    {/* <Popover>
      <PopoverTrigger>
            <ImProfile />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Your Info!</PopoverHeader>
        <PopoverBody>
        <Avatar size='2xs' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        <TbUserHexagon className="text-emerald-700 lg:text-3xl" />
        <h2>Email: {userInfo.email} </h2>
        <h2>Name: {userInfo.name} </h2>
        </PopoverBody>
      </PopoverContent>
    </Popover> */}
    </>

  );
};

export default UserCard;
