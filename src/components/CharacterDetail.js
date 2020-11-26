import React from "react";
/* import PropTypes from "prop-types"; */
import { Link } from "react-router-dom";
import "../stylesheets/layout/_characterDetail.scss";
import iconBack from "../images/icon_back.png";

const CharacterDetail = (props) => {
  const status =
    props.character.status === "Dead" ? (
      <img src="https://img.icons8.com/cotton/25/000000/headstone--v1.png" />
    ) : props.character.status === "unknown" ? (
      <img src="https://img.icons8.com/dotty/25/000000/question-mark.png" />
    ) : (
      <img src="https://img.icons8.com/android/24/000000/like.png" />
    );

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
          <p className="article__status">Status: {status}</p>
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

/* CharacterDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  episodes: PropTypes.number.isRequired,
}; */

export default CharacterDetail;
