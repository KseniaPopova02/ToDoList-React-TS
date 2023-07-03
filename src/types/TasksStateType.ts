import { TaskType } from "./TaskType";

export type TasksStateType = {
  [key: string]: Array<TaskType>;
};
