import React from "react";
import PropTypes from "prop-types";

// COMPONENTS & STYLES
import { Wrapper, Item, Link } from "./links.styles";

const Links = ({ blocks }) => {
  console.log("BLOCKS", blocks);
  return (
    <Wrapper>
      {blocks.map((block) => {
        return (
          <Item>
            <Link href={block.link}>{block.type}</Link>
          </Item>
        );
      })}
    </Wrapper>
  );
};

export default Links;
