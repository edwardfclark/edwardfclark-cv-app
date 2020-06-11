import React from "react";
import PropTypes from "prop-types";
import { get, find } from "lodash";

// COMPONENTS & STYLES
import H2 from "../../Atoms/H2";
import H3 from "../../Atoms/H3";
import P from "../../Atoms/P";
import Links from "../../Molecules/Links";

// HELPERS & CONSTANTS
import data from "../../../data/data.json";

const Page = ({ selected }) => {
  const page = find(data, { id: selected });
  const blocks = get(page, "blocks", []);

  const getContentBlock = (block) => {
    switch (block.type) {
      case "text":
        return <P key={block.id}>{block.content}</P>;
      case "heading":
        return <H3 key={block.id}>{block.content}</H3>;
      case "links":
        return <Links key={block.id} blocks={get(block, "blocks", [])} />;
      default:
        return () => null;
    }
  };

  return (
    <React.Fragment>
      <H2>{get(page, "title", "")}</H2>
      {blocks.map((block) => {
        return getContentBlock(block);
      })}
    </React.Fragment>
  );
};

Page.propTypes = {
  selected: PropTypes.string.isRequired,
};

export default Page;
