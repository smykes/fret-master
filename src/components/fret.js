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
        const stringNames = this.props.tuning.stringNames;
        const strings = stringNames.map((string, index) => {
          console.log(this.props.fretNumber);
          console.log(string)
          return <String 
                  key={index} 
                  tuning={this.props.tuning} 
                  fretNumber={this.props.fretNumber} 
                  stringNoteName={string}
                  desiredString={this.props.desiredString}
                  stringNumber={index} clickHandler={this.props.clickHandler} />
        });

        const markers = this.getMarkers();
        return (
            <div className="fret" style={fretStyle}>
            {markers}
            {strings}
              {/* {markers}
                {strings} */}
            </div>
        );
  }
}

export default Fret;
