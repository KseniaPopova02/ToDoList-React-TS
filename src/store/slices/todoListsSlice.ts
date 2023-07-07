import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from "@reduxjs/toolkit";
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

const isError = (action: AnyAction) => {
  return action.type.endsWith("rejected");
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

export const addTodoList = createAsyncThunk<
  TodoListType,
  TodoListType,
  { rejectValue: string }
>(
  "todoLists/addTodoList",
  async (todoList: TodoListType, { rejectWithValue }) => {
    if (!todoList.title) {
      return rejectWithValue("Todo list title cannot be empty.");
    }
    try {
      const response = await axios.post(
        `${API_BASE_URL}/${TODO_LISTS}`,
        todoList
      );
      return response.data as TodoListType;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Failed to add todo list.");
    }
  }
);

export const deleteTodoList = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>(
  "todoLists/deleteTodoList",
  async (todoListId: string, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/${TODO_LISTS}/${todoListId}`);
      return todoListId;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Failed to delete todo list.");
    }
  }
);

export const changeTodoListTitle = createAsyncThunk<
  { todoListId: string; newTitle: string },
  { todoListId: string; newTitle: string },
  { rejectValue: string }
>(
  "todoLists/changeTodoListTitle",
  async ({ todoListId, newTitle }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/${TODO_LISTS}/${todoListId}`,
        {
          title: newTitle,
        }
      );
      return { todoListId, newTitle: response.data.title };
    } catch (error) {
      console.log(error);
      return rejectWithValue("Failed to change todo list title.");
    }
  }
);

export const changeFilter = createAsyncThunk<
  { todoListId: string; filter: FilterValuesType },
  { todoListId: string; filter: FilterValuesType },
  { rejectValue: string }
>(
  "todoLists/changeFilter",
  async ({ todoListId, filter }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/${TODO_LISTS}/${todoListId}`,
        {
          filter,
        }
      );
      return { todoListId, filter: response.data.filter };
    } catch (error) {
      console.log(error);
      return rejectWithValue("Failed to change filter.");
    }
  }
);
const todoListsSlice = createSlice({
  name: "todoLists",
  initialState,
  reducers: {},
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
      .addCase(addTodoList.pending, (state) => {
        state.error = null;
      })
      .addCase(addTodoList.fulfilled, (state, action) => {
        state.loading = false;
        state.todoLists.push(action.payload);
      })
      .addCase(deleteTodoList.fulfilled, (state, action) => {
        state.loading = false;
        state.todoLists = state.todoLists.filter(
          (todoList) => todoList.id !== action.payload
        );
      })
      .addCase(changeTodoListTitle.fulfilled, (state, action) => {
        state.loading = false;
        const { todoListId, newTitle } = action.payload;
        state.todoLists = state.todoLists.map((todoList) => {
          if (todoList.id === todoListId) {
            return {
              ...todoList,
              title: newTitle,
            };
          }
          return todoList;
        });
      })
      .addCase(changeFilter.fulfilled, (state, action) => {
        state.loading = false;
        const { todoListId, filter } = action.payload;
        state.todoLists = state.todoLists.map((todoList) => {
          if (todoList.id === todoListId) {
            return {
              ...todoList,
              filter: filter,
            };
          }
          return todoList;
        });
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const todoListsReducer = todoListsSlice.reducer;
