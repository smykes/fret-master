import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: 100,

    };
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.start();
  }

  start() {
    this.tick();
  }

  reset(time) {
    this.state({ timer: time });
  }

  tick() {
    const { handleTick } = this.props;

    handleTick();
  }

  render() {
    const { time } = this.props;
    return (
      <div>
        {time}
      </div>
    );
  }
}

CountDown.propTypes = {
  time: PropTypes.number.isRequired,
  handleTick: PropTypes.func.isRequired,
};
