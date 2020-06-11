import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 15rem;
  margin-left: -15rem;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 99; /* Put menu on top of other content. */
  overflow-y: auto;
  transition: margin-left 0.3s ease-in-out;

  ${({ active }) => {
    if (active) {
      return css`
        margin-left: 0;
      `;
    }
  }}
`;
