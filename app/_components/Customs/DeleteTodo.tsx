"use client";
import React, { useState } from "react";

import { ChakraUiProv } from "@/app/Providers/ChakraUiProv";
import { Spinner, useToast } from "@chakra-ui/react";

import deleteTodo from "@/app/_ServerActions/deleteTodo";
import CustomModal from "../Modals/CustomModal";
import { MdDeleteForever } from "react-icons/md";

const DeleteTodo = ({ id }: { id: string }) => {
  const [isSend, setisSend] = useState(false);
  const msg = useToast();

  const deleteFunc = async () => {
    setisSend((p) => !p);
    let resp = await deleteTodo(id);
    setisSend((p) => !p);
    msg({
      title: "deleted",
      status: "success",
      duration: 3000,
      position: "top",
    });
  };
  return (
    <ChakraUiProv>
      <CustomModal
        btnName=""
        btnIcon={
          <MdDeleteForever className="hover:bg-red-500  hover:text-white rounded-xl border-b-2 border-red-600 lg:text-xl" />
        }
      >
        <p className="text-red-500 text-xl">DeleteTodo</p>
        <br />
        {isSend ? (
          <Spinner h={50} w={2} />
        ) : (
          <button
            className="bg-red-600 text-white p-1 rounded-xl"
            onClick={deleteFunc}
          >
            Confirm
          </button>
        )}
      </CustomModal>
    </ChakraUiProv>
  );
};

export default DeleteTodo;
