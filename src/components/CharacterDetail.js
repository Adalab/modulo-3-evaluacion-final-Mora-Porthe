import React from "react";

const CharacterDetail = (props) => {
  return (
    <div className="modal">
      <div className="modal__dialog">
        <div className="modal__content">
          <span className="modal__back icon fas fa-arrow-circle-left"></span>
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
