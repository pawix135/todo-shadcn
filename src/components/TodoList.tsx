import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { selectTodos, todoRemove, todoToggle } from "@/slices/todoSlice";
import TodoItem from "./TodoItem";
import { useCallback } from "react";
import { useTransition, animated } from "@react-spring/web";
import { ListChecks } from "lucide-react";

const TodoList = () => {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const removeTodo = useCallback(
    (id: string) => {
      dispatch(todoRemove(id));
    },
    [dispatch]
  );

  const toggleTodo = useCallback(
    (id: string) => {
      dispatch(todoToggle(id));
    },
    [dispatch]
  );

  const todoTransitions = useTransition(todos, {
    from: { opacity: 0, transform: "translate3d(0px,-30px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    leave: { opacity: 0, transform: "translate3d(0,30px,0)" },
    keys: todos.map((item) => item.id),
    config: {
      duration: 300,
    },
  });

  if (todos.length === 0)
    return (
      <div className="flex items-center justify-center flex-col gap-5">
        <h2 className="text-lg md:text-2xl lg:text-3xl text-center">Currently there are no todos, add one!</h2>
        <ListChecks size={64} />
      </div>
    );

  return (
    <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {todoTransitions((styles, item) => (
        <animated.div style={styles}>
          <TodoItem todo={item} remove={removeTodo} toggle={toggleTodo} />
        </animated.div>
      ))}
    </div>
  );
};

export default TodoList;
