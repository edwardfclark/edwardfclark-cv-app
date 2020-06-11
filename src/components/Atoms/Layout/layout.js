import styled, { css } from "styled-components";

const Layout = styled.div`
  position: relative;

  /* Display based on active prop, controlled by MenuLink */
  ${({ active }) => {
    if (active) {
      return css`
        border: 1px solid red;
      `;
    }
  }}
`;

export default Layout;
