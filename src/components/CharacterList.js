import React from "react";
import Character from "./Character";

const CharacterList = () => {
  return (
    <section>
      <ul className="Character__list">
        <Character />
      </ul>
    </section>
  );
};

export default CharacterList;
