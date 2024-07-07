"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChakraUiProv } from "@/app/Providers/ChakraUiProv";
import { RiHomeSmile2Line } from "react-icons/ri";
import { ImEnter } from "react-icons/im";

import UserCard from "../Customs/UserCard";

interface userDetails {
  name: string;
  email: string;
  is_user: boolean;
}

const Nav = ({ userAccount }: { userAccount: userDetails }) => {
  const path = usePathname();
  return (
    <ChakraUiProv>
      <nav className="flex gap-4 relative items-center justify-around px-4 h-[60px] mainbg">
        <Link
          href={"/"}
          className={`w-[30px] `}
        >
            <RiHomeSmile2Line className={`${path == '/'  ? 'border-b-4 border-white rounded-b-md':''} lg:text-3xl text-xl text-white`} />
        </Link>
        <ul className="w-full flex items-center justify-around lg:px-2 px-1 mx-auto py-3">
          <li>
            <Link
              href={"/alltasks"}
              className={`${
                path == "/alltasks"
                  ? "border-b-2 border-white text-yellow-100 rounded-b-md p-1 transition-all ease-in-out duration-500"
                  : "text-white"
              } lg:text-2xl text-sm`}
            >
              All Tasks
            </Link>
          </li>
          {/* <li>
            <Link
              href={"/profile"}
              className={`${
                path == "/profile"
                  ? "border-b-2 border-white text-yellow-100"
                  : "text-white"
              }`}
            >
              Profile
            </Link>
          </li> */}
          <li>
            <Link
              href={"/completed"}
              className={`${
                path == "/completed"
                  ? "border-b-2 border-white text-yellow-100 p-1 rounded-b-md"
                  : "text-white"
              } lg:text-2xl text-sm transition-all ease-in-out duration-500`}
            >
              Compeleted
            </Link>
          </li>
        </ul>

          {!userAccount?.is_user ? (
            <Link href={"/auth"} className="w-[30px] ">
              <ImEnter  className="lg:text-3xl text-base text-white"/>
            </Link>
          ) : (
            <UserCard userInfo={userAccount} />
          )}

      </nav>
    </ChakraUiProv>
  );
};

export default Nav;
