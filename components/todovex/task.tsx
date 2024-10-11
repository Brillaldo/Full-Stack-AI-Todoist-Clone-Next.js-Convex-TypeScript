'use client'; // Añadir esta línea al principio del archivo

import { api } from "@/convex/_generated/api";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import clsx from "clsx";
import { useQuery } from "convex/react";

export default function Task({taskName, _id, isCompleted,
  handleOnChange}) {
  return (
    <div
      key={_id}
      className="flex items-center space-x-2 border-b-2 p-2 border-gray-100 animate-in fade-in"
    >
      <Dialog>
        <div className="flex gap-2 items-center justify-end w-full">
          <div className="flex gap-2 w-full">
            <Checkbox
              id="todo"
              className={clsx(
                "w-5 h-5 rounded-xl",
                isCompleted &&
                  "data-[state=checked]:bg-gray-300 border-gray-300"
              )}
              checked={isCompleted}
              onCheckedChange={handleOnChange}
            />
            <DialogTrigger asChild>
              <div className="flex flex-col items-start">
                <button
                  className={clsx(
                    "text-sm font-normal text-left",
                    isCompleted && "line-through text-foreground/30"
                  )}
                >
                  {taskName}
                </button>
                
              </div>
            </DialogTrigger>
          </div>
          
        </div>
      </Dialog>
    </div>
  );
}

