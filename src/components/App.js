import React from "react";
import { useEffect, useState } from "react";
import getDataFromApi from "../services/getDataFromApi";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filter from "./Filter";
import "../stylesheets/App.scss";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [characterFilter, setCharacterFilter] = useState("");
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  // event handlers

  const handleFilter = (data) => {
    setCharacterFilter(data.value);
  };

  /* const filteredCharacters; */

  return (
    <>
      <Header />
      <Filter handleFilter={handleFilter} />
      <CharacterList characters={characters} />
    </>
  );
};

export default App;
