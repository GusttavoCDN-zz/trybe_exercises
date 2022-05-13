import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function FormDataDisplay({ personalInfo, professionalInfo }) {
  const { name, city, email, address, state, cpf } = personalInfo;
  const { summary, role, roleDescription } = professionalInfo;
  return (
    <div>
      <h2>Dados enviados</h2>
      <div>
        Nome:
        {name}
      </div>
      <div>
        Email:
        {email}
      </div>
      <div>
        CPF:
        {cpf}
      </div>
      <div>
        Endereço:
        {address}
      </div>
      <div>
        Cidade:
        {city}
      </div>
      <div>
        Estado:
        {state}
      </div>
      <div>
        Currículo:
        {summary}
      </div>
      <div>
        Cargo:
        {role}
      </div>
      <div>
        Descrição do cargo:
        {roleDescription}
      </div>
    </div>
  );
}

const mapStateToProps = (globalState) => ({
  personalInfo: globalState.form,
  professionalInfo: globalState.professionalForm,
});

FormDataDisplay.propTypes = {
  personalInfo: PropTypes.shape({
    name: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    state: PropTypes.string,
    cpf: PropTypes.string,
  }).isRequired,
  professionalInfo: PropTypes.shape({
    summary: PropTypes.string,
    role: PropTypes.string,
    roleDescription: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, null)(FormDataDisplay);
