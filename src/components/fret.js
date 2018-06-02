import React, { Component } from 'react';
import '../css/fret.css';
import String from './string.js';
import {Instruments} from '../constants/instruments.js';

class Fret extends Component {
    getMarkers() {
      if (this.props.marker) {
        return <div className={'marker'}></div>
      }
    }
    render() {

        const fretStyle = { 'width': this.props.width };
        const strings = Instruments[this.props.instrumentIndex].defaultTuning.map((note, index) => {
          return <String key={`${note}-${index}`} fretNumber={this.props.number} desiredString={this.props.desiredString} name={note} number={this.props.number} stringNumber={index} clickHandler={this.props.clickHandler}/>
        });
        const markers = this.getMarkers();
        return (
            <div className="fret" style={fretStyle}>
              {markers}
                {strings}
            </div>
        );
    }
}

export default Fret;
