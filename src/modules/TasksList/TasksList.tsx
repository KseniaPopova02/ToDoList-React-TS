import React from "react";
import { EditableSpan } from "../../components";
import { TaskType } from "../../types";

type PropsType = {
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

export const TasksList: React.FC<PropsType> = ({
  tasks,
  id,
  deleteTask,
  changeTaskStatus,
  changeTaskTitle,
}) => {
  return (
    <ul>
      {tasks.map((task) => {
        const handleDeleteTask = () => {
          deleteTask(task.id, id);
        };

        const handleCheckboxChange = () => {
          changeTaskStatus(task.id, id);
        };

        const handleTitleChange = (newValue: string) => {
          changeTaskTitle(task.id, newValue, id);
        };

        return (
          <li key={task.id}>
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={task.isDone}
            />
            <EditableSpan
              title={task.title}
              handleTitleChange={handleTitleChange}
            />
            <button onClick={handleDeleteTask}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};
