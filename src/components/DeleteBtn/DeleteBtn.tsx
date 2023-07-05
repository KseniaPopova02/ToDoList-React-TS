import React from "react";
import { PropsTypeDeleteBtn } from "./PropsTypeDeleteBtn";
import DeleteIcon from "@mui/icons-material/Delete";

export const DeleteBtn: React.FC<PropsTypeDeleteBtn> = ({ handleDelete }) => (
  <button onClick={handleDelete}>
    <DeleteIcon />
  </button>
);
