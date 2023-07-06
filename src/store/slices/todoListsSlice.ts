import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TodoListType, FilterValuesType } from "../../types";
import axios from "axios";
import { API_BASE_URL, TODO_LISTS } from "../../api";

type TodoListsState = {
  todoLists: TodoListType[];
  loading: boolean;
  error: string | null;
};

const initialState: TodoListsState = {
  todoLists: [],
  loading: false,
  error: null,
};

export const fetchTodoLists = createAsyncThunk<
  TodoListType[],
  undefined,
  { rejectValue: string }
>("todoLists/fetchTodoLists", async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${TODO_LISTS}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const todoListsSlice = createSlice({
  name: "todoLists",
  initialState,
  reducers: {
    addTodoList: (state, action: PayloadAction<TodoListType>) => {
      const todoList = action.payload;
      state.todoLists.push(todoList);
    },
    deleteTodoList: (state, action: PayloadAction<string>) => {
      const todoListId = action.payload;
      state.todoLists = state.todoLists.filter(
        (todoList) => todoList.id !== todoListId
      );
    },
    changeTodoListTitle: (
      state,
      action: PayloadAction<{ todoListId: string; newTitle: string }>
    ) => {
      const { todoListId, newTitle } = action.payload;
      const todoList = state.todoLists.find(
        (todoList) => todoList.id === todoListId
      );
      if (todoList) {
        todoList.title = newTitle;
      }
    },
    changeFilter: (
      state,
      action: PayloadAction<{ todoListId: string; filter: FilterValuesType }>
    ) => {
      const { todoListId, filter } = action.payload;
      const todoList = state.todoLists.find(
        (todoList) => todoList.id === todoListId
      );
      if (todoList) {
        todoList.filter = filter;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoLists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodoLists.fulfilled, (state, action) => {
        state.loading = false;
        state.todoLists = action.payload;
      })
      .addCase(fetchTodoLists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export const {
  addTodoList,
  deleteTodoList,
  changeTodoListTitle,
  changeFilter,
} = todoListsSlice.actions;

export const todoListsReducer = todoListsSlice.reducer;
