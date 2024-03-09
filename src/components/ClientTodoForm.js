"use client";

import { addTodo } from "@/actions/todo";

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
          <button type="submit"> Add Todo</button>
        </form>
      </div>
    </>
  );
}

export default ClientTodoForm;
