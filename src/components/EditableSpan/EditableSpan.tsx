import React, { useState, ChangeEvent } from "react";
import { Input } from "@mui/material";
import { PropsTypeEditableSpan } from "./PropsTypeEditableSpan";
import { StyledSpan } from "./style";

export const EditableSpan: React.FC<PropsTypeEditableSpan> = ({
  handleTitleChange,
  title,
  isTodoTitle,
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      activateViewMode();
    }
  };

  return editMode ? (
    <Input
      onChange={getTitleChangedValue}
      onBlur={activateViewMode}
      onKeyPress={handleKeyPress}
      autoFocus
      value={newTitle}
    />
  ) : (
    <StyledSpan isTodoTitle={isTodoTitle} onDoubleClick={activateEditMode}>
      {title}
    </StyledSpan>
  );
};
