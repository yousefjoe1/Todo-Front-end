'use client'
import React, { FormEvent, useState} from 'react'
import { ChakraUiProv } from '@/app/Providers/ChakraUiProv'
import { Spinner, useToast } from '@chakra-ui/react';
import loginFunc from '@/app/_ServerActions/loginFunc';

const Login = () => {

  const msg = useToast();
  const [isSend, setIsSend] = useState(false);
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    setIsSend((p) => !p);
    let resp = await loginFunc(info);
    
    if (resp.isError) {
      msg({
        title: `${resp.message}`,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } else {
      msg({
        title: "Loged In",
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
        <div className="mt-5 lg:w-[300px] md:w-[300px]">
          <label htmlFor="email" className="ml-2">
            Email
          </label>
          <input
            onChange={(e) =>
              setInfo((p) => (p = { ...p, email: e.target.value }))
            }
            type="email"
            id="email"
            className="bg-rose-50 text-teal-600 max-[400px]:w-full p-2 block lg:rounded-r-xl"
          />
        </div>
        <div className="flex justify-center mt-5">
          <div>
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              onChange={(e) =>
                setInfo((p) => (p = { ...p, password: e.target.value }))
              }
              type="password"
              id="password"
              className="bg-rose-50 text-teal-600 p-2 block rounded-xl"
            />
          </div>
        </div>
        {isSend ? (
          <Spinner w={3} h={6} />
        ) : (
          <button className="w-[100px] text-white mx-auto mt-5 block p-2 bg-slate-900 ">
            Log In
          </button>
        )}
      </form>
    </ChakraUiProv>
  )
}

export default Login