import React from "react";
import { EditableSpan } from "../../components";
import { PropsTypeTasksList } from "./PropsTypeTasksList";
import { Button } from "../../components";
import { StyledDeleteIcon } from "../../styles";

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
              isTodoTitle={false}
              title={task.title}
              handleTitleChange={handleTitleChange}
            />
            <Button styleType={"delete"} handleClick={handleDeleteTask}>
              <StyledDeleteIcon />
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
