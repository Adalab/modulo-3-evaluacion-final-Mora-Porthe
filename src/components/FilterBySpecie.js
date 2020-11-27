import React from "react";

const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "specie",
    });
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="form_specie" onSubmit={handleFormSubmit}>
      <input
        className="form__input-specie"
        type="text"
        name="specie"
        id="specie"
        placeholder="Human with ants"
        onChange={handleChange}
      />
    </form>
  );
};

export default FilterBySpecie;
