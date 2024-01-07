import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { CheckSquare2, Scan } from "lucide-react";
import { animated, useSpring } from "@react-spring/web";

interface Props {
  todo: Todo;
  remove: (id: string) => void;
  toggle: (id: string) => void;
}

const AnimatedButton = animated(Button);

const TodoItme: React.FC<Props> = React.memo(({ todo, toggle, remove }) => {
  const [toggleProps, toggleApi] = useSpring(() => ({
    from: { transform: "translate3d(0,0,0)", scale: 1 },
    config: {
      duration: 100,
    },
  }));

  const removeTodo = () => remove(todo.id);

  const toggleTodo = () => {
    toggleApi.start({
      from: { transform: "translate3d(0,0,0)", scale: 1 },
      to: { transform: "translate3d(0,-5px,0)", scale: 1.2 },
      onRest: () => {
        toggleApi.start({
          from: { transform: "translate3d(0,-5px,0)", scale: 1.2 },
          to: { transform: "translate3d(0,-0px,0)", scale: 1 },
        });
      },
    });
    toggle(todo.id);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-row justify-between items-center w-full gap-2">
          <span>{todo.title}</span>
          <AnimatedButton style={toggleProps} variant={"ghost"} size={"icon"} onClick={toggleTodo}>
            {todo.done ? <CheckSquare2 fill="green" color="white" /> : <Scan color="red" />}
          </AnimatedButton>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-5 items-center">
          <Button onClick={removeTodo} variant={"destructive"}>
            Remove
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

export default TodoItme;
