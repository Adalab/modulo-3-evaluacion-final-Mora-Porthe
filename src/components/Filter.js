import React from "react";

const Filter = () => {
  return (
    <>
      <label className="form__title-name" htmlFor="name">
        ¿Who are you looking for?
      </label>
      <input className="form__input-text" type="text" name="name" id="name" />
    </>
  );
};

export default Filter;
