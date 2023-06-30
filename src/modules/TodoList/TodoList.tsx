type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
};

export const TodoList = (props: PropsType) => (
  <>
    <h3>{props.title}</h3>
    <div>
      <input type="text" />
      <button>add</button>
    </div>
    <ul>
      {props.tasks.map((task) => (
        <li key={task.id}>
          <input type="checkbox" checked={task.isDone} />
          <span>{task.title}</span>
          <button>delete</button>
        </li>
      ))}
    </ul>
  </>
);
