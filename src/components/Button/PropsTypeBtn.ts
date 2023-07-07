import { StyledBtnType } from "../../types";

export type PropsTypeButton = {
  styleType: StyledBtnType;
  handleClick: () => void;
  children?: React.ReactNode;
  isActive: boolean;
};
