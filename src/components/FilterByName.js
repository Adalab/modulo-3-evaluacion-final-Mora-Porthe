import React from "react";
import "../stylesheets/layout/_filter.scss";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "character",
    });
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label className="form__title-name" htmlFor="name">
        ¿Who are you looking for?
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        placeholder="Search here: Beth Smith"
        onChange={handleChange}
      />
    </form>
  );
};

export default FilterByName;
