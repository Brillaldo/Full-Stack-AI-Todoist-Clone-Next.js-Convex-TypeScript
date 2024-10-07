"use client";
import { api } from '@/convex/_generated/api'
import { Checkbox } from '@radix-ui/react-checkbox'
//import { useQuery } from 'convex-helpers/react/cache/hooks'
import { useQuery } from 'convex/react';
import React from 'react'
import Tasks from '../todovex/task';

export default function Todolist() {

  const todos = useQuery(api.todos.get) ?? [];

  if (todos === undefined) {
    <p>Loading ...</p>
  }
  return (
    <div className='xl: px-40'>
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold md:text-2xl'>
          Inbox</h1>
      </div>
      <div className='flex flex-col gap-1 py-4'>
        {todos.map((task, idx) => (
          <Tasks {...task} key={task._id} />

        ))}
      </div>
    </div>
  )
}


