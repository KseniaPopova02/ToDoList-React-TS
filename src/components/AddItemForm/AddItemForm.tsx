import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { OutlinedInput } from "@mui/material";
import { PropsTypeAddItemForm } from "./PropsTypeAddItemForm";

export const AddItemForm: React.FC<PropsTypeAddItemForm> = ({
  handleAddItem,
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

  const addTask = () => {
    if (title.trim() === "") {
      return;
    }
    handleAddItem(title.trim());
    setTitle("");
  };

  return (
    <div>
      <OutlinedInput
        type="text"
        value={title}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
          handleKeyPress(e)
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeNewTitle(e)
        }
      />
      <button onClick={addTask}>add</button>
    </div>
  );
};
