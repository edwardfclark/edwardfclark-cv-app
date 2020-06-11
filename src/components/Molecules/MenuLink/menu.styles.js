import styled from "styled-components";

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

  :focus {
    outline: 0;
  }
`;
