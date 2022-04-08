import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: undefined,
      loading: true,
    };

    this.changePerson = this.changePerson.bind(this);
  }

  fetchPerson() {
    this.setState({ loading: true }, async () => {
      const response = await fetch(' https://api.randomuser.me/');
      const personData = await response.json();

      this.setState({
        person: personData.results[0],
        loading: false,
      });
    });
  }

  componentDidMount() {
    this.fetchPerson();
  }

  shouldComponentUpdate(_nextProps, _nextState) {
    if (!_nextState.person) return true;
    const {
      dob: { age },
    } = _nextState.person;

    return age <= 70;
  }

  changePerson() {
    this.fetchPerson();
  }

  userElement() {
    const { person } = this.state;
    const {
      name: { first, last },
      email,
      dob: { age },
      picture: { thumbnail },
    } = person;

    return (
      <div>
        <p>
          {first} {last}
        </p>
        <p>{email}</p>
        <img src={thumbnail} alt="Fotinha" />
        <p>{age}</p>
        <button type="button" onClick={this.changePerson}>Change Person</button>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return <div>{loading ? loadingElement : this.userElement()}</div>;
  }
}

export default App;
