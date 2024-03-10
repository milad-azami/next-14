"use client";

import { addTodo } from "@/actions/todo";
import Button from "@/ui/Button";
import { useRef } from "react";

function ClientTodoForm() {
  const ref = useRef(null);

  return (
    <>
      <div>
        <form
          ref={ref}
          action={async (formData) => {
            await addTodo(formData);
            ref.current.reset();
          }}
        >
          <div>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input id="description" name="description" type="text" />
          </div>
          <Button />
        </form>
      </div>
    </>
  );
}

export default ClientTodoForm;
