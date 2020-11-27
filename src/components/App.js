import React from "react";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import getDataFromApi from "../services/getDataFromApi";
import CharacterList from "./CharacterList";
import Header from "./Header";
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import CharacterDetail from "./CharacterDetail";
import "../stylesheets/App.scss";

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
      <p className="form__notFound">
        {`Upps! There are no characters with the word  ${characterFilter}. Try another!`}
      </p>
    );

  const renderCharacterDetail = (props) => {
    const characterName = props.match.params.name;
    const foundCharacter = characters.find((character) => {
      return character.name === characterName;
    });
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <p className="url_norFound">Not a valid URL</p>;
    }
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <FilterByName handleFilter={handleFilter} />
          <FilterBySpecie handleFilter={handleFilter} />
          {filterCharacters}
        </Route>
        <Route path="/character/:name" render={renderCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;
