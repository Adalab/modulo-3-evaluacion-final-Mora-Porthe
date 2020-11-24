import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/layout/_characterDetail.scss";

const CharacterDetail = (props) => {
  return (
    <div className="modal">
      <div className="modal__dialog">
        <div className="modal__content">
          <Link to="/">
            <span className="modal__back icon fas fa-arrow-circle-left"></span>
          </Link>
          <img
            className="modal__img"
            src={props.character.image}
            alt={props.character.name}
          />
          <h2 className="modal__name">{props.character.name}</h2>
          <p className="modal__status">Status: {props.character.status}</p>
          <p className="modal__species">Species: {props.character.species}</p>
          <p className="modal__origin">Origin: {props.character.origin}</p>
          <p className="modal__episodes">
            Episodes: {props.character.episodes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
