'use client'
import update from '@/app/_ServerActions/update';
import { Spinner, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import { MdRemoveDone } from 'react-icons/md'


interface TodoItem {
    id: string;
    title: string;
    details: string;
    done: boolean;
  }

const DoneTodo = ({todo}:{todo:TodoItem}) => {
    const [isSubmit, setIsSubmit] = useState(false);

    const { done } = todo;
  
    const msg = useToast();
  
    const updateDone = async () => {
      const d = { ...todo, done: todo.done ? false : true };
      setIsSubmit((p) => !p);
      let resp = await update(todo.id, d);
      setIsSubmit((p) => !p);
  
      msg({
        title: "updated",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    };
  return (
    <button className="flex">
    {isSubmit ? (
      <Spinner size={"md"} height={8} width={2} color='blue' />
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
  )
}

export default DoneTodo