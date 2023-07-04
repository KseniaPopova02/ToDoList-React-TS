import React from "react";
import { EditableSpan } from "../../components";
import { PropsTypeTasksList } from "./PropsTypeTasksList";

export const TasksList: React.FC<PropsTypeTasksList> = ({
  tasks,
  todoListId,
  deleteTask,
  changeTaskStatus,
  changeTaskTitle,
}) => {
  return (
    <ul>
      {tasks.map((task) => {
        const handleDeleteTask = () => {
          deleteTask(task.id, todoListId);
        };

        const handleCheckboxChange = () => {
          changeTaskStatus(task.id, todoListId);
        };

        const handleTitleChange = (newValue: string) => {
          changeTaskTitle(task.id, newValue, todoListId);
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
