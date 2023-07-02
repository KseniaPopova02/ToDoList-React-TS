import { useState } from "react";
import { TodoList } from "./modules";
import { nanoid } from "nanoid";
import { AddItemForm } from "./components";

export type FilterValuesType = "all" | "completed" | "inProgress";

type todoListType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};
//when refactoring it will double

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

//rename later
type TasksStateType = {
  [key: string]: Array<TaskType>;
};

function App() {
  const todoListLearnId = nanoid();
  const todoListBuyId = nanoid();
  const [todoLists, setTodoLists] = useState<Array<todoListType>>([
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
    tasks[todoListId] = newTasks;
    setTasks({ ...tasks });
  };

  const changeTaskStatus = (taskId: string, todoListId: string) => {
    const updatedTasks = { ...tasks };
    const todoListTasks = updatedTasks[todoListId];
    const updatedTodoListTasks = todoListTasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    updatedTasks[todoListId] = updatedTodoListTasks;
    setTasks(updatedTasks);
  };

  const changeTaskTitle = (
    taskId: string,
    newTitle: string,
    todoListId: string
  ) => {
    const updatedTasks = { ...tasks };
    const todoListTasks = updatedTasks[todoListId];
    const updatedTodoListTasks = todoListTasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title: newTitle };
      }
      return task;
    });
    updatedTasks[todoListId] = updatedTodoListTasks;
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

  const deleteTask = (taskId: string, todoListId: string) => {
    const todoListTasks = tasks[todoListId];
    const filteredTasks = todoListTasks.filter((task) => task.id !== taskId);
    tasks[todoListId] = filteredTasks;
    setTasks({ ...tasks });
  };

  const handleDeleteTodoList = (todoListId: string) => {
    const filteredTodoLists = todoLists.filter(
      (todoList) => todoList.id !== todoListId
    );
    setTodoLists(filteredTodoLists);
    delete tasks[todoListId];
    setTasks({ ...tasks });
  };

  const changeTodoListTitle = (
    todoListId: string,
    newTodoListTitle: string
  ) => {
    const todoList = todoLists.find((todoList) => todoList.id === todoListId);
    if (todoList) {
      todoList.title = newTodoListTitle;
      setTodoLists([...todoLists]);
    }
  };

  const addTodoList = (title: string) => {
    const todoList: todoListType = {
      id: nanoid(),
      filter: "all",
      title: title,
    };
    setTodoLists([todoList, ...todoLists]);
    setTasks({ ...tasks, [todoList.id]: [] });
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
          <TodoList
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
}

export default App;
