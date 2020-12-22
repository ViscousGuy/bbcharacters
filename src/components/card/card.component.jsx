import React from "react";

import "./card.styles.css";

const occupationList = (occupations) => {
  return occupations.map((occupation, idx) => <li key={idx}>{occupation}</li>);
};

export const Card = (props) => (
  <div className="card-container">
    <img
      alt={props.character.name}
      src={props.character.img}
      width="180"
      height="180"
    />
    <h2> {props.character.name} </h2>
    <p> {props.character.birthday} </p>
    <p> {occupationList(props.character.occupation)} </p>
    <p> {props.character.status} </p>
  </div>
);
