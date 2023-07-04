import { FilterValuesType } from "../types";
import { AddItemForm } from "../components";
import { InputAddTL, FilterBtns, TasksList } from "../modules";
import React from "react";
import { PropsTypeTodoList } from "./PropsTypeTodoList";

export const TodoListRep: React.FC<PropsTypeTodoList> = ({
  title,
  tasks,
  todoListId,
  deleteTask,
  changeFilter,
  addTask,
  changeTaskStatus,
  deleteTodoList,
  changeTaskTitle,
  changeTodoListTitle,
}) => {
  const handleFilterChange = (value: FilterValuesType) => {
    switch (value) {
      case "all":
        changeFilter("all", todoListId);
        break;
      case "inProgress":
        changeFilter("inProgress", todoListId);
        break;
      case "completed":
        changeFilter("completed", todoListId);
        break;
      default:
        break;
    }
  };

  const handleDeleteTodoList = () => {
    deleteTodoList(todoListId);
  };

  const handleAddTask = (title: string) => {
    addTask(title, todoListId);
  };

  const handleChangeTodoListTitle = (newTitle: string) => {
    changeTodoListTitle(todoListId, newTitle);
  };

  return (
    <>
      <InputAddTL
        title={title}
        handleChangeTodoListTitle={handleChangeTodoListTitle}
        handleDeleteTodoList={handleDeleteTodoList}
      />
      <FilterBtns handleFilterChange={handleFilterChange} />

      <AddItemForm handleAddItem={handleAddTask} />

      <TasksList
        tasks={tasks}
        id={todoListId}
        deleteTask={deleteTask}
        changeTaskStatus={changeTaskStatus}
        changeTaskTitle={changeTaskTitle}
      />
    </>
  );
};
