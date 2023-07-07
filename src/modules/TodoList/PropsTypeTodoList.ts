import { FilterValuesType } from "../../types";
import { TaskType } from "../../types";

export type PropsTypeTodoList = {
  title: string;
  todoListId: string;
  changeTodoListTitle: (todoListId: string, newTodoListTitle: string) => void;
  deleteTodoList: (todoListId: string) => void;
  changeFilter: (value: FilterValuesType, todoListId: string) => void;
  placeholderText: string;
  handleAddItem: (item: string) => void;
  tasks: Array<TaskType>;
  deleteTask: (taskId: string, todoListId: string) => void;
  changeTaskStatus: (taskId: string, todoListId: string) => void;
  changeTaskTitle: (
    taskId: string,
    newTitle: string,
    todoListId: string
  ) => void;
};
