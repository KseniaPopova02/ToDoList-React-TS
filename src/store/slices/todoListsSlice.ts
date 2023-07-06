import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoListType, FilterValuesType } from "../../types";

type TodoListsState = {
  todoLists: TodoListType[];
};

const initialState: TodoListsState = {
  todoLists: [],
};

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
});

export const {
  addTodoList,
  deleteTodoList,
  changeTodoListTitle,
  changeFilter,
} = todoListsSlice.actions;

export const todoListsReducer = todoListsSlice.reducer;
