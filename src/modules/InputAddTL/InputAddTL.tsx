import React from "react";
import { DeleteBtn, EditableSpan } from "../../components";
import { PropsTypeInputAddTL } from "./PropsTypeInputAddTL";
import { StyledWrapper } from "./style";

export const InputAddTL: React.FC<PropsTypeInputAddTL> = ({
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
        isTodoTitle
        title={title}
        handleTitleChange={handleChangeTodoListTitle}
      />
      <DeleteBtn handleDelete={handleDeleteTodoList} />
    </StyledWrapper>
  );
};
