import React from "react";
import { EditableSpan } from "../../components";
import { PropsTypeInputAddTL } from "./PropsTypeInputAddTL";

export const InputAddTL: React.FC<PropsTypeInputAddTL> = ({
  title,
  handleChangeTodoListTitle,
  handleDeleteTodoList,
}) => {
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
