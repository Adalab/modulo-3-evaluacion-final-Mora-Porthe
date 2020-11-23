import React from "react";
import "../stylesheets/layout/_filter.scss";

const Filter = () => {
  return (
    <form className="form">
      <label className="form__title-name" htmlFor="name">
        ¿Who are you looking for?
      </label>
      <input className="form__input-text" type="text" name="name" id="name" />
    </form>
  );
};

export default Filter;
