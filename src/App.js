import React from "react";

// COMPONENTS & STYLES
import Layout from "./components/Atoms/Layout";
import Content from "./components/Atoms/Content";
import MenuLink from "./components/Molecules/MenuLink";
import Title from "./components/Molecules/Title";
import Navigation from "./components/Organisms/Navigation";

function App() {
  const [active, setActive] = React.useState(false);

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
