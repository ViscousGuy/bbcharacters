import React from "react";
import { Link } from "react-router-dom";

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
      className="center"
    />
    <section>
      <h2 className="char-name"> {props.character.name} </h2>
      <table>
        <tbody>
          <tr>
            <th scope="row">Born on</th>
            <td>{props.character.birthday}</td>
          </tr>
          <tr>
            <th scope="row">Occupation</th>
            <td>
              <ul> {occupationList(props.character.occupation)} </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Status</th>
            <td>{props.character.status}</td>
          </tr>
        </tbody>
      </table>
      <Link className="link-to" to={`/character?id=${props.character.char_id}`}>
        Read More...
      </Link>
    </section>
  </div>
);
