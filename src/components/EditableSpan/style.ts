import styled from "styled-components";

type StyledSpanProps = {
  isTodoTitle: boolean;
};

export const StyledSpan = styled.span<StyledSpanProps>`
  font-size: ${(props) => (props.isTodoTitle ? "22px" : "16px")};
  @media (max-width: 485px) {
    font-size: ${(props) => (props.isTodoTitle ? "18px" : "14px")};
  }
`;
