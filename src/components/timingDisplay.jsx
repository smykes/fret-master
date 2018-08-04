import React from 'react';
import PropTypes from 'prop-types';
import CountDown from './countDown';
import Round from './round';
import '../css/timing-display.css';

const TimingDisplay = (props) => {
  const { time, handleTick, round } = props;
  return (
    <div>
      <CountDown time={time} handleTick={handleTick} />
      <Round round={round} />
    </div>
  );
};

TimingDisplay.propTypes = {
  time: PropTypes.number.isRequired,
  handleTick: PropTypes.func.isRequired,
  round: PropTypes.number.isRequired,
};

export default TimingDisplay;
