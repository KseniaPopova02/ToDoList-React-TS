import React from "react";
import { PropsTypeFilterBtns } from "./PropsTypeFilterBtns";

export const FilterBtns: React.FC<PropsTypeFilterBtns> = ({
  handleFilterChange,
}) => {
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
