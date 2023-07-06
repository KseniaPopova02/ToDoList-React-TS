import { useState } from "react";
import { nanoid } from "nanoid";
import { AddItemForm } from "../components";
import { TodoList } from "../modules/TodoList/TodoList";
import {
  TasksStateType,
  FilterValuesType,
  TodoListType,
  TaskType,
} from "../types";
import {
  StyledWrapper,
  StyledTodoListInputWrapper,
  StyledTodoListsWrapper,
} from "./style";
import {
  addTask,
  deleteTask,
  changeTaskStatus,
  changeTaskTitle,
  addTodoList,
  deleteTodoList,
  changeTodoListTitle,
  changeFilter,
  useAppDispatch,
  useAppSelector,
} from "../store";

export const TodoListApp = () => {
  const dispatch = useAppDispatch();
  const todoLists = useAppSelector((state) => state.todoLists.todoLists);
  const tasks = useAppSelector((state) => state.tasks.tasks);

  const addTaskHandler = (item: string, todoListId: string) => {
    const newTask: TaskType = {
      id: nanoid(),
      title: item,
      isDone: false,
    };
    dispatch(addTask({ todoListId, task: newTask }));
  };

  const addTodoListHandler = (title: string) => {
    const newTodoList: TodoListType = {
      id: nanoid(),
      filter: "all",
      title: title,
    };
    dispatch(addTodoList(newTodoList));
  };

  const changeTaskStatusHandler = (taskId: string, todoListId: string) => {
    dispatch(
      changeTaskStatus({
        todoListId,
        taskId,
        isDone: !tasks[todoListId].find((task) => task.id === taskId)?.isDone,
      })
    );
  };

  const changeTaskTitleHandler = (
    taskId: string,
    newTitle: string,
    todoListId: string
  ) => {
    dispatch(changeTaskTitle({ todoListId, taskId, newTitle }));
  };

  const changeTodoListTitleHandler = (
    todoListId: string,
    newTodoListTitle: string
  ) => {
    dispatch(changeTodoListTitle({ todoListId, newTitle: newTodoListTitle }));
  };

  const deleteTaskHandler = (taskId: string, todoListId: string) => {
    dispatch(deleteTask({ todoListId, taskId }));
  };

  const deleteTodoListHandler = (todoListId: string) => {
    dispatch(deleteTodoList(todoListId));
  };

  const changeFilterHandler = (value: FilterValuesType, todoListId: string) => {
    dispatch(changeFilter({ todoListId, filter: value }));
  };

  const getFilteredTasks = (todoList: TodoListType): TaskType[] => {
    const todoListTasks = tasks[todoList.id] || [];

    const filteredTasks =
      todoList.filter === "completed"
        ? todoListTasks.filter((task) => task.isDone)
        : todoList.filter === "inProgress"
        ? todoListTasks.filter((task) => !task.isDone)
        : todoListTasks;
    return filteredTasks;
  };
  return (
    <StyledWrapper>
      <StyledTodoListInputWrapper>
        <AddItemForm
          placeholderText="name your todo list"
          handleAddItem={addTodoListHandler}
        />
      </StyledTodoListInputWrapper>
      <StyledTodoListsWrapper>
        {todoLists.map((todoList) => {
          const filteredTasks = getFilteredTasks(todoList);
          const handleAddTask = (title: string) => {
            addTaskHandler(title, todoList.id);
          };

          return (
            <TodoList
              key={todoList.id}
              title={todoList.title}
              todoListId={todoList.id}
              changeTodoListTitle={changeTodoListTitleHandler}
              deleteTodoList={deleteTodoListHandler}
              changeFilter={changeFilterHandler}
              placeholderText={"enter your task"}
              handleAddItem={handleAddTask}
              tasks={filteredTasks}
              deleteTask={deleteTaskHandler}
              changeTaskStatus={changeTaskStatusHandler}
              changeTaskTitle={changeTaskTitleHandler}
            />
          );
        })}
      </StyledTodoListsWrapper>
    </StyledWrapper>
  );
};
