import React, { Component } from 'react';
import '../css/note-display.css';

class NoteDisplay extends Component {
    render() {
        return (
            <div className='note-display'>{this.props.note}</div>
        );
    }
}

export default NoteDisplay;
