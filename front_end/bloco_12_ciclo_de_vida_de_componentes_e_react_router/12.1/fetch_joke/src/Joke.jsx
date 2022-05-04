import React from 'react';

class Joke extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };
  }

  fetchJoke() {
    this.setState(
      { loading: true }, // Primeiro parametro do state
      async () => {
        const requestHeaders = { headers: { Accept: 'application/json' } };
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders);
        const requestObject = await requestReturn.json();
        this.setState({
          jokeObj: requestObject,
          loading: false,
        });
      }
    );
  }

  componentDidMount() {
    console.log('Did MOunnt');
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ jokeObj, storedJokes }) => ({
      storedJokes: [...storedJokes, jokeObj],
    }));

    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar Piada!
        </button>
      </div>
    );
  }

  render() {
    console.log('render');
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (
            <p key={id}>{joke}</p>
          ))}
        </span>

        {/* Aqui vamos construir nossa lógica com uma renderização condicional
			do nosso componente Joke, a ideia é renderizar um loading enquanto
			esperamos a nossa requisição de piadas finalizar. */}

        <div>{loading ? loadingElement : this.renderJokeElement()}</div>
      </div>
    );
  }
}

export default Joke;
