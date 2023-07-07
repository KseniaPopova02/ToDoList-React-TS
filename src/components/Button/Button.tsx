import React, { useState } from "react";
import { PropsTypeButton } from "./PropsTypeDeleteBtn";
import { StyledBtn } from "./style";
export const Button: React.FC<PropsTypeButton> = ({
  styleType,
  handleClick,
  children,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
    handleClick();
  };

  return (
    <StyledBtn
      styleType={styleType}
      isActive={isActive}
      onClick={handleButtonClick}
    >
      {children}
    </StyledBtn>
  );
};
