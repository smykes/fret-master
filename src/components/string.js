import React, { Component } from 'react';
import '../css/string.css';
import {Notes} from '../constants/notes.js';
import PropTypes from 'prop-types';

class String extends Component {
    constructor(props) {
        super(props);
        this.state = {
            string: props.stringNoteName,
            number: props.fretNumber,
            stringNumber: props.stringNumber,
            noteNames: Notes,
            tuning: props.tuning,
        };
        this.calculateNote = this.calculateNote.bind(this);
    }
    calculateNote() {
        console.log(this.state.tuning);
        console.log("State String:", this.state.string);
        console.log("State String Number", this.state.stringNumber);
        // Find the name of the string note in the array and return the index.
        let indexOfStringInNoteNames = this.state.noteNames.indexOf(this.state.string.toUpperCase());
        // Add the number of frets to the index to get the new index
        let newIndex = indexOfStringInNoteNames + this.state.number;

        let correctedIndex = (newIndex > 11) ? newIndex - 12 : newIndex;

        let noteName = this.state.noteNames[correctedIndex];
        this.setState({currentNote: noteName});
    }

    getStringClass() {

      if (this.state.stringNumber === this.props.desiredString) {
        return `string string-${this.state.stringNumber} fret-${this.props.fretNumber} active`;
      }
      return `string string-${this.state.stringNumber} fret-${this.props.fretNumber}`;
    }
    render() {
        const stringClass = this.getStringClass();
        return (
            <div onClick={() => this.props.clickHandler(this.state.noteNames, this.state.number, this.state.string, this.state.stringNumber)} className={stringClass}></div>
            // <div onClick={() => this.calculateNote()} className={stringClass}></div>

        );
    }
}

String.proptypes = {
    stringNoteName: PropTypes.string,
    fretNumber: PropTypes.fretNumber,
    stringNumber: PropTypes.stringNumber,
    desiredString: PropTypes.number,
    clickHandler: PropTypes.func,
}

export default String;

