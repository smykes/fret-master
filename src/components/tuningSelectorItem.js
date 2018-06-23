import React, { Component } from 'react';


class TuningSelectorItem extends Component {

    render() {
        return (
            <div onClick={() => this.props.handleTuningSelection(this.props.tuningId)}>{this.props.stringCount} String - {this.props.name}</div>
        );
    }
}

export default TuningSelectorItem;
