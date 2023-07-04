import React from "react";
import { PropsTypeFilterBtns } from "./PropsTypeFilterBtns";
import { FilterValuesType } from "../../types";

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
  );
};
