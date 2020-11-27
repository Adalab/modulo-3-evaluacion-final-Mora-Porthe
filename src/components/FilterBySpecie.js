import React from "react";

const FilterBySpecie = (props) => {
  const handlerFilterSpecies = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "specieS",
    });
  };
  return (
    <form className="FormSpecies">
      <label className="name">Especie:</label>
      <select
        name="species"
        className="FormSpecies__input"
        /*  value={props.data.species} */
        onChange={handlerFilterSpecies}
      >
        <option
          className="species--input"
          type="text"
          value="all"
          name="species"
        >
          All
        </option>
        <option type="text" value="Alien" name="species">
          Alien
        </option>
        <option
          className="species--input"
          type="text"
          value="Human"
          name="species"
        >
          Human
        </option>
      </select>
    </form>
  );
};

export default FilterBySpecie;
