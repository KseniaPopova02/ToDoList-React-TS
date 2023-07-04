import React from "react";
import { EditableSpan } from "../../components";
import { PropsTypeInputAddTL } from "./PropsTypeInputAddTL";

export const InputAddTL: React.FC<PropsTypeInputAddTL> = ({
  title,
  todoListId,
  changeTodoListTitle,
  deleteTodoList,
}) => {
  const handleDeleteTodoList = () => {
    deleteTodoList(todoListId);
  };
  const handleChangeTodoListTitle = (newTitle: string) => {
    changeTodoListTitle(todoListId, newTitle);
  };

  return (
    <div>
      <EditableSpan
        title={title}
        handleTitleChange={handleChangeTodoListTitle}
      />
      <button onClick={handleDeleteTodoList}>x</button>
    </div>
  );
};
