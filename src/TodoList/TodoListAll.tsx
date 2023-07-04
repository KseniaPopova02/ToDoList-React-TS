import { useState } from "react";
import { nanoid } from "nanoid";
import { AddItemForm } from "../components";
import { InputAddTL, FilterBtns, TasksList } from "../modules";
import { TasksStateType, FilterValuesType, TodoListType } from "../types";

export const TodoListAll = () => {
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

  return (
    <>
      <AddItemForm handleAddItem={addTodoList} />
      {todoLists.map((todoList) => {
        let todoListTasks = tasks[todoList.id];
        if (todoList.filter === "completed") {
          todoListTasks = todoListTasks.filter((task) => task.isDone);
        }
        if (todoList.filter === "inProgress") {
          todoListTasks = todoListTasks.filter((task) => !task.isDone);
        }
        return (
          <div key={todoList.id}>
            <InputAddTL
              title={todoList.title}
              todoListId={todoList.id}
              changeTodoListTitle={changeTodoListTitle}
              deleteTodoList={deleteTodoList}
            />
            <FilterBtns changeFilter={changeFilter} todoListId={todoList.id} />

            <AddItemForm
              handleAddItem={(title: string) => {
                addTask(title, todoList.id);
              }}
            />

            <TasksList
              tasks={todoListTasks}
              todoListId={todoList.id}
              deleteTask={deleteTask}
              changeTaskStatus={changeTaskStatus}
              changeTaskTitle={changeTaskTitle}
            />
          </div>
        );
      })}
    </>
  );
};
