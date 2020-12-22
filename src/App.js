import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import { CardList } from "./components/card-list/card-list.component";
import { ButtonList } from "./components/button-list/button-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: "",
      totalCharacters: null,
      limit: null,
      offset: null,
    };
  }

  componentDidMount() {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((response) => response.json())
      .then((characters) =>
        this.setState({
          characters: characters,
          totalCharacters: characters.length,
          limit: 10,
          offset: 0,
        })
      );
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value, limit: 10, offset: 0 });
  };

  onButtonClick = (value) => {
    if (value === 1) this.setState({ offset: 0 });
    else this.setState({ offset: value * 10 - 10 });
  };

  render() {
    const {
      characters,
      searchField,
      totalCharacters,
      limit,
      offset,
    } = this.state;
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchField.toLowerCase())
    );

    console.log(filteredCharacters);

    return (
      <div className="App">
        <switch>
          <div>
            <h1>Breaking Bad</h1>
            <SearchBox onSearchChange={this.onSearchChange} />
            {totalCharacters ? (
              <div>
                <ButtonList
                  totalCharacters={filteredCharacters.length}
                  onButtonClick={this.onButtonClick}
                />
                <CardList
                  characters={filteredCharacters}
                  limit={limit}
                  offset={offset}
                  totalCharacters={filteredCharacters.length}
                />
              </div>
            ) : (
              "loading"
            )}
          </div>
        </switch>
      </div>
    );
  }
}

export default App;
