import React from "react";
import "../stylesheets/layout/_filter.scss";

const Filter = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "character",
    });
  };
  return (
    <form className="form">
      <label className="form__title-name" htmlFor="name">
        ¿Who are you looking for?
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        placeholder="Search: Beth Smith"
        onChange={handleChange}
      />
    </form>
  );
};

export default Filter;
