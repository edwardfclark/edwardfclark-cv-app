import React from "react";
import PropTypes from "prop-types";

// ICON IMPORTS
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Allow imports of multiple icons, to make component reuseable.
const icons = {
  menu: faBars,
};

const Icon = ({ type }) => {
  return <FontAwesomeIcon icon={icons[type]} />;
};

Icon.propTypes = {
  type: PropTypes.string,
};

Icon.defaultProps = {
  type: "menu",
};

export default Icon;
