import React from "react";
import "../stylesheets/layout/_character.scss";

const Character = (props) => {
  return (
    <li className="character">
      <img
        className="character__img"
        src={props.character.image}
        alt={props.character.name}
        title={props.character.name}
      />
      <h2 className="character__name">{props.character.name}</h2>
      <p className="character__species">{props.character.species}</p>
    </li>
  );
};

export default Character;
