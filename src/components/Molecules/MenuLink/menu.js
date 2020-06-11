import React from "react";
import PropTypes from "prop-types";

// COMPONENTS & STYLES
import Icon from "../../Atoms/Icon";
import { MenuButton } from "./menu.styles";

const MenuLink = ({ onClick }) => {
  return (
    <MenuButton onClick={onClick}>
      <Icon />
    </MenuButton>
  );
};

MenuLink.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MenuLink;
