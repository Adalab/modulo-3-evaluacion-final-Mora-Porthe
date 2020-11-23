import React from "react";
import Character from "./Character";
import "../stylesheets/layout/_characterList.scss";

const CharacterList = (props) => {
  const characterItems = props.characters.map((character) => {
    return <Character key={character.id} character={character} />;
  });

  return (
    <section className="character__container">
      <ul className="character__list">{characterItems}</ul>
    </section>
  );
};

export default CharacterList;
