import React from "react";
import DoneTodo from "./DoneTodo";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "../Forms/UpdateTodo";

import { FaEye } from "react-icons/fa";
import Link from "next/link";

interface TodoItem {
  id: string;
  title: string;
  details: string;
  done: boolean;
}

const TodoCard = ({ todo }: { todo: TodoItem }) => {
  return (
    <div key={todo.id} className="todo-card flex flex-col gap-2 rounded-lg">
      <div className="todo-info bg-teal-600 p-2 rounded-xl">
        <h2 className="text-white">title : {todo.title}</h2>
        <p className="text-sm text-white max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
          details: {todo.details}
        </p>
      </div>

      <div className="actions flex justify-around inputbg rounded-b-xl p-1">
        <DoneTodo todo={todo} />

        <DeleteTodo id={todo.id} />

        <UpdateTodo todo={todo} />

        <Link
          href={`/todo/${todo.id}`}
          className="text-sm rounded-lg w-fit"
        >
          <FaEye className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default TodoCard;