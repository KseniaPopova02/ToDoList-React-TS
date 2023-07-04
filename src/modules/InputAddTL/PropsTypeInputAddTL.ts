export type PropsTypeInputAddTL = {
  title: string;
  todoListId: string;
  changeTodoListTitle: (todoListId: string, newTodoListTitle: string) => void;
  deleteTodoList: (todoListId: string) => void;
};
