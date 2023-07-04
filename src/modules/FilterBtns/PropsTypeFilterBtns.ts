import { FilterValuesType } from "../../types";

export type PropsTypeFilterBtns = {
  todoListId: string;
  changeFilter: (value: FilterValuesType, todoListId: string) => void;
};
