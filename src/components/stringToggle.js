import React, { Component } from 'react';
import '../css/string-selector.css';

class StringToggle extends Component {
    render() {
        return (
          <div className="string-selector">
            <label>{this.props.name}</label>
            <input type="checkbox" onClick={() => this.props.click(this.props.name, this.props.stringNumber)} defaultChecked />
          </div>
        );
    }
}

export default StringToggle;
