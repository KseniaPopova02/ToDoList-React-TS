import React from "react";
import { PropsTypeButton } from "./PropsTypeBtn";
import { StyledBtn } from "./style";

export const Button: React.FC<PropsTypeButton> = ({
  styleType,
  handleClick,
  children,
  isActive,
}) => {
  return (
    <StyledBtn styleType={styleType} isActive={isActive} onClick={handleClick}>
      {children}
    </StyledBtn>
  );
};
