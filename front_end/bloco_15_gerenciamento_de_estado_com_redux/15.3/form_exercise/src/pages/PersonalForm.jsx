import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { submitForm } from '../redux/actions';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      cannotSubmit: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validateForm());
  }

  validateForm() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    const maxLengthName = 40;
    const maxLengthCity = 28;

    const errors = [
      nome.length > maxLengthName || !nome,
      !email || !email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
      !cpf || !cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
      !cidade || cidade.length > maxLengthCity,
      !estado,
      endereco.length > maxLengthName || !endereco,
    ];

    const hasSomeError = errors.some((error) => error);

    this.setState({
      cannotSubmit: hasSomeError,
    });
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado, cannotSubmit } = this.state;
    const { submitForm: submitInfo } = this.props;
    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá',
      'Amazonas',
      'São Paulo',
      'Ceará',
      'Distrito Federal',
    ];
    return (
      <fieldset>
        <Input
          label="nome: "
          type="text"
          onChange={ this.handleChange }
          value={ nome }
          name="nome"
          required
        />
        <Input
          label="email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="endereco: "
          type="text"
          onChange={ this.handleChange }
          value={ endereco }
          name="endereco"
          required
        />
        <Input
          label="cidade: "
          type="text"
          onChange={ this.handleChange }
          name="cidade"
          value={ cidade }
        />
        <Select
          onChange={ this.handleChange }
          value={ estado }
          label="Estado: "
          id="estado"
          name="estado"
          options={ states }
        />
        <Button
          type="button"
          label="Enviar"
          onClick={ () => submitInfo(this.state) }
          cannotSubmit={ cannotSubmit }
        />
      </fieldset>
    );
  }
}

const mapDispatchToProps = { submitForm };

PersonalForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PersonalForm);
