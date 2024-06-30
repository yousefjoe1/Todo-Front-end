import React, { Suspense } from "react";
import Link from "next/link";

import { Spinner } from "@chakra-ui/react";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdOutlinePreview } from "react-icons/md";

import { ChakraUiProv } from "./Providers/ChakraUiProv";

import getData from "@/Requests/getData";

import CreateTodos from "./_components/Forms/CreateTodos";
import TodoBtns from "./_components/Btns/TodoBtns";
import CustomModal from "./_components/Modals/CustomModal";
import UpdateTodo from "./_components/Forms/UpdateTodo";
import todos from "./_ServerActions/todos";

interface TodoItem {
  id: string;
  title: string;
  details: string;
  done: boolean;
}

export let db = process.env.B_HOST

export default async function Home() {
  const { data, err, status } = await todos("todos?number=5");

  return (
    <main className="min-h-screen lg:p-24 md:p-12 p-4">
      <CreateTodos />
      {status == false ? (
        <h4 className="bg-red-500 p-2 rounded-lg text-white lg:text-2xl">
          {err}
        </h4>
      ) : (
        <div className="todoslist-wrapper grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <Suspense fallback={<Spinner h={60} w={2} />}>
            {data.result &&
              data.result.reverse().map((todo: TodoItem) => (
                <div
                  key={todo.id}
                  className="todo-card flex flex-col gap-2 shadow-md rounded-lg bg-teal-600 p-2"
                >
                  <h2 className="text-white">title : {todo.title}</h2>

                  <p className="text-sm text-white   max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
                    details: {todo.details}
                  </p>
<br />
                  <TodoBtns todo={todo} />

                  <div className="flex justify-between mt-3 items-center">
                    <Link
                      href={`/todo/${todo.id}`}
                      className="text-sm text-slate-300 rounded-lg hover:text-green-500 hover:bg-slate-50 w-fit "
                    >
                      <MdOutlinePreview className="text-xl" />
                    </Link>
                    <ChakraUiProv>
                      <CustomModal
                        btnName=""
                        btnIcon={
                          <GrDocumentUpdate className="hover:bg-green-500 text-slate-300 hover:rounded-md hover:p-1 text-xl hover:text-white" />
                        }
                      >
                        <UpdateTodo todo={todo} />
                      </CustomModal>
                    </ChakraUiProv>
                  </div>
                </div>
              ))}
          </Suspense>
        </div>
      )}
    </main>
  );
}
