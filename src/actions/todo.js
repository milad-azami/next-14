"use server";

import Todo from "@/models/Todo";
import connectDB from "@/utils/connectDB";

const addTodo = async (formData) => {
  await connectDB();

  const title = formData.get("title");
  const description = formData.get("description");

  const todo = await Todo.create({ title, description });
  console.log(todo);
};

export { addTodo };
