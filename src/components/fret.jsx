import React, { Component } from 'react';
import '../css/fret.css';
import PropTypes from 'prop-types';
import String from './string';

class Fret extends Component {
  getMarkers() {
    const { marker } = this.props;
    let ret = '';
    if (marker) {
      ret = <div className="marker" />;
    }
    return ret;
  }

  render() {
    const {
      tuning,
      width,
      fretNumber,
      desiredString,
      clickHandler,
      tuningId,
      instrumentId,
    } = this.props;
    const fretStyle = { width };
    const stringNames = tuning.stringNames;
    const strings = Object.keys(stringNames);
    const string = strings.map((indString, index) => {
      return (
        <String
          key={index} 
          tuning={tuning}
          fretNumber={fretNumber}
          stringNoteName={stringNames[indString]}
          desiredString={desiredString}
          stringNumber={index}
          clickHandler={clickHandler}
          tuningId={tuningId}
          instrumentId={instrumentId}
        />
      );
    });


    const markers = this.getMarkers();
    return (
      <div className="fret" style={fretStyle}>
        {markers}
        {string}
      </div>
    );
  }
}

export default Fret;


Fret.propTypes = {
  tuning: PropTypes.number.isRequired,
  fretNumber: PropTypes.string.isRequired,
  desiredString: PropTypes.number.isRequired,
  clickHandler: PropTypes.string.isRequired,
  marker: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  tuningId: PropTypes.number.isRequired,
  instrumentId: PropTypes.number.isRequired,
};
