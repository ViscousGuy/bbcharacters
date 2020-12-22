import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = (props) => {
  let rows = [];
  let limit = props.limit;
  let offset = props.offset + 1;
  let characters = props.characters;
  let until =
    limit + offset - 1 > props.totalCharacters
      ? props.totalCharacters
      : limit + offset - 1;
  console.log(props.offset, props.limit, props.characters);
  for (let i = offset; i <= until; i++) {
    rows.push(
      <Card key={characters[i - 1].char_id} character={characters[i - 1]} />
    );
  }

  return <div className="card-list">{rows}</div>;
};
