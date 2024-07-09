import React, { Suspense } from "react";
import Link from "next/link";

import { Spinner } from "@chakra-ui/react";

import CreateTodos from "./_components/Forms/CreateTodos";

import todos from "./_ServerActions/todos";
import TodoCard from "./_components/Customs/TodoCard";

interface TodoItem {
  id: string;
  title: string;
  details: string;
  done: boolean;
}

export let db = process.env.B_HOST

export default async function Home() {
  const { data, err, status } = await todos("todos?number=6");

  return (
    <main className="min-h-screen lg:p-24 md:p-12 p-4">
      <CreateTodos />
      <br />
      {status == false ? (
        <h4 className="bg-red-500 p-2 rounded-lg text-white lg:text-2xl">
          {err}
        </h4>
      ) : (
        <>
        <Link href={'/alltasks'} className="flex my-3">
        First 6 todos .. <center className="flex-1"><strong className="text-teal-600">See all {">"}</strong></center>
        </Link>
        <div className="todoslist-wrapper grid lg:grid-cols-3 md:grid-cols-2 gap-4">

          <Suspense fallback={<Spinner h={60} w={2} />}>
            {data.result &&
              data.result.reverse().map((todo: TodoItem) => (
                <TodoCard todo={todo} fullDetails={false} />
              ))}
          </Suspense>
        </div>
        </>
      )}
    </main>
  );
}
