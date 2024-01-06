import { Check, Cross } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  todo: Todo;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoItme: React.FC<Props> = ({ todo, removeTodo, toggleTodo }) => {
  return (
    <div className="flex flex-row gap-5 items-center">
      <p>{todo.title}</p>
      <Button onClick={() => toggleTodo(todo.id)}>{todo.done ? <Check size={16} /> : <Cross />}</Button>
      <Button variant={"destructive"} onClick={() => removeTodo(todo.id)}>
        X
      </Button>
    </div>
  );
};

export default TodoItme;
