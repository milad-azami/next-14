"use client";

import { addTodo } from "@/actions/todo";
import Button from "@/ui/Button";

function ClientTodoForm() {
  return (
    <>
      <div>
        <form action={addTodo}>
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
