import Todo from "@/models/Todo";
import connectDB from "@/utils/connectDB";

async function TodoList() {
  await connectDB();
  const todos = await Todo.find();
  console.log(todos);

  return (
    <div>
      {todos.map((todo) => (
        <p key={todo._id}>
          {todo.title} - {todo.description}
        </p>
      ))}
    </div>
  );
}

export default TodoList;
