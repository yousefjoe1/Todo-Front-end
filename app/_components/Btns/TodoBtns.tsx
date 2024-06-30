"use client";
import React, { useState } from "react";
import { ChakraUiProv } from "@/app/Providers/ChakraUiProv";

import { MdDeleteForever, MdRemoveDone } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

import CustomModal from "../Modals/CustomModal";
import DeleteTodo from "../Customs/DeleteTodo";
import update from "@/app/_ServerActions/update";
import { Spinner, useToast } from "@chakra-ui/react";

interface TodoItem {
  id: string;
  title: string;
  details: string;
  done: boolean;
}

const TodoBtns = ({ todo }: { todo: TodoItem }) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const { id, done } = todo;

  const msg = useToast();

  const updateDone = async () => {
    const d = { ...todo, done: todo.done ? false : true };
    setIsSubmit((p) => !p);
    let resp = await update(todo.id, d);
    setIsSubmit((p) => !p);

    console.log(resp, "update done");
    msg({
      title: "updated",
      status: "success",
      duration: 3000,
      position: "top",
      isClosable: true,
    });
  };

  return (
    <ChakraUiProv>
      <div className="flex items-center justify-between">
        <button className="">
          {isSubmit ? (
            <Spinner size={"sm"} height={5} width={1} />
          ) : (
            <>
              {done ? (
                <MdRemoveDone
                  title="Not Done"
                  className="hover:text-teal-600 hover:bg-white rounded-xl border-b-2 border-white lg:text-xl"
                  onClick={updateDone}
                />
              ) : (
                <IoCheckmarkDoneCircleSharp
                  title="Done"
                  className="hover:text-green-600 hover:bg-white rounded-xl border-b-2 border-white lg:text-xl"
                  onClick={updateDone}
                />
              )}
            </>
          )}
        </button>

        <CustomModal
          btnName=""
          btnIcon={
            <MdDeleteForever className="hover:bg-red-500  hover:text-white rounded-xl border-b-2 border-red-600 lg:text-xl" />
          }
        >
          <DeleteTodo id={id} />
        </CustomModal>
      </div>
    </ChakraUiProv>
  );
};

export default TodoBtns;
