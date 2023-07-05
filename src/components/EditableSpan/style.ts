import styled from "styled-components";

type StyledSpanProps = {
  isTodoTitle: boolean;
};

export const StyledSpan = styled.span<StyledSpanProps>`
  font-size: ${(props) => (props.isTodoTitle ? "20px" : "14px")};
`;
