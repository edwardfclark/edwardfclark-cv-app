import React from "react";

// COMPONENTS & STYLES
import Layout from "./components/Atoms/Layout";
import Content from "./components/Atoms/Content";
import MenuLink from "./components/Molecules/MenuLink";
import Title from "./components/Molecules/Title";
import Navigation from "./components/Organisms/Navigation";
import Page from "./components/Organisms/Page";

// HELPERS & CONSTANTS
import data from "./data/data.json";

function App() {
  // State variables
  const [active, setActive] = React.useState(false);
  const [selected, setSelected] = React.useState(data[0].id);

  return (
    <Layout>
      <MenuLink onClick={() => setActive(!active)} active={active} />
      <Navigation active={active} setSelected={setSelected} />
      <Content active={active}>
        <Title />
        <Page selected={selected} />
      </Content>
    </Layout>
  );
}

export default App;
