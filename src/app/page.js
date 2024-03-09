import ClientTodoForm from "@/components/ClientTodoForm";
import ServerTodoForm from "@/components/ServerTodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main>
      <h2>Server Actions Demo</h2>
      {/* <ServerTodoForm /> */}
      <ClientTodoForm />
      <TodoList />
    </main>
  );
}
