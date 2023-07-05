import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { PropsTypeAddItemForm } from "./PropsTypeAddItemForm";
import { StyledOutlinedInput, StyledWrapper } from "./style";
import { Button } from "../Button";

export const AddItemForm: React.FC<PropsTypeAddItemForm> = ({
  handleAddItem,
  placeholderText,
}) => {
  const [title, setTitle] = useState("");

  const handleChangeNewTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      handleAddItem(title);
      setTitle("");
    }
  };

  const addTitle = () => {
    if (title.trim() === "") {
      return;
    }
    handleAddItem(title.trim());
    setTitle("");
  };

  return (
    <StyledWrapper>
      <StyledOutlinedInput
        type="text"
        placeholder={placeholderText}
        value={title}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
          handleKeyPress(e)
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeNewTitle(e)
        }
      />
      <Button styleType="add" handleClick={addTitle}>
        +
      </Button>
    </StyledWrapper>
  );
};
