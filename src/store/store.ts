import { configureStore } from "@reduxjs/toolkit";
import { todoListsReducer, tasksReducer } from "./slices";

export const store = configureStore({
  reducer: {
    todoLists: todoListsReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
