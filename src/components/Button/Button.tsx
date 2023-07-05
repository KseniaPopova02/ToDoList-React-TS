import React from "react";
import { PropsTypeButton } from "./PropsTypeDeleteBtn";
import { StyledBtn } from "./style";

export const Button: React.FC<PropsTypeButton> = ({
  styleType,
  handleClick,
  children,
}) => (
  <StyledBtn styleType={styleType} onClick={handleClick}>
    {children}
  </StyledBtn>
);
