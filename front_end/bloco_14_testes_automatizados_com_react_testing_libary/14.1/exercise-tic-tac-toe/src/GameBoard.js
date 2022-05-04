import React from 'react';
import PropTypes from 'prop-types';
import GameCell from './GameCell';
import './GameBoard.css';

class GameBoard extends React.Component {
  render() {
    const { gameBoard, updateGame } = this.props;
    return (
      <div className="game-board">
        {gameBoard.map((playerId, i) => (
          <GameCell
            id={i}
            key={i}
            updateGame={() => updateGame(i)}
            content={playerId}
          />
        ))}
      </div>
    );
  }
}

GameBoard.propTypes = {
  gameBoard: PropTypes.arrayOf(PropTypes.number).isRequired,
  updateGame: PropTypes.func.isRequired,
};

export default GameBoard;
