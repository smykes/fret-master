import React from 'react';
import PropTypes from 'prop-types';
import TuningSelectorItem from './tuningSelectorItem';
import '../css/tuning-selector.css';

const TuningSelector = (props) => {
  const {
    instrument,
    handleTuningSelection,
    handleGoBack,
  } = props;

  const {
    instrumentName,
  } = instrument;

  const options = instrument.tunings.map(tuning => (
    <TuningSelectorItem
      handleTuningSelection={handleTuningSelection}
      key={tuning.tuningId}
      tuningId={tuning.tuningId}
      name={tuning.tuningName}
      stringCount={tuning.stringCount}
    />
  ));

  return (
    <section className="start-screen">
      <h1>
        Fret Master
      </h1>
      <h3 className="animated infinite flash">
        - Chose &nbsp;
        {instrumentName}
        &nbsp;Configuration -
      </h3>
      <span>
        {options}
      </span>
      <button type="button" onClick={handleGoBack}>
        Go Back
      </button>
    </section>
  );
};

TuningSelector.propTypes = {
  instrument: PropTypes.shape({
    tunings: PropTypes.array.isRequired,
    instrumentName: PropTypes.string.isRequired,
  }).isRequired,
  handleTuningSelection: PropTypes.func.isRequired,
  handleGoBack: PropTypes.func.isRequired,
};

export default TuningSelector;
