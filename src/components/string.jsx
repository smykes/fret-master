import React, { Component } from 'react';
import '../css/string.css';
import PropTypes from 'prop-types';
import { Notes } from '../constants/notes';
import { getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber } from '../methods';

class String extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: props.stringNoteName,
      number: props.fretNumber,
      stringNumber: props.stringNumber,
      noteNames: Notes,
      debug: false,
    };
  }

  getStringClass() {
    const {
      desiredString,
      fretNumber,
    } = this.props;

    const {
      stringNumber,
    } = this.state;

    if (stringNumber === desiredString) {
      return `string string-${stringNumber} fret-${fretNumber} active`;
    }

    return `string string-${stringNumber} fret-${fretNumber}`;
  }

  render() {
    const {
      instrumentId,
      clickHandler,
      tuningId,
      stringNumber,
      fretNumber,
    } = this.props;

    const {
      debug,
      noteNames,
      number,
      string,
    } = this.state;

    const stringClass = this.getStringClass();
    const note = debug ? getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(instrumentId, tuningId, stringNumber, fretNumber) : '';
    return (
      <div
        role="button"
        onClick={() => clickHandler(noteNames, number, string, stringNumber)}
        className={stringClass}>
        <div className="label">
          {note}
        </div>
      </div>
    );
  }
}

String.propTypes = {
  stringNoteName: PropTypes.string.isRequired,
  fretNumber: PropTypes.number.isRequired,
  stringNumber: PropTypes.number.isRequired,
  desiredString: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  instrumentId: PropTypes.number.isRequired,
  tuningId: PropTypes.number.isRequired,
};

export default String;
