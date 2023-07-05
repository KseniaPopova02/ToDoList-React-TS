import React from "react";
import { Button, EditableSpan } from "../../components";
import { PropsTypeInputAddTL } from "./PropsTypeInputAddTL";
import { StyledWrapper } from "./style";
import { StyledDeleteIcon } from "../../styles";

export const TodoListTitle: React.FC<PropsTypeInputAddTL> = ({
  title,
  todoListId,
  changeTodoListTitle,
  deleteTodoList,
  isTodoTitle,
}) => {
  const handleDeleteTodoList = () => {
    deleteTodoList(todoListId);
  };
  const handleChangeTodoListTitle = (newTitle: string) => {
    changeTodoListTitle(todoListId, newTitle);
  };

  return (
    <StyledWrapper>
      <EditableSpan
        isTodoTitle={isTodoTitle}
        title={title}
        handleTitleChange={handleChangeTodoListTitle}
      />
      <Button styleType={"delete"} handleClick={handleDeleteTodoList}>
        <StyledDeleteIcon />
      </Button>
    </StyledWrapper>
  );
};
