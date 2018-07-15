import React from 'react';
import PropTypes from 'prop-types';
import '../css/start-screen.css';
import '../css/animate.css';

import InstrumentSelector from './instrumentSelector';

const StartScreen = (props) => {
  const {
    instruments,
    handleInstrumentSelection,
  } = props;

  const options = instruments.map(instrument => (
    <InstrumentSelector
      key={instrument.instrumentId}
      instrumentIcon={instrument.instrumentIcon}
      instrumentId={instrument.instrumentId}
      name={instrument.instrumentName}
      handleInstrumentSelection={handleInstrumentSelection}
    />
  ));
  return (
    <section className="start-screen">
      <h1 className="animated rubberBand">
        Fret Master
      </h1>
      <h3 className="animated infinite flash">
        - Chose an Instrument to Start -
      </h3>
      <div>
        {options}
      </div>
    </section>
  );
};

StartScreen.propTypes = {
  instruments: PropTypes.object.isRequired,
  handleInstrumentSelection: PropTypes.func.isRequired,
};

export default StartScreen;
