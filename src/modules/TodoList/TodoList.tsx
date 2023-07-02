import { FilterValuesType } from "../../App";
import { AddItemForm } from "../../components";

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  id: string;
  deleteTask: (taskId: string, todoListId: string) => void;
  changeFilter: (value: FilterValuesType, todoListId: string) => void;
  handleAddTask: (item: string, todoListId: string) => void;
  changeTaskStatus: (taskId: string, todoListId: string) => void;
  handleDeleteTodoList: (todoListId: string) => void;
};

export const TodoList = (props: PropsType) => {
  const handleFilterChange = (value: FilterValuesType) => {
    switch (value) {
      case "all":
        props.changeFilter("all", props.id);
        break;
      case "inProgress":
        props.changeFilter("inProgress", props.id);
        break;
      case "completed":
        props.changeFilter("completed", props.id);
        break;
      default:
        break;
    }
  };

  const deleteTodoList = () => {
    props.handleDeleteTodoList(props.id);
  };

  const addTask = (title: string) => {
    props.handleAddTask(title, props.id);
  };

  return (
    <>
      <h3>
        {props.title}
        <button onClick={deleteTodoList}>x</button>
      </h3>
      <div>
        <button
          onClick={() => {
            handleFilterChange("all");
          }}
        >
          All
        </button>

        <button
          onClick={() => {
            handleFilterChange("inProgress");
          }}
        >
          In progress
        </button>

        <button
          onClick={() => {
            handleFilterChange("completed");
          }}
        >
          Completed
        </button>
      </div>

      <AddItemForm handleAddItem={addTask} />

      <ul>
        {props.tasks.map((task) => {
          const handleDeleteTask = () => {
            props.deleteTask(task.id, props.id);
          };

          const handleCheckboxChange = () => {
            props.changeTaskStatus(task.id, props.id);
          };

          return (
            <li key={task.id}>
              <input
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={task.isDone}
              />
              <span>{task.title}</span>
              <button onClick={handleDeleteTask}>delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
