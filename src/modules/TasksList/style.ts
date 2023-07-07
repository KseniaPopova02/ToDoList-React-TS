import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
  overflow-y: scroll;
  max-height: 300px;
  overflow-y: auto;
`;

export const StyledTaskWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLi = styled.li`
  & + li {
    margin-top: 10px;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
  color: #af7eeb;
`;

export const StyledStarBorderIcon = styled(StarBorderIcon)`
  color: #af7eeb;
`;
