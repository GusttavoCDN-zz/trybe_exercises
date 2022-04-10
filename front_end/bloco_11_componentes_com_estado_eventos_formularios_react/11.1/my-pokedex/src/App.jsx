import React from "react";
import "./App.css";
import Pokedex from "./Pokedex";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Pokedex />
      </>
    );
  }
}

export default App;
