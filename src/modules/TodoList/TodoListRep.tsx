import { FilterValuesType } from "./types";
import { AddItemForm, EditableSpan } from "../../components";

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
  changeTaskTitle: (
    taskId: string,
    newTitle: string,
    todoListId: string
  ) => void;
  changeTodoListTitle: (todoListId: string, newTodoListTitle: string) => void;
};

export const TodoListRep = (props: PropsType) => {
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

  const handleChangeTodoListTitle = (newTitle: string) => {
    props.changeTodoListTitle(props.id, newTitle);
  };

  return (
    <>
      <h3>
        <EditableSpan
          title={props.title}
          handleTitleChange={handleChangeTodoListTitle}
        />
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

          const handleTitleChange = (newValue: string) => {
            props.changeTaskTitle(task.id, newValue, props.id);
          };

          return (
            <li key={task.id}>
              <input
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={task.isDone}
              />
              <EditableSpan
                title={task.title}
                handleTitleChange={handleTitleChange}
              />
              <button onClick={handleDeleteTask}>delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
