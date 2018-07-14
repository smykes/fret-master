import React from 'react';
import PropTypes from 'prop-types';
import '../css/game-mode.css';

const GameModeSelector = (props) => {
  const {
    instrument,
    handleGameModeSelection,
    handleGoBack,
  } = props;

  return (
    <section className="game-mode">
      <h1>
        Fret Master
      </h1>
      <h3>
        - Chose
        {instrument.instrumentName} 
        Game Mode -
      </h3>
      <div className={'tuning-selector-item'} onClick={() => handleGameModeSelection('freeplay')}>
        Free Play
      </div>
      <div className={'tuning-selector-item'} onClick={() => handleGameModeSelection('arcade')}>
        Arcade
      </div>
      <button type="button" onClick={handleGoBack}>
        Go Back
      </button>
    </section>
  );
};

GameModeSelector.propTypes = {
  instrument: PropTypes.object.isRequired,
  handleGameModeSelection: PropTypes.func.isRequired,
  handleGoBack: PropTypes.func.isRequired,
};

export default GameModeSelector;
