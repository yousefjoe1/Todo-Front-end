import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";

import { ImProfile } from "react-icons/im";
import { TbUserHexagon } from "react-icons/tb";

interface UserInfo {
  name: string;
  email: string;
}

const UserCard = ({ userInfo }: { userInfo: UserInfo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>
        <ImProfile className="lg:text-3xl text-base text-white" />
      </button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your account</DrawerHeader>

          <DrawerBody>
            {/* <Avatar
              size="2xs"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            /> */}
            <TbUserHexagon className="text-emerald-700 lg:text-3xl" />
            <h2 className="border-b-[1px] border-b-teal-700 my-3 p-1 rounded-l-lg">Email: {userInfo.email} </h2>
            <h2 className="border-b-[1px] border-b-teal-700 my-3 p-1 rounded-l-lg">Name: {userInfo.name} </h2>
          </DrawerBody>

          <DrawerFooter>
            <button  className="border-b-[1px] border-b-teal-700 my-3 p-1 rounded-l-lg" onClick={onClose}>Close</button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default UserCard;