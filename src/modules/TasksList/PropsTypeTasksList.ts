import { TaskType } from "../../types";

export type PropsTypeTasksList = {
  tasks: Array<TaskType>;
  id: string;
  deleteTask: (taskId: string, todoListId: string) => void;
  changeTaskStatus: (taskId: string, todoListId: string) => void;
  changeTaskTitle: (
    taskId: string,
    newTitle: string,
    todoListId: string
  ) => void;
};
