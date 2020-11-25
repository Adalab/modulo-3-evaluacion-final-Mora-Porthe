import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/layout/_characterDetail.scss";
import iconBack from "../images/icon_back.png";

const CharacterDetail = (props) => {
  return (
    <>
      <article className="article">
        <img
          className="article__img"
          src={props.character.image}
          alt={props.character.name}
        />

        <div>
          <h2 className="article__name">{props.character.name}</h2>
          <p className="article__status">Status: {props.character.status}</p>
          <p className="article__species">Species: {props.character.species}</p>
          <p className="article__origin">Origin: {props.character.origin}</p>
          <p className="article__episodes">
            Episodes: {props.character.episodes}
          </p>
        </div>
        <Link to="/">
          <img
            className="article__back"
            src={iconBack}
            alt="back"
            title="Back to characters list "
          />
        </Link>
      </article>
    </>
  );
};

export default CharacterDetail;
