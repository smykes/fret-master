import React, { Component } from 'react';
import '../css/instrument-selector.css';

class InstrumentSelector extends Component {
    render() {
        return (

            <div className='instrument-selector' onClick={() => this.props.handleInstrumentSelection(this.props.name)}>
              <label>{this.props.name}</label>
              <i className={this.props.icon}></i>
            </div>
        );
    }
}

export default InstrumentSelector;
