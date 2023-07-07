import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 15px 20px 15px;
  @media (max-width: 485px) {
    flex-direction: column;
    align-items: center;
  }
`;
