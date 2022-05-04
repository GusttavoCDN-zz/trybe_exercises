class PersonalInfo extends React.Component {
  render() {
    const { name, email, cpf, city, state, handleChange } = this.props;
    return (
      <fieldset>
        <legend>Personal Info</legend>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name.toUpperCase()}
            onChange={handleChange}
            required
            placeholder="Digite o seu nome:"
          />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleChange} />
        </label>
        <label>
          CPF:
          <input type="text" name="cpf" value={cpf} onChange={handleChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={city} onChange={handleChange} />
        </label>
        <label>
          State:
          <State state={state} handleChange={handleChange} />
        </label>
      </fieldset>
    );
  }
}

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: [
        'Acre',
        'Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Espirito Santo',
        'Goiás',
        'Maranhão',
        'Mato Grosso',
        'Mato Grosso do Sul',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernanbuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Rondônia',
        'Roraima',
        'Santa Catarina',
        'São Paulo',
        'Sergipe',
        'Tocantins',
        'Distrito Federal',
      ],
    };
  }
  render() {
    const { states } = this.state;
    return (
      <select name="state" value={this.props.state} onChange={this.props.handleChange}>
        <option value="">Select</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    );
  }
}

class LastJobInfo extends React.Component {
  render() {
    const { resume, role, role_desc, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Last Job</legend>
        <label>
          Resume:
          <textarea name="resume" value={resume} onChange={handleChange}></textarea>
        </label>

        <label>
          Role:
          <textarea name="role" value={role} onChange={handleChange}></textarea>
        </label>

        <label>
          Role Description:
          <input type="text" name="role_desc" value={role_desc} onChange={handleChange} />
        </label>
      </fieldset>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      city: '',
      state: '',
      resume: '',
      role: '',
      role_desc: '',
      formErrors: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.verifyFormErrors = this.verifyFormErrors.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState(
      {
        [name]: value,
      },
      () => this.verifyFormErrors()
    );
  }

  verifyFormErrors() {
    const { name, email, cpf, city, state, resume, role, role_desc } = this.state;

    const errors = [
      name.length > 40 || !name,
      !email || !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      !cpf || !cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
      !city || city.length > 28,
      !state,
      !resume || resume.length > 1000,
      !role || role.length > 40,
      !role_desc || role_desc.length > 500,
    ];

    const hasSomeError = errors.some((error) => error);

    this.setState({
      formErrors: hasSomeError ? hasSomeError : false,
    });
  }

  render() {
    const { name, email, cpf, adress, city, state, resume, role, role_desc } = this.state;

    return (
      <div>
        <PersonalInfo
          name={name}
          email={email}
          cpf={cpf}
          adress={adress}
          state={state}
          city={city}
          handleChange={this.handleChange}
        />
        <LastJobInfo
          resume={resume}
          role={role}
          role_desc={role_desc}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);
