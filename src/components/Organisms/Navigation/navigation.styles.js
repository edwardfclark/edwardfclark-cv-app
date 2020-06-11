import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 15rem;
  margin-left: -15rem;
  background: #b1b1b1;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 99; /* Put menu on top of other content. */
  overflow-y: auto;
  transition: margin-left 0.3s ease-in-out;
  padding-top: 15rem;

  ${({ active }) => {
    if (active) {
      return css`
        margin-left: 0;
      `;
    }
  }}
`;

export const NavLink = styled.a`
  margin-left: 1rem;
  display: block;
  margin-bottom: 1rem;
  font-style: italic;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s linear;

  &:hover {
    color: cyan;
  }
`;
