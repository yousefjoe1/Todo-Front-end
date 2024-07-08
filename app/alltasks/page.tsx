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
import TodoCard from '../_components/Customs/TodoCard';


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
                <TodoCard todo={todo} fullDetails={false} />
              ))}
          </Suspense>
        </div>
        
    </Section>
  )
}

export default page