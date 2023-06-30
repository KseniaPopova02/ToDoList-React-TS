import { FilterValuesType } from "../../App";

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  handleDeleteTask: (id: string) => void;
  changeFilter: (value: FilterValuesType) => void;
};

export const TodoList = (props: PropsType) => (
  <>
    <h3>{props.title}</h3>
    <div>
      <button
        onClick={() => {
          props.changeFilter("all");
        }}
      >
        All
      </button>

      <button
        onClick={() => {
          props.changeFilter("inProgress");
        }}
      >
        In progress
      </button>

      <button
        onClick={() => {
          props.changeFilter("completed");
        }}
      >
        Completed
      </button>
    </div>
    <div>
      <input type="text" />
      <button>add</button>
    </div>
    <ul>
      {props.tasks.map((task) => (
        <li key={task.id}>
          <input type="checkbox" checked={task.isDone} />
          <span>{task.title}</span>
          <button
            onClick={() => {
              props.handleDeleteTask(task.id);
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  </>
);
