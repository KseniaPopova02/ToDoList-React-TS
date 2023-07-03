import React from "react";
import { EditableSpan } from "../../components";

type PropsType = {
  title: string;
  handleChangeTodoListTitle: (newTitle: string) => void;
  deleteTodoList: () => void;
};

export const InputAddTL: React.FC<PropsType> = ({
  title,
  handleChangeTodoListTitle,
  deleteTodoList,
}) => {
  return (
    <div>
      <EditableSpan
        title={title}
        handleTitleChange={handleChangeTodoListTitle}
      />
      <button onClick={deleteTodoList}>x</button>
    </div>
  );
};
