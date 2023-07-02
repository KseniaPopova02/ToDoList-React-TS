import { useState, ChangeEvent, KeyboardEvent } from "react";

type PropsType = {
  handleAddItem: (item: string) => void;
};

export const AddItemForm = (props: PropsType) => {
  const [title, setTitle] = useState("");

  const handleChangeNewTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      props.handleAddItem(title);
      setTitle("");
    }
  };

  const addTask = () => {
    if (title.trim() === "") {
      return;
    }
    props.handleAddItem(title.trim());
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onKeyPress={(e) => handleKeyPress(e)}
        onChange={(e) => handleChangeNewTitle(e)}
      />
      <button onClick={addTask}>add</button>
    </div>
  );
};
