import React from "react";
import { PropsTypeDeleteBtn } from "./PropsTypeDeleteBtn";
import { StyledBtn, StyledDeleteIcon } from "./style";

export const DeleteBtn: React.FC<PropsTypeDeleteBtn> = ({ handleDelete }) => (
  <StyledBtn onClick={handleDelete}>
    <StyledDeleteIcon />
  </StyledBtn>
);
