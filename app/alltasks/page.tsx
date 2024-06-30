import React, { Suspense } from 'react'
import Section from '../_components/Customs/Section'
import { Spinner } from '@chakra-ui/react'
import todos from '../_ServerActions/todos';
import TodoBtns from '../_components/Btns/TodoBtns';
import Link from 'next/link';
import { MdOutlinePreview } from 'react-icons/md';
import { ChakraUiProv } from '../Providers/ChakraUiProv';
import CustomModal from '../_components/Modals/CustomModal';
import { GrDocumentUpdate } from 'react-icons/gr';
import UpdateTodo from '../_components/Forms/UpdateTodo';


interface TodoItem {
  id: string;
  title: string;
  details: string;
  done: boolean;
}

const page = async () => {
  const { data, err, status } = await todos("todos");
  return (
    <Section>
        <center>All Tasks</center>
        <br />
        <div className="todoslist-wrapper grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-3">
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
        
    </Section>
  )
}

export default page