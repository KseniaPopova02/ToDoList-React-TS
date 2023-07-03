import { useState, ChangeEvent } from "react";
import { Input } from "@mui/material";

type PropsType = {
  title: string;
  handleTitleChange: (newValue: string) => void;
};

export const EditableSpan = (props: PropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");

  const activateEditMode = () => {
    setEditMode(true);
    setTitle(props.title);
  };
  const activateViewMode = () => {
    setEditMode(false);
    props.handleTitleChange(title);
  };

  const getTitleChangedValue = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);

  return editMode ? (
    <Input
      onChange={getTitleChangedValue}
      onBlur={activateViewMode}
      autoFocus
      value={title}
    />
  ) : (
    <span onDoubleClick={activateEditMode}>{props.title}</span>
  );
};
