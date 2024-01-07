import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { todoAdd, todoClear } from "../slices/todoSlice";
import { useAppDispatch } from "../hooks/storeHooks";
import { useToast } from "./ui/use-toast";
import { Settings } from "lucide-react";

const AddTodoForm = () => {
  const [title, setTitle] = useState<string>("");
  const { toast } = useToast();

  const dispatch = useAppDispatch();

  const clear = () => {
    dispatch(todoClear());
  };

  const addtodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length === 0) {
      toast({
        title: "Todo title is empty, add at least one character",
        variant: "destructive",
      });
      return;
    }

    dispatch(todoAdd(title));
    setTitle("");
  };

  return (
    <form
      onSubmit={addtodo}
      className="flex flex-row items-center gap-5 sticky top-0 left-0 z-50 bg-primary-foreground py-2 md:p-3 shadow-md md:rounded-md"
    >
      <Settings className="col-span-1" onClick={clear} />
      <Input
        placeholder="Milk..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="col-span-4 place-self-start "
      />
      <Button type="submit" className="col-span-1">
        Add
      </Button>
    </form>
  );
};

export default AddTodoForm;
