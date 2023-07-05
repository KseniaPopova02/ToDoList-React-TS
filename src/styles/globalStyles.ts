import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
}

body {
  background-color: #e3e9ff;
  color: #9298a4;
    margin: 0;
    padding: 0;
    font-family: "Mulish", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    min-height: 100vh;
   
  }
`;

export const StyledDeleteIcon = styled(DeleteOutlineOutlinedIcon)`
  color: #767676;
`;
