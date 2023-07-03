import { FilterValuesType, TaskType } from "../../types";
import { AddItemForm, EditableSpan } from "../../components";
import { InputAddTL } from "../InputAddTL";
import { FilterBtns } from "../FilterBtns";
import { TasksList } from "../TasksList";

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
      <InputAddTL
        title={props.title}
        handleChangeTodoListTitle={handleChangeTodoListTitle}
        deleteTodoList={deleteTodoList}
      />
      <FilterBtns handleFilterChange={handleFilterChange} />

      <AddItemForm handleAddItem={addTask} />

      <TasksList
        tasks={props.tasks}
        id={props.id}
        deleteTask={props.deleteTask}
        changeTaskStatus={props.changeTaskStatus}
        changeTaskTitle={props.changeTaskTitle}
      />
    </>
  );
};
