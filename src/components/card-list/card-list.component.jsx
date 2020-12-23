import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = (props) => {
  if (props.totalCharacters === 0) {
    return <p className>Character Not found!</p>;
  }

  let rows = [];
  let limit = props.limit;
  let offset = props.offset + 1;
  let characters = props.characters;
  let until =
    limit + offset - 1 > props.totalCharacters
      ? props.totalCharacters
      : limit + offset - 1;
  for (let i = offset; i <= until; i++) {
    rows.push(
      <Card key={characters[i - 1].char_id} character={characters[i - 1]} />
    );
  }

  return <div className="card-list">{rows}</div>;
};
