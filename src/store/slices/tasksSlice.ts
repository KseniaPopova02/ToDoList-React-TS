import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TaskType } from "../../types";
import axios from "axios";
import { API_BASE_URL, TASKS } from "../../api";

type TasksState = {
  tasks: { [key: string]: TaskType[] };
  loading: boolean;
  error: string | null;
};

const initialState: TasksState = {
  tasks: {},
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk("todoLists/fetchTasks", async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${TASKS}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addTask = createAsyncThunk<
  { todoListId: string; task: TaskType },
  { todoListId: string; task: TaskType },
  {
    rejectValue: string;
  }
>("tasks/addTask", async ({ todoListId, task }, { rejectWithValue }) => {
  if (!task.title) {
    return rejectWithValue("Task title cannot be empty.");
  }
  try {
    const response = await axios.get(`${API_BASE_URL}/${TASKS}`);
    const tasks = response.data;

    if (!tasks[todoListId]) {
      tasks[todoListId] = [];
    }

    tasks[todoListId] = [...tasks[todoListId], task];

    await axios.put(`${API_BASE_URL}/${TASKS}`, tasks);

    return { todoListId, task };
  } catch (error) {
    return rejectWithValue("Failed to add task.");
  }
});

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async ({ todoListId, taskId }: { todoListId: string; taskId: string }) => {
    try {
      await axios.delete(`${API_BASE_URL}/${TASKS}/${todoListId}/${taskId}`);
      return { todoListId, taskId };
    } catch (error) {
      throw error;
    }
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
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
      const taskIndex = tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        tasks[taskIndex].isDone = isDone;
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
      const taskIndex = tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        tasks[taskIndex].title = newTitle;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(addTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        const { todoListId, task } = action.payload;
        if (!state.tasks[todoListId]) {
          state.tasks[todoListId] = [];
        }
        state.tasks[todoListId] = [...state.tasks[todoListId], task];
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        const { todoListId, taskId } = action.payload;
        state.tasks[todoListId] = state.tasks[todoListId].filter(
          (task) => task.id !== taskId
        );
      });
  },
});

export const { changeTaskStatus, changeTaskTitle } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
