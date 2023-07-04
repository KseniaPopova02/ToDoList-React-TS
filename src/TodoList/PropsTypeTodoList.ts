import { FilterValuesType, TaskType } from "../types";

export type PropsTypeTodoList = {
  title: string;
  tasks: Array<TaskType>;
  todoListId: string;
  deleteTask: (taskId: string, todoListId: string) => void;
  changeFilter: (value: FilterValuesType, todoListId: string) => void;
  addTask: (item: string, todoListId: string) => void;
  changeTaskStatus: (taskId: string, todoListId: string) => void;
  deleteTodoList: (todoListId: string) => void;
  changeTaskTitle: (
    taskId: string,
    newTitle: string,
    todoListId: string
  ) => void;
  changeTodoListTitle: (todoListId: string, newTodoListTitle: string) => void;
};
