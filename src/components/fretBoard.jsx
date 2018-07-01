import React, { Component } from 'react';
import Fret from './fret.jsx';
import '../css/fret-board.css';
import {getInstrumentByInstrumentId, getTuningByInstrumentIdAndTuningId} from '../methods.js'
import PropTypes from 'prop-types';

class FretBoard extends Component {
    render() {
        const instrumentStyle = `fret-board ${this.props.instrument}`;
        const instrument =  getInstrumentByInstrumentId(this.props.instrumentId);
        const tuning = getTuningByInstrumentIdAndTuningId(this.props.instrumentId, this.props.tuningId);
        const frets = instrument.fretSpacing.map((number, index) => {
            return <Fret
                key={index * number.width}
                tuning = {tuning}
                width={number['width'] * 3}
                marker={number.marker === true ? 1 : 0}
                fretNumber={index+1}
                desiredString={this.props.desiredString}
                instrumentId={instrument.instrumentId}
                tuningId={this.props.tuningId}
                clickHandler={this.props.clickHandler}
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