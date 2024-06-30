"use client";
import React, { FormEvent, useState } from "react";
import { Spinner, useToast } from "@chakra-ui/react";
import { ChakraUiProv } from "@/app/Providers/ChakraUiProv";

import createTodoFunc from "@/Requests/createTodoFunc";

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
        // msg({ title: "Error", status: "success", duration: 3000 });
      }
    } catch (error) {}
    setIsSubmit((p) => !p);
  };

  return (
    <ChakraUiProv>
      {/* <div className="mb-7"> */}
        <form
          onSubmit={submitFunc}
          className="bg-slate-50 grid lg:grid-cols-1 md:grid-cols-1 place-items-center rounded-2xl gap-5 p-3"
        >
          <h3 className="bg-slate-400 p-2 rounded-xl">Create Todo</h3>
          <div>
            <label htmlFor="title">Title</label>
            <input
              onChange={(e) => setTitle((p) => e.target.value)}
              type="text"
              className="p-2 bg-slate-500  text-white outline-none border-none block rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="details">Details</label>
            <textarea
              onChange={(e) => setdetails((p) => e.target.value)}
              className="p-2 bg-slate-500 outline-none text-white border-none block rounded-lg"
            />
          </div>

          {isSubmit ? (
            <Spinner size={"sm"} height={5} width={1} />
          ) : (
            <button
              className="p-2 bg-slate-500 text-white hover:bg-gray-950 outline-none border-none block rounded-lg"
              type="submit"
            >
              Create
            </button>
          )}
        </form>
      {/* </div> */}
    </ChakraUiProv>
  );
};

export default CreateTodos;
