'use client'
import React, { FormEvent, useEffect, useState} from 'react'
import { ChakraUiProv } from '@/app/Providers/ChakraUiProv'
import { Spinner, useToast } from '@chakra-ui/react';
import loginFunc from '@/app/_ServerActions/loginFunc';

import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      document.getElementById('user-email')?.classList.add('name-anim')
      document.getElementById('user-password')?.classList.add('email-anim')
    }, 1000);
  }, [])
  
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
      setIsSend((p) => !p);
    } else {
      msg({
        title: "Loged In",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      router.push('/')
      
    }
  };
  return (
    <ChakraUiProv>
      <form onSubmit={handleSubmit}>
        <div className="mt-5 lg:w-[300px] md:w-[300px]">
          <label htmlFor="user-email" className="ml-2">
            Email
          </label>
          <input
            onChange={(e) =>
              setInfo((p) => (p = { ...p, email: e.target.value }))
            }
            type="email"
            id="user-email"
            className="bg-rose-50 border-none outline-none text-teal-600 max-[400px]:w-full p-2 block lg:rounded-r-xl translate-x-[70%] ease-in-out duration-700 transition-all"
          />
        </div>
        <div className="flex justify-center mt-5">
          <div>
            <label htmlFor="user-password" className="">
              Password
            </label>
            <input
              onChange={(e) =>
                setInfo((p) => (p = { ...p, password: e.target.value }))
              }
              type="password"
              id="user-password"
              className="bg-rose-50 border-none outline-none text-teal-600 p-2 block rounded-xl ease-in-out duration-700 transition-all h-4"
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