import { useState } from "react";
import { TodoList } from "./modules";
import { nanoid } from "nanoid";

export type FilterValuesType = "all" | "completed" | "inProgress";

function App() {
  const [tasks, setTasks] = useState([
    { id: nanoid(), title: "JS", isDone: true },
    { id: nanoid(), title: "TS", isDone: false },
    { id: nanoid(), title: "Redux", isDone: true },
  ]);
  const [filter, setFilter] = useState<FilterValuesType>("all");

  let tasksForTodoList = tasks;
  if (filter === "completed") {
    tasksForTodoList = tasks.filter((task) => task.isDone);
  }
  if (filter === "inProgress") {
    tasksForTodoList = tasks.filter((task) => !task.isDone);
  }

  const addTask = (item: string) => {
    const newTask = {
      id: nanoid(),
      title: item,
      isDone: false,
    };
    const newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  };

  const changeTaskStatus = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const changeFilter = (value: FilterValuesType) => {
    setFilter(value);
  };

  const deleteTask = (id: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };
  return (
    <TodoList
      title={"What to learn"}
      tasks={tasksForTodoList}
      deleteTask={deleteTask}
      changeFilter={changeFilter}
      addTask={addTask}
      changeTaskStatus={changeTaskStatus}
    />
  );
}

export default App;
