import React from "react";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filter from "./Filter";
import "../stylesheets/App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Filter />
      <CharacterList />
    </>
  );
};

export default App;
