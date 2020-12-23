import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import Header from "../../components/header/header.component";
import { Loader } from "../../components/loader/loader.component";

import "../character/character.styles.css";

class Character extends Component {
  constructor() {
    super();

    this.state = {
      character: [],
      quotes: [],
      error: null,
    };
  }
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    let data = null;
    fetch(`https://www.breakingbadapi.com/api/characters/${values.id}`)
      .then((response) => response.json())
      .then((character) => {
        data = character[0];
        this.setState({
          character: character,
        });
        fetch(`https://www.breakingbadapi.com/api/quote?author=${data.name}`)
          .then((response) => response.json())
          .then((quotes) => {
            this.setState({
              quotes: quotes,
            });
          });
      })
      .catch((err) => {
        this.setState({ error: "something went worng, Check your input data" });
      });
  }

  occupationList = (occupations) => {
    return occupations.map((occupation, idx) => (
      <li key={idx}>{occupation}</li>
    ));
  };

  quoteList = (quotes) => {
    if (quotes.length === 0) return <p> N/A </p>;
    return quotes.map((quote, idx) => (
      <blockquote key={idx}>{quote.quote}</blockquote>
    ));
  };

  displayCharacter(character, quotes) {
    return (
      <div className="characterContainer">
        <div className="character-left">
          <img
            className="char-img"
            src={character.img}
            alt={character.name}
            width="250px"
            height="350px"
          />
        </div>
        <div className="character-right">
          <h1>{character.name}</h1>
          <p> Born On:{character.birthday}</p>
          <p>Occupation : {this.occupationList(character.occupation)}</p>
          <p> Status: {character.status}</p>
          <p>Nickname: {character.nickname}</p>
          <p>Played by: {character.portrayed}</p>
          <p>
            Appearances :{" "}
            <span className="appearance">
              {character.appearance ? character.appearance : "N/A"}
            </span>
          </p>
          <div className="quotes">quotes : {this.quoteList(quotes)}</div>
        </div>
      </div>
    );
  }
  render() {
    const { character, quotes, error } = this.state;
    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/">GO Home!</Link>
        </div>
      );
    }
    return character.length > 0 ? (
      <div>
        <Header />
        <div className="character-wrapper">
          {this.displayCharacter(character[0], quotes)}
        </div>
      </div>
    ) : (
      <Loader />
    );
  }
}

export default Character;
