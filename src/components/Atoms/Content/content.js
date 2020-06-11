import styled, { css } from "styled-components";

const Content = styled.div`
  margin-left: 0;
  transition: margin-left 0.3s ease-in-out;
  padding-left: 2rem;
  max-width: 60rem;

  ${({ active }) => {
    if (active) {
      return css`
        margin-left: 15rem;
      `;
    }
  }};
`;

export default Content;
