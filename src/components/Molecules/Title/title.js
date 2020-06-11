import React from "react";

// COMPONENTS & STYLES
import H1 from "../../Atoms/H1";
import H3 from "../../Atoms/H3";
import { Wrapper } from "./title.styles";

const Title = () => {
  return (
    <Wrapper>
      <H1>Edward Clark</H1>
      <H3>Javascript. React. GraphQL.</H3>
    </Wrapper>
  );
};

export default Title;
