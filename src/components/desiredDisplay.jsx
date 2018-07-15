import React from 'react';
import PropTypes from 'prop-types';
import '../css/desired-display.css';

const DesiredDisplay = (props) => {
  const { stringNumber, note } = props;

  return (
    <div className="desired-display">
      {stringNumber}
      |
      {note}
    </div>
  );
};

DesiredDisplay.propTypes = {
  stringNumber: PropTypes.number.isRequired,
  note: PropTypes.string.isRequired,
};

export default DesiredDisplay;
