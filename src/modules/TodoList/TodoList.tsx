import React from "react";
import { PropsTypeTodoList } from "./PropsTypeTodoList";
import { InputAddTL } from "../InputAddTL";
import { FilterBtns } from "../FilterBtns";
import { AddItemForm } from "../../components";
import { TasksList } from "../TasksList";
import { TodoListWrapper } from "./style";

export const TodoList: React.FC<PropsTypeTodoList> = ({
  title,
  todoListId,
  changeTodoListTitle,
  deleteTodoList,
  changeFilter,
  placeholderText,
  handleAddItem,
  tasks,
  deleteTask,
  changeTaskStatus,
  changeTaskTitle,
}) => (
  <TodoListWrapper key={todoListId}>
    <InputAddTL
      title={title}
      todoListId={todoListId}
      changeTodoListTitle={changeTodoListTitle}
      deleteTodoList={deleteTodoList}
    />
    <FilterBtns changeFilter={changeFilter} todoListId={todoListId} />

    <AddItemForm
      placeholderText={placeholderText}
      handleAddItem={handleAddItem}
    />

    <TasksList
      tasks={tasks}
      todoListId={todoListId}
      deleteTask={deleteTask}
      changeTaskStatus={changeTaskStatus}
      changeTaskTitle={changeTaskTitle}
    />
  </TodoListWrapper>
);
