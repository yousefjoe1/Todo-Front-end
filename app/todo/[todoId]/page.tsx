import React from "react";
import Link from "next/link";

import { ChakraUiProv } from "@/app/Providers/ChakraUiProv";
import { GrDocumentUpdate } from "react-icons/gr";
import { FcHome } from "react-icons/fc";

import axios from "axios";

import TodoBtns from "@/app/_components/Btns/TodoBtns";
import UpdateTodo from "@/app/_components/Forms/UpdateTodo";
import CustomModal from "@/app/_components/Modals/CustomModal";
import TodoCard from "@/app/_components/Customs/TodoCard";

interface TodoItem {
  id: string;
  title: string;
  details: string;
  done: boolean;
}

const gettodo = async (id: string) => {
  try {
    let m = await axios.get(`http://localhost:5000/api/todos/${id}`);
    return m.data;
  } catch (error) {
    return { er: true };
  }
};

const page = async ({ params }: { params: { todoId: string } }) => {
  const { todoId } = params;

  const todo = await gettodo(todoId);

  //   console.log(todo, "details");

  if (todo?.er == true) {
    return <div className="h-screen">
      <h3 className="h-10 mt-2 w-fit text-white p-2 rounded-xl mx-auto bg-red-500"> Todo Not Found  </h3>
      <Link className="h-10 mt-2 w-fit text-white p-2 rounded-xl mx-auto bg-slate-600 flex gap-3 items-center" href={'/'}>Return Home <FcHome /> </Link>
    </div>
  }

  const details: TodoItem = todo.todo;

  return (
    <div className="min-h-screen p-8">
      <TodoCard todo={details} fullDetails={true} />
    </div>
  );
};

export default page;
