import React, { Component } from 'react';
import '../css/instrument-selector.css';

class InstrumentSelector extends Component {

    render() {
        return (
            <div className='instrument-selector' onClick={() => this.props.handleInstrumentSelection(this.props.instrumentId)}>
              <label>{this.props.name}</label>
              <i className={this.props.instrumentIcon}></i>
            </div>
        );
    }
}

export default InstrumentSelector;
