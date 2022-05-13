import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/Card-List.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => this.setState({ searchField: e.target.value });
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder={"Search Monster here..."}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
