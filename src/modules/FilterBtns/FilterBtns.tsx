import React from "react";
import { FilterValuesType } from "../../types";

type PropsType = {
  handleFilterChange: (value: FilterValuesType) => void;
};

export const FilterBtns: React.FC<PropsType> = ({ handleFilterChange }) => {
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
