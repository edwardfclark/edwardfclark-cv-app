import React from "react";

// COMPONENTS & STYLES
import Layout from "./components/Atoms/Layout";
import MenuLink from "./components/Molecules/MenuLink";
import Title from "./components/Molecules/Title";

function App() {
  const [active, setActive] = React.useState(false);

  return (
    <Layout active={active}>
      <MenuLink onClick={() => setActive(!active)} />
      <Title />
    </Layout>
  );
}

export default App;
