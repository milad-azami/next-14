"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import Todo from "@/models/Todo";
import connectDB from "@/utils/connectDB";

const addTodo = async (formData) => {
  await connectDB();

  const title = formData.get("title");
  const description = formData.get("description");

  const todo = await Todo.create({ title, description });
  revalidatePath("/");
  //   redirect("/todos");
  const cookie = cookies();
  console.log(cookie.get("accessToken"));
};

export { addTodo };
