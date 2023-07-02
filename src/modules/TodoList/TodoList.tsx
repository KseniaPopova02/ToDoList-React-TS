import { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType } from "../../App";

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  deleteTask: (taskId: string, todoListId: string) => void;
  changeFilter: (value: FilterValuesType, todoListId: string) => void;
  handleAddTask: (item: string, todoListId: string) => void;
  changeTaskStatus: (taskId: string, todoListId: string) => void;
  id: string;
};

export const TodoList = (props: PropsType) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleChangeNewTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      props.handleAddTask(newTaskTitle, props.id);
      setNewTaskTitle("");
    }
  };

  const addTask = () => {
    if (newTaskTitle.trim() === "") {
      return;
    }
    props.handleAddTask(newTaskTitle.trim(), props.id);
    setNewTaskTitle("");
  };

  const handleFilterChange = (value: FilterValuesType) => {
    switch (value) {
      case "all":
        props.changeFilter("all", props.id);
        break;
      case "inProgress":
        props.changeFilter("inProgress", props.id);
        break;
      case "completed":
        props.changeFilter("completed", props.id);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <h3>{props.title}</h3>
      <div>
        <button
          onClick={() => {
            handleFilterChange("all");
          }}
        >
          All
        </button>

        <button
          onClick={() => {
            handleFilterChange("inProgress");
          }}
        >
          In progress
        </button>

        <button
          onClick={() => {
            handleFilterChange("completed");
          }}
        >
          Completed
        </button>
      </div>
      <div>
        <input
          type="text"
          value={newTaskTitle}
          onKeyPress={(e) => handleKeyPress(e)}
          onChange={(e) => handleChangeNewTitle(e)}
        />
        <button onClick={addTask}>add</button>
      </div>
      <ul>
        {props.tasks.map((task) => {
          const handleDeleteTask = () => {
            props.deleteTask(task.id, props.id);
          };

          const handleCheckboxChange = () => {
            props.changeTaskStatus(task.id, props.id);
          };

          return (
            <li key={task.id}>
              <input
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={task.isDone}
              />
              <span>{task.title}</span>
              <button onClick={handleDeleteTask}>delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
