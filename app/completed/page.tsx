import React, { Suspense } from 'react'
import Section from '../_components/Customs/Section'
import todos from '../_ServerActions/todos';

import { Spinner } from '@chakra-ui/react';
import TodoCard from '../_components/Customs/TodoCard';

interface TodoItem {
    id: string;
    title: string;
    details: string;
    done: boolean;
  }

const page = async () => {
  const { data, err, status } = await todos("todos?completed=true");

  return (
    <Section>
        <center>Completed</center>
        <div className="todoslist-wrapper grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-4 mt-3">

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