import React, { Component } from 'react';
import './App.css';
import './css/string-selector.css';
import FretBoard from './components/fretBoard.jsx';
import NoteDisplay from './components/noteDisplay.js';
import DesiredDisplay from './components/desiredDisplay.js';
import StringToggle from './components/stringToggle.js';
import Footer from './components/footer.js';
import StartScreen from './components/startScreen';
import TuningSelector from './components/tuningSelector';
import {Instruments} from './constants/instruments.js';
import {InstrumentConstants} from './constants/instrumentConstants.js';
import {Notes} from './constants/notes.js';
import {getInsturmentNameByInstrumentId, getInstrumentByInstrumentId, getTuningNameByInstrumentIdAndTuningId, getTuningByInstrumentIdAndTuningId} from './methods';



class App extends Component {
    constructor(props) {
        let instrumentId = 0;
        let tuningId = 0;
        super(props);
        this.state = {
            currentNote: '?',

            desiredNote: 'C',
            streak: 0,
            chosen: false,
            tuning: false,
            ///////////////////
            instrumentId,
            tuningId,
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.stringSelectorHandler = this.stringSelectorHandler.bind(this);
        this.handleInstrumentSelection = this.handleInstrumentSelection.bind(this);
        this.getInstrumentList = this.getInstrumentList.bind(this);
        this.handleTuningSelection = this.handleTuningSelection.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    getInstrumentList() {
      return InstrumentConstants;
    }
    getInstrumentByCurrentState() {
      
    }


    getInstrumentByInstrumentName(name) {
      return InstrumentConstants.find( instrument => instrument.instrumentName === name);
    }

    getInstrumentIdByInstrumentName(name) {
      const instrument = InstrumentConstants.find( instrument => instrument.instrumentName === name);
      return instrument.instrumentId;
    }


    getAllTuningsByInstrumentId(id) {
      const instrument = InstrumentConstants.find( instrument => instrument.instrumentId === id);
      return instrument.tunings;
    }

    getTuningByInstrumentIdAndTuningId(instrumentId, tuningId) {
      const instrument = InstrumentConstants.find( instrument => instrument.instrumentId === instrumentId);
      return instrument.tunings.find( tuning => tuning.tuningId === tuningId);
    }

    getStringCountByInstrumentIdAndTuningId(instrumentId, tuningId) {
      const instrument = InstrumentConstants.find( instrument => instrument.instrumentId === instrumentId);
      const tuning = instrument.tunings.find( tuning => tuning.tuningId === tuningId);
      return tuning.stringCount;
    }

    getStringNamesByInstrumentIdAndTunungId(instrumentId, tuningId) {
      const instrument = InstrumentConstants.find( instrument => instrument.instrumentId === instrumentId);
      const tuning = instrument.tunings.find( tuning => tuning.tuningId === tuningId);
      return tuning.stringNames;
    }
    handleTuningSelection(tuningId) {
      const desiredString = getTuningByInstrumentIdAndTuningId(this.state.instrumentId, tuningId);
      this.setState({tuningId, tuning: true, desiredString: desiredString.stringCount - 1})
    }
    handleGoBack() {
      this.setState({ tuning: false, chosen: false})
    }
    clickHandler(notes, number, string, stringNumber) {
      console.log('Click Handler: ', notes, number, string, stringNumber);
      const instrument = getInstrumentByInstrumentId(this.state.instrumentId);
      const clickedNote = this.calculateNote(notes, number, string);

      if (clickedNote === this.state.desiredNote && stringNumber === this.state.desiredString) {
        const numberOfStrings = instrument.defaultStringCount;
        const newDesiredString = this.state.desiredString - 1 >= 0 ? this.state.desiredString -1 : numberOfStrings - 1;
        const newStreak = this.state.streak;
        const randNo = this.randomNumber(0,11);
        const randNote = this.randomNote(randNo);

        this.setState({
                        currentNote: this.calculateNote(notes, number, string),
                        desiredString: newDesiredString,
                        desiredNote: randNote,
                        streak: newStreak + 1,
                      });
      }
      else {
        this.error(this.calculateFretByNote(instrument, this.state.desiredNote, this.state.desiredString), this.state.desiredString);
      }
    }
    stringSelectorHandler(name, stringNumber) {
      const activeStrings = this.state.activeStrings;
      const index = (activeStrings.indexOf(stringNumber));
      if (index !== -1) {
        activeStrings.splice(index, 1);
      }
      else {
        activeStrings.push(stringNumber);
      }
      this.setState({activeStrings: activeStrings.sort()}, () => {
        console.log(this.state.activeStrings);
      });
    }

    handleInstrumentSelection(id) {
      const instrument = getInstrumentByInstrumentId(id);

      console.log(`Instrument ID: ${id}`)
      console.log(`Instrument Name: ${instrument.instrumentName}`);

      this.setState({instrumentId: id, chosen: true,}, () => {
        const instrument = getInstrumentByInstrumentId(id);
        this.setState({ desiredString: (instrument.defaultStringCount-1), activeStrings: this.getTuningByInstrumentIdAndTuningId(id, this.state.tuningId)});
      });
    }
    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    randomNote(num) {
      return Notes[num]
    }
    success() {

    }
    error(fretNumber, desiredString) {
      console.log(document.getElementsByClassName(`string-${desiredString} fret-${fretNumber}`));
      let correctFret = document.getElementsByClassName(`string-${desiredString} fret-${fretNumber}`)[0];
      correctFret.className += ' correct-note';
      this.setState({currentNote: '😭', streak: 0});
    }

    calculateFretByNote(instrument, desiredNote, desiredString) {
      console.log("desiredString", desiredString);
      const tuning = getTuningByInstrumentIdAndTuningId(this.state.instrumentId, this.state.tuningId);
      const stringName = tuning.stringNames[desiredString].toUpperCase();
      console.log(`String Name: ${stringName}`);
      const noteNames = Notes;
      const indexOfStringNameInNoteNames = noteNames.indexOf(stringName);
      const indexOfDesiredNoteInNoteNames = noteNames.indexOf(desiredNote);
      console.log(`Index of String in note name array: ${indexOfStringNameInNoteNames}`)
      console.log(`Index of Fret Note in note name array: ${indexOfDesiredNoteInNoteNames}`)

      return (indexOfDesiredNoteInNoteNames - indexOfStringNameInNoteNames < 1) ? (indexOfDesiredNoteInNoteNames - indexOfStringNameInNoteNames) + 12 : indexOfDesiredNoteInNoteNames - indexOfStringNameInNoteNames;
    }
    calculateNote(notes, number, string) {
        let indexOfStringInNoteNames = notes.indexOf(string.toUpperCase());
        // Add the number of frets to the index to get the new index
        let newIndex = indexOfStringInNoteNames + number;

        let correctedIndex = (newIndex > 11) ? newIndex - 12 : newIndex;

        let noteName = notes[correctedIndex];

        return noteName;
    }
    handleChange(event) {
      const instrument = Instruments[Instruments.map(e => e.instrumentName).indexOf(event.target.value)];

      const startString = instrument.defaultStringCount - 1;
      this.setState({instrument: instrument.instrumentName, currentNote: '?', desiredString: startString});
    }
    getStrings() {
      const instrument = Instruments[Instruments.map(e => e.instrumentName).indexOf(this.state.instrument)];
      return instrument['defaultTuning'];
    }
  render() {
    const allInstruments = this.getInstrumentList();
    const chosen = this.state.chosen && this.state.tuning ? '' : 'hidden';
    const tuning = this.state.chosen && !this.state.tuning ? '' : 'hidden';
    const notChosen = this.state.chosen ? 'hidden' : '';
    // const stringToggles = this.getStrings().map((i,index) => <StringToggle key={`${i}-${index}`} stringNumber = {index} name={i} click={this.stringSelectorHandler} />);
    return (
      <div className="App">
        <div className={notChosen}>
          <StartScreen instruments={allInstruments} handleInstrumentSelection={this.handleInstrumentSelection}/>
        </div>
        <div className={tuning}>
          <TuningSelector handleGoBack={this.handleGoBack} handleTuningSelection={this.handleTuningSelection} instrument={getInstrumentByInstrumentId(this.state.instrumentId)}/>
        </div>
        <section className={chosen} id='game'>
          <h4>
            {getInsturmentNameByInstrumentId(this.state.instrumentId)} - {getTuningNameByInstrumentIdAndTuningId(this.state.instrumentId, this.state.tuningId)}
          </h4>
          <h5>
            Current Streak: {this.state.streak}
          </h5>
          <FretBoard clickHandler={this.clickHandler} instrumentId={this.state.instrumentId} tuningId={this.state.tuningId} desiredString={this.state.desiredString}/>
          <div className={'note-container'}>
            <DesiredDisplay note={this.state.desiredNote} stringNumber={this.state.desiredString + 1} />
            <NoteDisplay note={this.state.currentNote}/>
          </div>
          <div className={'string-selector'}>
            <form>
              {/* {stringToggles} */}
            </form>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
