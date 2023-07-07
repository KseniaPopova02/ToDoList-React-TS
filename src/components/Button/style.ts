import styled, { css } from "styled-components";
import { StyledBtnType } from "../../types";

type StyledBtnProps = {
  styleType: StyledBtnType;
  isActive: boolean;
};

const deleteBtnMixin = css`
  background-color: transparent;
  border: none;
`;

const addBtnMixin = css`
  border: none;
  padding: 10px 15px;
  border-radius: 0 10px 10px 0;
  background-color: #af7eeb;
  color: #fff;
`;

const filterBtnMixin = css`
  border: none;
  padding: 10px 8px;
  border-radius: 10px;
  background-color: #af7eeb;
  color: #fff;
  width: 100%;
`;

export const StyledBtn = styled.button<StyledBtnProps>`
  cursor: pointer;

  & + button {
    margin-left: 10px;
    @media (max-width: 485px) {
      margin-left: 0;
      margin-top: 10px;
    }
  }

  ${({ styleType, isActive }) => {
    if (styleType === "delete") {
      return deleteBtnMixin;
    } else if (styleType === "add") {
      return addBtnMixin;
    } else if (styleType === "filter") {
      return css`
        ${filterBtnMixin};
        background-color: ${isActive ? "#9549f2" : "#af7eeb"};
      `;
    }
  }}
`;
