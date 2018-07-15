import React from 'react';
import PropTypes from 'prop-types';
import Fret from './fret';
import '../css/fret-board.css';
import { getInstrumentByInstrumentId, getTuningByInstrumentIdAndTuningId } from '../methods';

const FretBoard = (props) => {
  const {
    instrumentId,
    tuningId,
    desiredString,
    clickHandler,
  } = props;

  const instrument = getInstrumentByInstrumentId(instrumentId);
  const instrumentStyle = `fret-board ${instrument}`;
  const tuning = getTuningByInstrumentIdAndTuningId(instrumentId, tuningId);
  const frets = instrument.fretSpacing.map((number, index) => (
    <Fret
      key={index}
      tuning={tuning}
      width={number['width'] * 3}
      marker={number.marker === true ? 1 : 0}
      fretNumber={index + 1}
      desiredString={desiredString}
      instrumentId={instrumentId}
      tuningId={tuningId}
      clickHandler={clickHandler}
    />
  ));

  return (
    <div className={instrumentStyle}>
      {frets}
    </div>
  );
};

FretBoard.propTypes = {
  instrumentId: PropTypes.number.isRequired,
  tuningId: PropTypes.number.isRequired,
  desiredString: PropTypes.number,
  clickHandler: PropTypes.func.isRequired,
};

FretBoard.defaultProps = {
  desiredString: 6,
};

export default FretBoard;
