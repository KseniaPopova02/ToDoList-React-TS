import React from "react";
import { PropsTypeFilterBtns } from "./PropsTypeFilterBtns";
import { FilterValuesType } from "../../types";
import { StyledWrapper } from "./style";
import { Button } from "../../components";

export const FilterBtns: React.FC<PropsTypeFilterBtns> = ({
  changeFilter,
  todoListId,
}) => {
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
      <Button handleClick={() => handleFilterChange("all")} styleType="filter">
        All
      </Button>

      <Button
        handleClick={() => handleFilterChange("inProgress")}
        styleType="filter"
      >
        In progress
      </Button>

      <Button
        handleClick={() => handleFilterChange("completed")}
        styleType="filter"
      >
        Completed
      </Button>
    </StyledWrapper>
  );
};
