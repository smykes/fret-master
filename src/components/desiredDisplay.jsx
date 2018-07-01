import React, { Component } from 'react';
import '../css/desired-display.css';
import PropTypes from 'prop-types';

class DesiredDisplay extends Component {
    render() {
        return (
            <div className='desired-display'>{this.props.stringNumber} | {this.props.note}</div>
        );
    }
}

DesiredDisplay.proptypes = {
    stringNumber: PropTypes.number,
    stringName: PropTypes.string,
    note: PropTypes.string,
}
export default DesiredDisplay;
