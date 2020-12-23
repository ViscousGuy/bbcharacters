import React, { Component } from "react";
import { CardList } from "./../card-list/card-list.component";
import { ButtonList } from "./../button-list/button-list.component";
import { SearchBox } from "./../search-box/search-box.component";
import { Loader } from "./../loader/loader.component";
import Header from "../header/header.component";
import Footer from "../../components/footer/footer.component";

class Directory extends Component {
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

    return totalCharacters ? (
      <div>
        <Header />
        <div>
          <SearchBox onSearchChange={this.onSearchChange} />
          <div>
            <CardList
              characters={filteredCharacters}
              limit={limit}
              offset={offset}
              totalCharacters={filteredCharacters.length}
            />
            <ButtonList
              totalCharacters={filteredCharacters.length}
              onButtonClick={this.onButtonClick}
            />
          </div>
        </div>
        <Footer />
      </div>
    ) : (
      <Loader />
    );
  }
}

export default Directory;
