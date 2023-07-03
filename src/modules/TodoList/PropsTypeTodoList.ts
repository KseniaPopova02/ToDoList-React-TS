import { FilterValuesType, TaskType } from "../../types";

export type PropsTypeTodoList = {
  title: string;
  tasks: Array<TaskType>;
  id: string;
  deleteTask: (taskId: string, todoListId: string) => void;
  changeFilter: (value: FilterValuesType, todoListId: string) => void;
  handleAddTask: (item: string, todoListId: string) => void;
  changeTaskStatus: (taskId: string, todoListId: string) => void;
  handleDeleteTodoList: (todoListId: string) => void;
  changeTaskTitle: (
    taskId: string,
    newTitle: string,
    todoListId: string
  ) => void;
  changeTodoListTitle: (todoListId: string, newTodoListTitle: string) => void;
};
