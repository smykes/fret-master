import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fret from './fret';
import '../css/fret-board.css';
import { getInstrumentByInstrumentId, getTuningByInstrumentIdAndTuningId } from '../methods'

class FretBoard extends Component {
  render() {
    const { 
      instrumentId,
      tuningId,
      desiredString,
      clickHandler,
    } = this.props;
    const instrumentStyle = `fret-board ${instrument}`;
    const instrument =  getInstrumentByInstrumentId(instrumentId);
    const tuning = getTuningByInstrumentIdAndTuningId(instrumentId, tuningId);
    const frets = instrument.fretSpacing.map((number, index) => {
      return <Fret
          key={index * number.width}
          tuning = {tuning}
          width={number['width'] * 3}
          marker={number.marker === true ? 1 : 0}
          fretNumber={index+1}
          desiredString={desiredString}
          instrumentId={instrument.instrumentId}
          tuningId={tuningId}
          clickHandler={clickHandler}
      />
    });
    return (
      <div className={instrumentStyle}>{frets}</div>
    );
  }
}

export default FretBoard;

FretBoard.proptypes = {
    instrumentId: PropTypes.number,
    instrument: PropTypes.string,
    tuningId: PropTypes.number,
    desiredString: PropTypes.number,
    clickHandler: PropTypes.func,
}