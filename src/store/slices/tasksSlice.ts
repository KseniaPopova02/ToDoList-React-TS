import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskType } from "../../types";

type TasksState = {
  tasks: { [key: string]: TaskType[] };
};

const initialState: TasksState = {
  tasks: {},
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{ todoListId: string; task: TaskType }>
    ) => {
      const { todoListId, task } = action.payload;
      if (state.tasks[todoListId]) {
        state.tasks[todoListId].push(task);
      } else {
        state.tasks[todoListId] = [task];
      }
    },
    deleteTask: (
      state,
      action: PayloadAction<{ todoListId: string; taskId: string }>
    ) => {
      const { todoListId, taskId } = action.payload;
      state.tasks[todoListId] = state.tasks[todoListId].filter(
        (task) => task.id !== taskId
      );
    },
    changeTaskStatus: (
      state,
      action: PayloadAction<{
        todoListId: string;
        taskId: string;
        isDone: boolean;
      }>
    ) => {
      const { todoListId, taskId, isDone } = action.payload;
      const tasks = state.tasks[todoListId];
      const task = tasks.find((task) => task.id === taskId);
      if (task) {
        task.isDone = isDone;
      }
    },
    changeTaskTitle: (
      state,
      action: PayloadAction<{
        todoListId: string;
        taskId: string;
        newTitle: string;
      }>
    ) => {
      const { todoListId, taskId, newTitle } = action.payload;
      const tasks = state.tasks[todoListId];
      const task = tasks.find((task) => task.id === taskId);
      if (task) {
        task.title = newTitle;
      }
    },
  },
});

export const { addTask, deleteTask, changeTaskStatus, changeTaskTitle } =
  tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
