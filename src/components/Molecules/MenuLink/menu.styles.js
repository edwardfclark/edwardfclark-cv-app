import styled, { css } from "styled-components";

export const MenuButton = styled.button`
  border-radius: 0;
  background: lightgray;
  box-shadow: 0px 0px 0px transparent;
  border: none;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 0;
  transition: margin-left 0.3s ease-in-out;

  :focus {
    outline: 0;
  }

  ${({ active }) => {
    if (active) {
      return css`
        margin-left: 15rem;
      `;
    }
  }}
`;
