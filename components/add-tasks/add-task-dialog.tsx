import { Doc } from '@/convex/_generated/dataModel'
import { DialogContent } from '../ui/dialog'
import React, { useEffect, useState } from 'react'
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Calendar, ChevronDown, Flag, Hash, Tag } from 'lucide-react';
import {format} from 'date-fns';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import Task from '../todovex/task';
import { checkASubTodo } from '@/convex/subTodos';
export default function AddTaskDialog({
    data: {taskName, description, projectId, labelId, priority, dueDate},
}: {
    data: Doc<'todos'>;
}) 
 {
    const project = useQuery(api.projects.getProjectByProjectId, {
        projectId});
    const label = useQuery(api.labels.getLabelByLabelId, {
            labelId});
    const [todoDetails, setTodoDetails] = useState([]);

    useEffect(() => {

    
    const data =[
        {
            labelName: 'Projects',
            value: project?.name,
            icon: <Hash className='w-4 h-4 text-primary capitalize'/>

        },
        {
            labelName: 'Due date',
            value: format(dueDate, "MMM dd yyyy"),
            icon: <Calendar className='w-4 h-4 text-primary capitalize'/>

        },
        {
            labelName: 'Priority',
            value: priority,
            icon: <Flag className='w-4 h-4 text-primary capitalize'/>

        },
        {
            labelName: 'Label',
            value: label?.name,
            icon: <Tag className='w-4 h-4 text-primary capitalize'/>

        },
    ];
    setTodoDetails(data);
    }, [dueDate, label?.name, priority, project]);
  return (
    <DialogContent className='max-w-4xl lg:h-4/6 flex flex-col md:flex-row lg:justify-between text-right'>
    <DialogHeader>
      <DialogTitle>{taskName}</DialogTitle>
      <DialogDescription>

        <p className='my-2 capitalize'>{description}</p>
        <div className='flex items-center gap-1 mt-12 border-b-2 border-gray-100 pb-2 flex-wrap sm:justify-between lg:gap-0'>
            <div className='flex gap-1'>
                <ChevronDown className='w-5 h-5 text-primary' />
                <p className='font-bold flex text-sm text-gray-900'>Sub Task</p>

            </div>
            <div>
                <Button variant={"outline"}>Suggest Missing Tasks (AI)</Button>
            </div>

        </div>
        <div className='pl-4'>
            {[].map((task, idx ) => {
                return <Task key={taskName._id}
                {...task} isCompleted={taskName.isCompleted}
                />;
            })}
        </div>

      </DialogDescription>
    </DialogHeader>
    <div className='flex flex-col gap-2 bg-gray-100 lg:w-1/2'>
        {todoDetails.map(({labelName, value, icon}, idx) => (
            <div 
            key={`${value}-${idx}`}
            className='grid gap-2 p-4 border-b-2 w-full'
            >
            <Label className='flex items-start'> {labelName} </Label>
            <div className='flex text-left items-center justify-start gap-2 pb-2'>
                {icon}
                    <p className='text-sm'>{value}</p>
            </div>
        </div>
        ))}
    </div>

    </DialogContent>
  )
}


