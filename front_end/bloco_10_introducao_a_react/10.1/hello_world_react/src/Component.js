import React, { Component } from "react";


const name = <h1>Gustavo da Silva Amaral Santos</h1>
const p = <p>Moro no Grajau e estou aprendendo React</p>
const div = <div>{name}{p}</div>

class MyName extends Component {
  render() {
    return (div);
  }
}

export default MyName
