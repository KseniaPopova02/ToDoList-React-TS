import styled from "styled-components";
import { Input } from "@mui/material";

type StyledSpanProps = {
  isTodoTitle: boolean;
};

export const StyledSpan = styled.span<StyledSpanProps>`
  cursor: pointer;
  font-size: ${(props) => (props.isTodoTitle ? "22px" : "16px")};
  @media (max-width: 485px) {
    font-size: ${(props) => (props.isTodoTitle ? "18px" : "14px")};
  }
`;

export const StyledInput = styled(Input)`
  && {
    &.css-q0jhri-MuiInputBase-root-MuiInput-root:after {
      border-bottom: 2px solid #af7eeb;
    }
  }
`;
