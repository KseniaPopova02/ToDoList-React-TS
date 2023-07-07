import React from "react";
import { PropsTypeFilterBtns } from "./PropsTypeFilterBtns";
import { FilterValuesType } from "../../types";
import { StyledWrapper } from "./style";
import { Button } from "../../components";
import { useAppSelector } from "../../store";

export const FilterBtns: React.FC<PropsTypeFilterBtns> = ({
  changeFilter,
  todoListId,
}) => {
  const filter = useAppSelector((state) => {
    const todoList = state.todoLists.todoLists.find(
      (list) => list.id === todoListId
    );
    return todoList ? todoList.filter : "";
  });

  const handleFilterChange = (value: FilterValuesType) => {
    switch (value) {
      case "all":
        changeFilter("all", todoListId);
        break;
      case "inProgress":
        changeFilter("inProgress", todoListId);
        break;
      case "completed":
        changeFilter("completed", todoListId);
        break;
      default:
        break;
    }
  };
  return (
    <StyledWrapper>
      <Button
        isActive={filter === "all"}
        handleClick={() => handleFilterChange("all")}
        styleType="filter"
      >
        All
      </Button>

      <Button
        isActive={filter === "inProgress"}
        handleClick={() => handleFilterChange("inProgress")}
        styleType="filter"
      >
        In progress
      </Button>

      <Button
        isActive={filter === "completed"}
        handleClick={() => handleFilterChange("completed")}
        styleType="filter"
      >
        Completed
      </Button>
    </StyledWrapper>
  );
};
