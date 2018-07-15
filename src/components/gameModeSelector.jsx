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
        - Chose&nbsp;
        {instrument.instrumentName}
        &nbsp;Game Mode -
      </h3>
      <button type="button" className="tuning-selector-item" onClick={() => handleGameModeSelection('freeplay')}>
        Free Play
      </button>
      <button type="button" className="tuning-selector-item" onClick={() => handleGameModeSelection('arcade')}>
        Arcade
      </button>
      <button type="button" onClick={handleGoBack}>
        Go Back
      </button>
    </section>
  );
};

GameModeSelector.propTypes = {
  instrument: PropTypes.shape({
    instrumentName: PropTypes.string.isRequired,
  }).isRequired,
  handleGameModeSelection: PropTypes.func.isRequired,
  handleGoBack: PropTypes.func.isRequired,
};

export default GameModeSelector;
