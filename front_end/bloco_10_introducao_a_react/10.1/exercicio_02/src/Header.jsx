import { Component } from "react";
import "./App.css";

class Header extends Component {
  render() {
    const tagH1 = <h1 className="title">Conteúdos de Front-End</h1>;

    return <header className="header">{tagH1}</header>;
  }
}

export default Header;
