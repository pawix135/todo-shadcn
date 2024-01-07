import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <main className="container mx-auto bg-primary-foreground py-5 rounded-md shadow-lg  flex flex-col gap-5 xl:my-5">
      <AddTodoForm />
      <TodoList />
    </main>
  );
}

export default App;
