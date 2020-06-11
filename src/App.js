import React from "react";

// COMPONENTS & STYLES
import Layout from "./components/Atoms/Layout";
import Content from "./components/Atoms/Content";
import MenuLink from "./components/Molecules/MenuLink";
import Title from "./components/Molecules/Title";
import Navigation from "./components/Organisms/Navigation";

// HELPERS & CONSTANTS
import data from "./data/data.json";

function App() {
  const [active, setActive] = React.useState(false);
  console.log("DATA", data);
  return (
    <Layout>
      <MenuLink onClick={() => setActive(!active)} active={active} />
      <Navigation active={active} />
      <Content active={active}>
        <Title />
        <p>yeet</p>
      </Content>
    </Layout>
  );
}

export default App;
