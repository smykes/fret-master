import React, { Component } from 'react';
import Fret from './fret.js';
import '../css/fret-board.css';
import {Instruments} from '../constants/instruments.js';

class FretBoard extends Component {
    getInstrumentIndex(instrumentName) {
      return Instruments.map(e => e.instrumentName).indexOf(instrumentName);
    }
    render() {
        const instrumentStyle = `fret-board ${this.props.instrument}`;
        console.log(this.props.instrument);
        const frets = Instruments[this.getInstrumentIndex(this.props.instrument)].fretSpacing.map((number, index) => {
          return <Fret
                    key={index * number.width}
                    width={number['width'] * 3}
                    marker={number.marker === true ? 1 : 0}
                    number={index+1}
                    desiredString={this.props.desiredString}
                    instrumentIndex={this.getInstrumentIndex(this.props.instrument)}
                    clickHandler={this.props.clickHandler}/>
        });
        return (
            <div className={instrumentStyle}>{frets}</div>
        );
    }
}

export default FretBoard;
