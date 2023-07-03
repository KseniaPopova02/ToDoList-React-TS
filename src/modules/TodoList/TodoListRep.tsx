import { FilterValuesType } from "../../types";
import { AddItemForm } from "../../components";
import { InputAddTL } from "../InputAddTL";
import { FilterBtns } from "../FilterBtns";
import { TasksList } from "../TasksList";
import React from "react";
import { PropsTypeTodoList } from "./PropsTypeTodoList";

export const TodoListRep: React.FC<PropsTypeTodoList> = ({
  title,
  tasks,
  id,
  deleteTask,
  changeFilter,
  handleAddTask,
  changeTaskStatus,
  handleDeleteTodoList,
  changeTaskTitle,
  changeTodoListTitle,
}) => {
  const handleFilterChange = (value: FilterValuesType) => {
    switch (value) {
      case "all":
        changeFilter("all", id);
        break;
      case "inProgress":
        changeFilter("inProgress", id);
        break;
      case "completed":
        changeFilter("completed", id);
        break;
      default:
        break;
    }
  };

  const deleteTodoList = () => {
    handleDeleteTodoList(id);
  };

  const addTask = (title: string) => {
    handleAddTask(title, id);
  };

  const handleChangeTodoListTitle = (newTitle: string) => {
    changeTodoListTitle(id, newTitle);
  };

  return (
    <>
      <InputAddTL
        title={title}
        handleChangeTodoListTitle={handleChangeTodoListTitle}
        deleteTodoList={deleteTodoList}
      />
      <FilterBtns handleFilterChange={handleFilterChange} />

      <AddItemForm handleAddItem={addTask} />

      <TasksList
        tasks={tasks}
        id={id}
        deleteTask={deleteTask}
        changeTaskStatus={changeTaskStatus}
        changeTaskTitle={changeTaskTitle}
      />
    </>
  );
};
