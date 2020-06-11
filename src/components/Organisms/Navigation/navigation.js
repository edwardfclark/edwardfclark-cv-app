import React from "react";
import PropTypes from "prop-types";

// COMPONENTS & STYLES
import { Wrapper } from "./navigation.styles";

const Navigation = ({ active }) => {
  return (
    <Wrapper active={active}>
      <p>Navigation</p>
    </Wrapper>
  );
};

Navigation.propTypes = {
  active: PropTypes.bool,
};

Navigation.defaultProps = {
  active: false,
};

export default Navigation;
