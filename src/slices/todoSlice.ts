import { v4 } from "uuid";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";

const initialTodoState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodoState,
  reducers: {
    todoAdd: (state) => {
      state.push({ created_at: Date.now(), done: false, title: v4(), updated_at: Date.now(), id: v4() });
    },
    todoToggle: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
        todo.updated_at = Date.now();
      }
    },
    todoRemove: (state, action: PayloadAction<string>) => {
      const todoIndex = state.findIndex((todo) => todo.id === action.payload);
      state.splice(todoIndex, 1);
    },
  },
});

export const { todoAdd, todoRemove, todoToggle } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todoSlice.reducer;
