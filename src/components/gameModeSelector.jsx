import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import '../css/game-mode.css';
import '../css/buttons.css';

const GameModeSelector = (props) => {
  const {
    instrument,
    handleGameModeSelection,
    handleGoBack,
  } = props;
  function getSubHeaderText() {
    return `- Chose ${instrument.instrumentName} Game Mode -`;
  }
  return (
    <section className="game-mode">
      <Header
        headerText="FretMaster"
        headerAnimatedType=""
        subHeaderText={getSubHeaderText()}
        subHeaderAnimatedType="animated infinite flash"
      />
      <button type="button" className="btn btn-outline tuning-selector-item" onClick={() => handleGameModeSelection('freeplay')}>
        Free Play
      </button>
      <button type="button" className="btn btn-outline tuning-selector-item" onClick={() => handleGameModeSelection('arcade')}>
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
