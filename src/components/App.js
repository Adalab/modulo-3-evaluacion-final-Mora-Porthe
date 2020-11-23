import React from "react";
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filter from "./Filter";
import "../stylesheets/App.scss";
import { useEffect, useState } from "react";
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  console.log(characters);
  return (
    <>
      <Header />
      <Filter />
      <CharacterList characters={characters} />
    </>
  );
};

export default App;
