import React, { useState } from "react";
import { PropsTypeFilterBtns } from "./PropsTypeFilterBtns";
import { FilterValuesType } from "../../types";
import { StyledWrapper } from "./style";
import { Button } from "../../components";

export const FilterBtns: React.FC<PropsTypeFilterBtns> = ({
  changeFilter,
  todoListId,
}) => {
  const [activeButton, setActiveButton] = useState<string>("all");

  const handleFilterChange = (value: FilterValuesType) => {
    setActiveButton(value);

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
        isActive={activeButton === "all"}
        handleClick={() => handleFilterChange("all")}
        styleType="filter"
      >
        All
      </Button>

      <Button
        isActive={activeButton === "inProgress"}
        handleClick={() => handleFilterChange("inProgress")}
        styleType="filter"
      >
        In progress
      </Button>

      <Button
        isActive={activeButton === "completed"}
        handleClick={() => handleFilterChange("completed")}
        styleType="filter"
      >
        Completed
      </Button>
    </StyledWrapper>
  );
};
