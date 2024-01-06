import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
  preloadedState: {
    todos: getStoredTodos(),
  },
});

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos));
});

function getStoredTodos(): Todo[] {
  try {
    const localTodos = localStorage.getItem("todos");
    if (!localTodos) return [];
    return JSON.parse(localTodos);
  } catch (error) {
    return [];
  }
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
