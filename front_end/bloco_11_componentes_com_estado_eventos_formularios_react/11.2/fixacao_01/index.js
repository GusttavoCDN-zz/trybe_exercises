class Select extends React.Component {
  render() {
    const { age, handleChange } = this.props;

    return (
      <label htmlFor="age">
        Idade:
        <select
          id="age"
          name="age"
          onChange={handleChange}
          value={age}
        >
          <option value="">Selecione</option>
          <option value="adult">Maior que 18</option>
          <option value="underage">Menor que 18</option>
        </select>
      </label>
    );
  }
}

class Email extends React.Component {
  render() {

    const { email, handleChange, handleError } = this.props;

    return (
      <label htmlFor="email">
        Email:
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
        />
      </label>
    );
  }
}

class Name extends React.Component {
  render() {
    const { name, handleChange } = this.props;


    return (

      <label htmlFor="name">
        Nome:
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={name}
        />
      </label>
    );
  }
}

class Terms extends React.Component {
  render() {

    const { handleChange, terms } = this.props;

    return (
      <label htmlFor="terms">
        <input
          id="terms"
          type="checkbox"
          name="terms"
          onChange={handleChange}
          value={terms}
        />
        Concordo com termos e acordos
      </label>
    );
  }
}

class Anecdote extends React.Component {
  render() {

    const { handleChange, anecdote } = this.props;

    return (
      <label htmlFor="anecdote">
        Anedota:
        <textarea
          id="anecdote"
          name="anecdote"
          onChange={handleChange}
          value={anecdote}
        />
      </label>
    );
  }
}


class Form extends React.Component {
  constructor() {
    super();
    this.fileInput = React.createRef();

    // Ao lidar com formularios podemos concetrar todas as informações princiapais no principal compoenetne. O componente filho deve receber essas informações como props.
    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
      formErros: false,
    };
    this.handleErrors = this.handleErrors.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Exemplo de função generica para lidar com qualquer evento de formulario e atualizar seu estado
  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.handleErrors(); });
  }

  handleErrors() {
    const { name, email, age, anecdote, terms } = this.state;

    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !age.length,
      !anecdote.length,
      !terms,
    ];

    console.log(errorCases)
    const filledForm = errorCases.every((error) => error !== true);

    this.setState({
      formErros: !filledForm,
    })
  }


  render() {
    const { name, email, anecdote, terms, age } = this.state;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <legend>Informações pessoais</legend>
            {/* Passagem de estado de um componetne pai como props para os filhos */}
            <Name name={name} handleChange={this.handleChange} />
            <Email email={email} handleChange={this.handleChange} />
            <Select age={age} handleChange={this.handleChange} />
          </fieldset>

          <fieldset>
            <legend>Texto e arquivos</legend>
            <Anecdote anecdote={anecdote} handleChange={this.handleChange} />
            <input type="file" ref={this.fileInput} />
          </fieldset>

          <Terms terms={terms} handleChange={this.handleChange} />
        </form>
        {this.state.formErros
          ? <span style={{ color: 'red' }}>Preencha todos os campos</span>
          : <span style={{ color: 'green' }}>Todos campos foram preenchidos</span>}
      </div>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
  document.getElementById('root'));