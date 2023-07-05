import { OutlinedInput } from "@mui/material";

import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledOutlinedInput = styled(OutlinedInput)`
  &.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 10px 0 0 10px;
    border-color: #af7eeb;
  }
  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid #af7eeb !important;
    box-shadow: 0 0 5px 2px #af7eeb inset;
  }
`;
