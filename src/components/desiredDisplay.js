import React, { Component } from 'react';
import '../css/desired-display.css';

class DesiredDisplay extends Component {
    render() {
        return (
            <div className='desired-display'>{this.props.stringNumber} | {this.props.note}</div>
        );
    }
}

export default DesiredDisplay;
