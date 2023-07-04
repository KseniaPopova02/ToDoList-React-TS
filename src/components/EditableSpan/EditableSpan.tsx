import React, { useState, ChangeEvent } from "react";
import { Input } from "@mui/material";
import { PropsTypeEditableSpan } from "./PropsTypeEditableSpan";

export const EditableSpan: React.FC<PropsTypeEditableSpan> = ({
  handleTitleChange,
  title,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const activateEditMode = () => {
    setEditMode(true);
    setNewTitle(title);
  };
  const activateViewMode = () => {
    setEditMode(false);
    handleTitleChange(newTitle);
  };

  const getTitleChangedValue = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTitle(e.currentTarget.value);

  return editMode ? (
    <Input
      onChange={getTitleChangedValue}
      onBlur={activateViewMode}
      autoFocus
      value={newTitle}
    />
  ) : (
    <span onDoubleClick={activateEditMode}>{title}</span>
  );
};
