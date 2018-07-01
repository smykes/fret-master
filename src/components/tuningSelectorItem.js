import React, { Component } from 'react';
import '../css/tuning-selector.css';


class TuningSelectorItem extends Component {

    render() {
        return (
            <div className="tuning-selector-item" onClick={() => this.props.handleTuningSelection(this.props.tuningId)}>{this.props.stringCount} String - {this.props.name}</div>
        );
    }
}

export default TuningSelectorItem;
