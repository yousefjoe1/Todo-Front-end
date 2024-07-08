"use client";
import React, { useState } from "react";

import { Spinner, useToast } from "@chakra-ui/react";
import { ChakraUiProv } from "@/app/Providers/ChakraUiProv";

import update from "@/app/_ServerActions/update";

import CustomModal from "../Modals/CustomModal";

import { GrDocumentUpdate } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";

interface TodoItem {
  id: string;
  title: string;
  details: string;
  done: boolean
}

const UpdateTodo = ({ todo }: { todo: TodoItem }) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const msg = useToast();

  const { id, title, details } = todo;
  const [todoItem, setTodoItem] = useState({
    title: title,
    details: details,
  });

  const updateFunc = async () => {
    const d = { title: todoItem.title, details: todoItem.details, done: todo.done };

    setIsSubmit((p) => !p);
    let resp = await update(id, d);
    let resMsg = resp.data.todoData;
    setIsSubmit((p) => !p);
    msg({ title: resMsg, status: "success", duration: 3000,position:'top' });
  };

  return (
    <ChakraUiProv>
    <CustomModal
      btnName=""
      btnIcon={
        <CiEdit className="text-xl " />
      }
    >
      <div className="flex flex-col gap-3 my-8">
        <input
          className="bg-gray-700 text-white p-2 rounded-lg my-1"
          type="text"
          value={todoItem.title}
          name="title"
          id="title"
          onChange={(e) =>
            setTodoItem((p) => (p = { ...p, title: e.target.value }))
          }
        />
        <textarea
          className="bg-gray-700 text-white p-2 rounded-lg my-1"
          value={todoItem.details}
          name="details"
          id="details"
          onChange={(e) =>
            setTodoItem((p) => (p = { ...p, details: e.target.value }))
          }
        />

        {isSubmit ? (
          <Spinner size={"sm"} height={5} width={1} />
        ) : (
          <button
            onClick={updateFunc}
            className="p-2 bg-green-600 text-white hover:bg-gray-950 outline-none border-none block rounded-lg"
            type="submit"
          >
            Update
          </button>
        )}
      </div>

    </CustomModal>
  </ChakraUiProv>
  );
};

export default UpdateTodo;
