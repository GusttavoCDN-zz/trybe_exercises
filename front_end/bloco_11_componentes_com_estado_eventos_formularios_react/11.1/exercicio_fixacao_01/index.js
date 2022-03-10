class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this); // o metódo bind associa o this da classe a função utilizada; Ele pode ser especificado no construtor ou ná chamada da função direto no elemento.
    this.clickButtonOne = this.clickButtonOne.bind(this);
    this.clickButtonTwo = this.clickButtonTwo.bind(this);
    this.clickButtonThree = this.clickButtonThree.bind(this);

    this.state = {
      buttonOneClicks: 0,
      buttonTwoClicks: 0,
      buttonThreeClicks: 0,
    }
  }

  handleClick(callback) {
    // Jeito Mostrado pela alura para atualizar o estado de componentes
    // const previousCliquesNumber = this.state.numeroDeCliques;
    // const currentCliquesNumber = previousCliquesNumber + 1;
    // const newNumeroDeCliques = {
    //   numeroDeCliques: currentCliquesNumber,
    // }
    // this.setState(newNumeroDeCliques);

    // Jeito mostrado no course para atualizar o estado de componentes
    // A sintaxe aqui deve ser seguida a risca para que funcione da maneira correta.
    // this.setState((previousStates, _props /* the props params são obrigatorios */) => ({
    //   buttonOneClicks: previousStates.buttonOneClicks + 1,
    // }));
    callback();
  }

  clickButtonOne() {
    this.setState(({ buttonOneClicks }) => ({
      buttonOneClicks: buttonOneClicks + 1,
    }));

  }

  clickButtonTwo() {
    this.setState(({ buttonTwoClicks }) => ({
      buttonTwoClicks: buttonTwoClicks + 1,
    }));
  }

  clickButtonThree() {
    this.setState(({ buttonThreeClicks }) => ({
      buttonThreeClicks: buttonThreeClicks + 1,
    }));
  }

  changeColor(clicksNum) {
    if (clicksNum === 0) return 'white';
    return clicksNum % 2 === 0 ? 'green' : 'white';
  }

  render() {
    return (
      <div>
        <button style={{ backgroundColor: this.changeColor(this.state.buttonOneClicks) }}
          type="button"
          onClick={() => this.handleClick(this.clickButtonOne)}>{this.state.buttonOneClicks}
        </button>
        <button style={{ backgroundColor: this.changeColor(this.state.buttonTwoClicks) }} type="button" onClick={() => this.handleClick(this.clickButtonTwo)}>{this.state.buttonTwoClicks}</button>

        <button style={{ backgroundColor: this.changeColor(this.state.buttonThreeClicks) }} type="button" onClick={() => this.handleClick(this.clickButtonThree)}>{this.state.buttonThreeClicks}</button>
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById("root"))