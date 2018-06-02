import React, { Component } from 'react';
import '../css/string.css';
import {Notes} from '../constants/notes.js';

class String extends Component {
    constructor(props) {
        super(props);
        this.state = {
            string: props.name,
            number: props.number,
            stringNumber: props.stringNumber,
            noteNames: Notes
        };
        this.calculateNote = this.calculateNote.bind(this);
    }
    calculateNote() {
        // Find the name of the string note in the array and return the index.
        let indexOfStringInNoteNames = this.state.noteNames.indexOf(this.state.string.toUpperCase());
        // Add the number of frets to the index to get the new index
        let newIndex = indexOfStringInNoteNames + this.state.number;

        let correctedIndex = (newIndex > 11) ? newIndex - 12 : newIndex;

        let noteName = this.state.noteNames[correctedIndex];

        console.log("NOTE NAME: " + noteName);
        console.log(`------------------------------------`);
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
        );
    }
}

export default String;
