import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/layout/_character.scss";

const Character = (props) => {
  return (
    <li className="character">
      <Link to={`/character/${props.character.name}`}>
        <img
          className="character__img"
          src={props.character.image}
          alt={props.character.name}
          title={props.character.name}
        />
        <h2 className="character__name">{props.character.name}</h2>
        <p className="character__species">{props.character.species}</p>
      </Link>
    </li>
  );
};

export default Character;
