import React from "react";
import PropTypes from "prop-types";

// COMPONENTS & STYLES
import { MenuButton } from "./menu.styles";

const MenuLink = ({ onClick }) => {
  return <MenuButton onClick={onClick}>Yeet</MenuButton>;
};

MenuLink.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MenuLink;
