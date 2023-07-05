import React from "react";
import { PropsTypeTodoList } from "./PropsTypeTodoList";
import { TodoListTitle } from "../InputAddTL";
import { FilterBtns } from "../FilterBtns";
import { AddItemForm } from "../../components";
import { TasksList } from "../TasksList";
import { StyledTodoListWrapper, StyledTitle } from "./style";

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
  <StyledTodoListWrapper>
    <StyledTitle>
      <TodoListTitle
        isTodoTitle
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
    </StyledTitle>

    <TasksList
      tasks={tasks}
      todoListId={todoListId}
      deleteTask={deleteTask}
      changeTaskStatus={changeTaskStatus}
      changeTaskTitle={changeTaskTitle}
    />
  </StyledTodoListWrapper>
);
