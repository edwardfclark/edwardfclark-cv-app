import React from "react";
import PropTypes from "prop-types";

// COMPONENTS & STYLES
import { Wrapper, NavLink } from "./navigation.styles";

// HELPERS & CONSTANTS
import data from "../../../data/data.json";

const Navigation = ({ active }) => {
  return (
    <Wrapper active={active}>
      {data.map((page) => {
        return <NavLink key={page.id}>{page.title}</NavLink>;
      })}
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
