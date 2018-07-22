import React from 'react';
import PropTypes from 'prop-types';
import '../css/start-screen.css';
import '../css/animate.css';

import InstrumentSelector from './instrumentSelector';
import Header from './header';

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
      <Header
        headerText="Fret Master"
        headerAnimatedType="rubberBand animated"
        subHeaderText="- Choose an Instrument to Start -"
        subHeaderAnimatedType="flash animated infinite"
      />

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
