import React from 'react';

class Dog extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dog: '',
      array: [],
    };
  }

  getDog() {
    this.setState({ loading: true }, async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const dogData = await response.json();

      this.setState({
        dog: dogData,
        loading: false,
        name: '',
        array: []
      });
    });
  }

  componentDidMount() {
    this.getDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should');
    if (!nextState.dog) return true;
    const hasTerrier = nextState.dog.message.includes('terrier');
    return !hasTerrier;
  }

  componentDidUpdate() {
    localStorage.setItem('dogImages', this.state.dog.message);
    if (this.state.dog.message) {
      const dogBreed = this.state.dog.message.split('/')[4];
      alert(dogBreed);
    }
  }

  changeDog = () => {
    this.getDog();
  };

  renderDogElement() {
    const {
      dog: { message },
    } = this.state;

    return (
      <div className="dog_div">
        <img className="dog" src={message} alt="Linda imagem de um cahorro aleatorio" />
        <button type="button" onClick={this.changeDog}>
          Search Dog
        </button>
        <input
          type="text"
          value={this.state.name}
          onChange={({ target }) => this.setState({ name: target.value })}
          placeholder="Digite o nome do doguinho"
        ></input>
        <button onClick={this.saveData}>Salvar Doguinho</button>
      </div>
    );
  }

  render() {
    const loadingElement = <span className="loading">Loading...</span>;
    const { loading } = this.state;
    return <div>{loading ? loadingElement : this.renderDogElement()}</div>;
  }
}

export default Dog;
