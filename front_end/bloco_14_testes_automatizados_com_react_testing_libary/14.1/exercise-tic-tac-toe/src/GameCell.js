import React from 'react';
import PropTypes from 'prop-types';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';

// Não mude a propriedade da div data-testid de cada casa
// ele será utilizado para o terceiro exercício!
// Use-o para selecionar uma casa especifica nas horas dos testes.

class GameCell extends React.Component {
  render() {
    const { id, updateGame, content } = this.props;

    return (
      <div style={{ display: 'flex', alignItems: 'center'}}key={id} data-testid={`cell_${id}`} className="game-cell" onClick={updateGame}>
        {content === 1 && <img data-testid="cell-img" src={xImage} alt="X"/>}
        {content === 2 && <img data-testid="cell-img" src={oImage} alt="O"/>}
      </div>
    );
  }
}

export default GameCell;
