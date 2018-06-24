import React, { Component } from 'react';
import './App.css';
import './css/string-selector.css';
import FretBoard from './components/fretBoard.jsx';
import NoteDisplay from './components/noteDisplay.js';
import DesiredDisplay from './components/desiredDisplay.js';
import Footer from './components/footer.js';
import StartScreen from './components/startScreen';
import TuningSelector from './components/tuningSelector';
import {Instruments} from './constants/instruments.js';
import {
  getInsturmentNameByInstrumentId, 
  getInstrumentByInstrumentId, 
  getTuningNameByInstrumentIdAndTuningId, 
  getTuningByInstrumentIdAndTuningId,
  getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber,
  getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName,
  getStringCountByInstrumentIdAndTuningId,
  getInstrumentList,
  getRandomNumber, 
  getNoteByNumber,
} from './methods';

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
        this.handleTuningSelection = this.handleTuningSelection.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    /*-- Event Handlers --*/

    handleTuningSelection(tuningId) {
      const desiredString = getTuningByInstrumentIdAndTuningId(this.state.instrumentId, tuningId);
      this.setState({tuningId, tuning: true, desiredString: desiredString.stringCount - 1})
    }
    handleGoBack() {
      this.setState({ tuning: false, chosen: false})
    }

    clickHandler(notes, number, string, stringNumber) {
      const clickedNote = getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(this.state.instrumentId, this.state.tuningId, stringNumber, number);
      if (clickedNote === this.state.desiredNote && stringNumber === this.state.desiredString) {
        const numberOfStrings = getStringCountByInstrumentIdAndTuningId(this.state.instrumentId, this.state.tuningId);
        const newDesiredString = this.state.desiredString - 1 >= 0 ? this.state.desiredString -1 : numberOfStrings - 1;
        const newStreak = this.state.streak;
        const randNo = getRandomNumber(0,11);
        const randNote = getNoteByNumber(randNo);

        this.setState({
          currentNote: getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(this.state.instrumentId, this.state.tuningId, stringNumber, number),
          desiredString: newDesiredString,
          desiredNote: randNote,
          streak: newStreak + 1,
        });
      }
      else {
        this.error(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(this.state.instrumentId, this.state.tuningId, this.state.desiredString, this.state.desiredNote), this.state.desiredString);
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
      this.setState({instrumentId: id, chosen: true,}, () => {
        const instrument = getInstrumentByInstrumentId(id);
        this.setState({ desiredString: (instrument.defaultStringCount-1), activeStrings: getTuningByInstrumentIdAndTuningId(id, this.state.tuningId)});
      });
    }

    handleChange(event) {
      const instrument = Instruments[Instruments.map(e => e.instrumentName).indexOf(event.target.value)];
      const startString = instrument.defaultStringCount - 1;
      this.setState({instrument: instrument.instrumentName, currentNote: '?', desiredString: startString});
    }

    error(fretNumber, desiredString) {
      let correctFret = document.getElementsByClassName(`string-${desiredString} fret-${fretNumber}`)[0];
      correctFret.className += ' correct-note';
      this.setState({currentNote: '😭', streak: 0});
    }

    success() {}

  render() {
    const allInstruments = getInstrumentList();
    const chosen = this.state.chosen && this.state.tuning ? '' : 'hidden';
    const tuning = this.state.chosen && !this.state.tuning ? '' : 'hidden';
    const notChosen = this.state.chosen ? 'hidden' : '';
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
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
