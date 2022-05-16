import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { submitProForm } from '../redux/actions';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
      cannotSubmit: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validateForm());
  }

  handleClick() {
    const { submitProForm: submitInfo } = this.props;
    submitInfo(this.state);
    this.setState({
      curriculo: '',
      cargo: '',
      descricao: '',
      cannotSubmit: true,
    });
  }

  validateForm() {
    const { curriculo, cargo, descricao } = this.state;
    const errors = [!curriculo.length > 0, !cargo.length > 0, !descricao.length > 0];

    console.log(errors);
    const hasSomeError = errors.some((error) => error);

    this.setState({
      cannotSubmit: hasSomeError,
    });
  }

  render() {
    const { curriculo, cargo, descricao, cannotSubmit } = this.state;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculo }
          name="curriculo"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="cargo"
          type="text"
          value={ cargo }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="descricao"
          maxLength="500"
          onChange={ this.handleChange }
          value={ descricao }
          required
        />
        <Button
          label="enviar"
          onClick={ () => this.handleClick() }
          cannotSubmit={ cannotSubmit }
        />
      </fieldset>
    );
  }
}

const mapDispatchToProps = { submitProForm };

ProfessionalForm.propTypes = {
  submitProForm: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ProfessionalForm);
