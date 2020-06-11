import React from "react";

// COMPONENTS & STYLES
import { Line, Name, Wrapper } from "./address.styles";

const Address = ({ blocks }) => {
  // Dynamically render address lines from blocks in JSON data
  const getContentBlock = (block) => {
    switch (block.type) {
      case "name":
        return <Name key={block.id}>{block.content}</Name>;
      case "line":
        return <Line key={block.id}>{block.content}</Line>;

      default:
        return null;
    }
  };
  return (
    <Wrapper>
      {blocks.map((block) => {
        return getContentBlock(block);
      })}
    </Wrapper>
  );
};

export default Address;
