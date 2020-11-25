import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/layout/_characterDetail.scss";

const CharacterDetail = (props) => {
  return (
    <>
      <article className="article">
        <Link to="/">
          <span className="article__back icon fas fa-arrow-circle-left"></span>
        </Link>
        <img
          className="article__img"
          src={props.character.image}
          alt={props.character.name}
        />
        <li>
          <h2 className="article__name">{props.character.name}</h2>
          <p className="article__status">Status: {props.character.status}</p>
          <p className="article__species">Species: {props.character.species}</p>
          <p className="article__origin">Origin: {props.character.origin}</p>
          <p className="article__episodes">
            Episodes: {props.character.episodes}
          </p>
        </li>
      </article>
    </>
  );
};

export default CharacterDetail;
