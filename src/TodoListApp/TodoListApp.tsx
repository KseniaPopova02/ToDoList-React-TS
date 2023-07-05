import { useState } from "react";
import { nanoid } from "nanoid";
import { AddItemForm } from "../components";
import { TodoList } from "../modules";
import {
  TasksStateType,
  FilterValuesType,
  TodoListType,
  TaskType,
} from "../types";
import { TodoListInputWrapper, TodoListsWrapper, Wrapper } from "./style";

export const TodoListApp = () => {
  const todoListLearnId = nanoid();
  const todoListBuyId = nanoid();
  const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
    {
      id: todoListLearnId,
      filter: "all",
      title: "What to learn",
    },
    {
      id: todoListBuyId,
      filter: "all",
      title: "What to buy",
    },
  ]);

  const [tasks, setTasks] = useState<TasksStateType>({
    [todoListLearnId]: [
      { id: nanoid(), title: "JS", isDone: true },
      { id: nanoid(), title: "TS", isDone: false },
      { id: nanoid(), title: "Redux", isDone: true },
    ],
    [todoListBuyId]: [
      { id: nanoid(), title: "car", isDone: true },
      { id: nanoid(), title: "bread", isDone: false },
      { id: nanoid(), title: "cat", isDone: true },
    ],
  });

  const addTask = (item: string, todoListId: string) => {
    const newTask = {
      id: nanoid(),
      title: item,
      isDone: false,
    };
    const todoListTasks = tasks[todoListId];
    const newTasks = [newTask, ...todoListTasks];
    const updatedTasks = {
      ...tasks,
      [todoListId]: newTasks,
    };
    setTasks(updatedTasks);
  };

  const addTodoList = (title: string) => {
    const todoList: TodoListType = {
      id: nanoid(),
      filter: "all",
      title: title,
    };
    const updatedTodoLists = [todoList, ...todoLists];
    setTodoLists(updatedTodoLists);

    const updatedTasks = {
      ...tasks,
      [todoList.id]: [],
    };
    setTasks(updatedTasks);
  };

  const changeTaskStatus = (taskId: string, todoListId: string) => {
    const todoListTasks = tasks[todoListId];
    const updatedTasks = todoListTasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    const updatedTodoListTasks = {
      ...tasks,
      [todoListId]: updatedTasks,
    };
    setTasks(updatedTodoListTasks);
  };

  const changeTaskTitle = (
    taskId: string,
    newTitle: string,
    todoListId: string
  ) => {
    const todoListTasks = tasks[todoListId];
    const updatedTasks = todoListTasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title: newTitle };
      }
      return task;
    });
    const updatedTodoListTasks = {
      ...tasks,
      [todoListId]: updatedTasks,
    };
    setTasks(updatedTodoListTasks);
  };

  const changeTodoListTitle = (
    todoListId: string,
    newTodoListTitle: string
  ) => {
    const updatedTodoLists = todoLists.map((todoList) => {
      if (todoList.id === todoListId) {
        return { ...todoList, title: newTodoListTitle };
      }
      return todoList;
    });
    setTodoLists(updatedTodoLists);
  };

  const deleteTask = (taskId: string, todoListId: string) => {
    const todoListTasks = tasks[todoListId];
    const filteredTasks = todoListTasks.filter((task) => task.id !== taskId);
    const updatedTasks = {
      ...tasks,
      [todoListId]: filteredTasks,
    };
    setTasks(updatedTasks);
  };

  const deleteTodoList = (todoListId: string) => {
    const filteredTodoLists = todoLists.filter(
      (todoList) => todoList.id !== todoListId
    );
    setTodoLists(filteredTodoLists);
    const updatedTasks = { ...tasks };
    delete updatedTasks[todoListId];
    setTasks(updatedTasks);
  };

  const changeFilter = (value: FilterValuesType, todoListId: string) => {
    const updatedTodoLists = todoLists.map((todoList) => {
      if (todoList.id === todoListId) {
        return { ...todoList, filter: value };
      }
      return todoList;
    });
    setTodoLists(updatedTodoLists);
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
    <Wrapper>
      <TodoListInputWrapper>
        <AddItemForm
          placeholderText="name your todo list"
          handleAddItem={addTodoList}
        />
      </TodoListInputWrapper>
      <TodoListsWrapper>
        {todoLists.map((todoList) => {
          const filteredTasks = getFilteredTasks(todoList);
          const handleAddTask = (title: string) => {
            addTask(title, todoList.id);
          };

          return (
            <TodoList
              title={todoList.title}
              todoListId={todoList.id}
              changeTodoListTitle={changeTodoListTitle}
              deleteTodoList={deleteTodoList}
              changeFilter={changeFilter}
              placeholderText={"enter your task"}
              handleAddItem={handleAddTask}
              tasks={filteredTasks}
              deleteTask={deleteTask}
              changeTaskStatus={changeTaskStatus}
              changeTaskTitle={changeTaskTitle}
            />
          );
        })}
      </TodoListsWrapper>
    </Wrapper>
  );
};
