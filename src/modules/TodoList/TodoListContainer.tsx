import { useState } from "react";
import { nanoid } from "nanoid";
import { AddItemForm } from "../../components";
import { TodoListRep } from "./TodoListRep";
import { TasksStateType, FilterValuesType, TodoListType } from "../../types";

export const TodoListContainer = () => {
  const todoListLearnId = nanoid();
  const todoListBuyId = nanoid();
  const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
    {
      id: todoListLearnId,
      title: "What to learn",
      filter: "all",
    },
    {
      id: todoListBuyId,
      title: "What to buy",
      filter: "all",
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

  const handleAddTask = (item: string, todoListId: string) => {
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

  const changeFilter = (value: FilterValuesType, todoListId: string) => {
    const updatedTodoLists = todoLists.map((todoList) => {
      if (todoList.id === todoListId) {
        return { ...todoList, filter: value };
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

  const handleDeleteTodoList = (todoListId: string) => {
    const filteredTodoLists = todoLists.filter(
      (todoList) => todoList.id !== todoListId
    );
    setTodoLists(filteredTodoLists);
    const updatedTasks = { ...tasks };
    delete updatedTasks[todoListId];
    setTasks(updatedTasks);
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
  return (
    <>
      <AddItemForm handleAddItem={addTodoList} />
      {todoLists.map((todoList) => {
        let tasksForTodoList = tasks[todoList.id];
        if (todoList.filter === "completed") {
          tasksForTodoList = tasksForTodoList.filter((task) => task.isDone);
        }
        if (todoList.filter === "inProgress") {
          tasksForTodoList = tasksForTodoList.filter((task) => !task.isDone);
        }
        return (
          <TodoListRep
            key={todoList.id}
            id={todoList.id}
            title={todoList.title}
            tasks={tasksForTodoList}
            deleteTask={deleteTask}
            changeFilter={changeFilter}
            handleAddTask={handleAddTask}
            changeTaskStatus={changeTaskStatus}
            changeTaskTitle={changeTaskTitle}
            handleDeleteTodoList={handleDeleteTodoList}
            changeTodoListTitle={changeTodoListTitle}
          />
        );
      })}
    </>
  );
};
