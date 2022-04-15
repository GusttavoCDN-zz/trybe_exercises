import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAcess extends React.Component {
	whatToDO() {
		const { user: { name, password} } = this.props;

		if (name === 'João' && password === '123') {
			return 'Acesso Permitido';
		}
		return <Redirect to="/" />;
	}

	render() {
		return (
			<p>{this.whatToDO()}</p>
		);
	}
}

export default StrictAcess;
