import React, { useState, ChangeEvent } from "react";
import { Input } from "@mui/material";
import { PropsTypeEditableSpan } from "./PropsTypeEditableSpan";

export const EditableSpan: React.FC<PropsTypeEditableSpan> = ({
  handleTitleChange,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");

  const activateEditMode = () => {
    setEditMode(true);
    setTitle(title);
  };
  const activateViewMode = () => {
    setEditMode(false);
    handleTitleChange(title);
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
    <span onDoubleClick={activateEditMode}>{title}</span>
  );
};
