"use client";
import React, { FormEvent, useState } from "react";
import { Spinner, useToast } from "@chakra-ui/react";
import { ChakraUiProv } from "@/app/Providers/ChakraUiProv";

import createTodoFunc from "@/Requests/createTodoFunc";
import Image from "next/image";

const CreateTodos = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const [title, setTitle] = useState("");
  const [details, setdetails] = useState("");

  const msg = useToast();

  const submitFunc = async (e: FormEvent) => {
    e.preventDefault();

    if (title.length == 0) {
      msg({
        title: "Add a title first",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    let d = {
      title: title,
      details: details,
      done: false,
    };

    setIsSubmit((p) => !p);
    try {
      let createTodo = await createTodoFunc(d);
      if (createTodo?.isError) {
        setIsSubmit((p) => !p);

        msg({
          title: "Error: make sure u are a user",
          status: "error",
          duration: 3000,
        });
        return;
      }else {
        setIsSubmit((p) => !p);

      }
    } catch (error) {
      setIsSubmit((p) => !p);
    }
  };

  return (
    <ChakraUiProv>
      <div className="w-[100%] flex flex-col relative h-[450px]">
        <div className="absolute left-0 top-0 w-full h-[450px] flex justify-center">
          <Image
            className="w-full h-full object-contain"
            width={600}
            height={800}
            alt="background image"
            src={`/Todo-form-bg.jpg`}
          />
        </div>
        <form
          onSubmit={submitFunc}
          className="darkbg relative z-10 m-auto w-[300px] flex flex-col rounded-2xl gap-5 p-3"
        >
          <div>
            <label className="text-white" htmlFor="title">
              Title
            </label>
            <input
              onChange={(e) => setTitle((p) => e.target.value)}
              type="text"
              className="p-2 inputbg outline-none border-none rounded-lg w-full"
            />
          </div>

          <div>
            <label className="text-white" htmlFor="details">
              Details
            </label>
            <textarea
              onChange={(e) => setdetails((p) => e.target.value)}
              className="p-2 inputbg outline-none border-none rounded-lg w-full"
            />
          </div>

          {isSubmit ? (
            <Spinner size={"xl"} height={5} width={1} color="white" />
          ) : (
            <button
              className="p-2 inputbg hover:bg-teal-700 hover:text-white outline-none border-none rounded-lg"
              type="submit"
            >
              Create
            </button>
          )}
        </form>
      </div>
    </ChakraUiProv>
  );
};

export default CreateTodos;
