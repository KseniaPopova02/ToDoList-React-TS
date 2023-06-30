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

  const changeFilter = (value: FilterValuesType) => {
    setFilter(value);
  };

  const handleDeleteTask = (id: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };
  return (
    <TodoList
      title={"What to learn"}
      tasks={tasksForTodoList}
      handleDeleteTask={handleDeleteTask}
      changeFilter={changeFilter}
    />
  );
}

export default App;
