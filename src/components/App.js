import React from "react";
import { useEffect, useState } from "react";
import getDataFromApi from "../services/getDataFromApi";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filter from "./Filter";
import "../stylesheets/App.scss";
import Character from "./Character";

const App = () => {
  // states

  const [characters, setCharacters] = useState([]);
  const [characterFilter, setCharacterFilter] = useState("");

  // api

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  // event handlers

  const handleFilter = (data) => {
    setCharacterFilter(data.value);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(characterFilter.toUpperCase());
  });

  const filterCharacters =
    filteredCharacters.length > 0 ? (
      <CharacterList characters={filteredCharacters} />
    ) : (
      <p className="form__notFound"> ¡Sorry! There is no matching character</p>
    );

  return (
    <>
      <Header />
      <Filter handleFilter={handleFilter} />
      {filterCharacters}
    </>
  );
};

export default App;
