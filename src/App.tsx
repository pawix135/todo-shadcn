import React, { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { selectTodos, todoAdd, todoRemove, todoToggle } from "./slices/todoSlice";
import { useAppDispatch, useAppSelector } from "./hooks/storeHooks";
import TodoItme from "./components/TodoItem";
import { useToast } from "./components/ui/use-toast";

function App() {
  const [title, setTitle] = useState<string>("");
  const { toast } = useToast();

  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const addtodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length === 0) {
      toast({
        title: "Todo title is empty, add at least one character",
        variant: "destructive",
      });
      return;
    }

    dispatch(todoAdd());
  };

  const removeTodo = (id: string) => {
    dispatch(todoRemove(id));
  };

  const toggleTodo = (id: string) => {
    dispatch(todoToggle(id));
  };

  return (
    <main className="container mx-auto bg-primary-foreground py-5 rounded-md shadow-lg mt-5">
      <form onSubmit={addtodo} className="grid grid-cols-6 grid-rows-1 gap-5">
        <Input placeholder="Milk..." value={title} onChange={(e) => setTitle(e.target.value)} className="col-span-5" />
        <Button type="submit">Add</Button>
      </form>
      <div className="flex flex-col gap-5">
        {todos.map((todo) => (
          <TodoItme todo={todo} key={todo.id} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        ))}
      </div>
    </main>
  );
}

export default App;
