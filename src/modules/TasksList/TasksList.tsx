import React from "react";
import { EditableSpan } from "../../components";
import { PropsTypeTasksList } from "./PropsTypeTasksList";
import { Button } from "../../components";
import { StyledDeleteIcon } from "../../styles";
import { Checkbox } from "@mui/material";
import {
  StyledLi,
  StyledTaskWrapper,
  StyledUl,
  StyledStarIcon,
  StyledStarBorderIcon,
} from "./style";

export const TasksList: React.FC<PropsTypeTasksList> = ({
  tasks,
  todoListId,
  deleteTask,
  changeTaskStatus,
  changeTaskTitle,
}) => {
  return (
    <StyledUl>
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
          <StyledLi key={task.id}>
            <StyledTaskWrapper>
              <div>
                <Checkbox
                  icon={<StyledStarBorderIcon />}
                  checkedIcon={<StyledStarIcon />}
                  onChange={handleCheckboxChange}
                  checked={task.isDone}
                />
                <EditableSpan
                  isTodoTitle={false}
                  title={task.title}
                  handleTitleChange={handleTitleChange}
                />
              </div>

              <Button
                isActive={false}
                styleType={"delete"}
                handleClick={handleDeleteTask}
              >
                <StyledDeleteIcon />
              </Button>
            </StyledTaskWrapper>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};
