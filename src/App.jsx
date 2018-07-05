import React, { Component } from "react";
import "./App.css";
import "./css/string-selector.css";
import FretBoard from "./components/fretBoard.jsx";
import NoteDisplay from "./components/noteDisplay.js";
import DesiredDisplay from "./components/desiredDisplay.jsx";
import Footer from "./components/footer.js";
import StartScreen from "./components/startScreen";
import TuningSelector from "./components/tuningSelector";
import GameModeSelector from "./components/gameModeSelector";
import GameStatisticsScreen from "./components/gameStatisticsScreen.jsx";
import { Instruments } from "./constants/instruments.js";
import {
  getInstrumentByInstrumentId,
  getTuningNameByInstrumentIdAndTuningId,
  getTuningByInstrumentIdAndTuningId,
  getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber,
  getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName,
  getStringCountByInstrumentIdAndTuningId,
  getInstrumentList,
  getRandomNumber,
  getNoteByNumber,
  getStringNameByInstrumentIdTuningIdAndStringNumber,
  getInstrumentNameByInstrumentId,
} from "./methods";

class App extends Component {
  constructor(props) {
    let instrumentId = 0;
    let tuningId = 0;
    super(props);
    this.state = {
      currentNote: "?",
      desiredNote: "C",
      streak: 0,
      isInstrumentChosen: false,
      isTuningChosen: false,
      isGameModeChosen: false,
      isGameEnded: false,
      errors: [],
      questionCount: 0,
      gameMode: false, // game modes are freestyle or arcade
      ///////////////////
      instrumentId,
      tuningId
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.stringSelectorHandler = this.stringSelectorHandler.bind(this);
    this.handleInstrumentSelection = this.handleInstrumentSelection.bind(this);
    this.handleTuningSelection = this.handleTuningSelection.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleGameModeSelection = this.handleGameModeSelection.bind(this);
    this.handleEndFreePlayMode = this.handleEndFreePlayMode.bind(this);
  }

  /*-- Event Handlers --*/
  handleEndFreePlayMode() {
    this.setState({isGameEnded: true, scoreScreen: true, chosen: false});
  }
  handleTuningSelection(tuningId) {
    console.log(tuningId);
    const desiredString = getTuningByInstrumentIdAndTuningId(
      this.state.instrumentId,
      tuningId
    );
    this.setState({
      tuningId,
      isTuningChosen: true,
      desiredString: desiredString.stringCount - 1
    });
  }
  handleGameModeSelection(mode = 'arcade') {
    this.setState({
      gameMode: mode,
      isGameModeChosen: true,
    });
  }
  handleGoBack() {
    this.setState({ isTuningChosen: false, isInstrumentChosen: false });
  }
  clickHandler(notes, number, string, stringNumber) {
    const clickedNote = getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(
      this.state.instrumentId,
      this.state.tuningId,
      stringNumber,
      number
    );
    if (
      clickedNote === this.state.desiredNote &&
      stringNumber === this.state.desiredString
    ) {
      const numberOfStrings = getStringCountByInstrumentIdAndTuningId(
        this.state.instrumentId,
        this.state.tuningId
      );
      const newDesiredString =
        this.state.desiredString - 1 >= 0
          ? this.state.desiredString - 1
          : numberOfStrings - 1;
      const newStreak = this.state.streak;
      const randNo = getRandomNumber(0, 11);
      const randNote = getNoteByNumber(randNo);

      this.setState({
        currentNote: getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(
          this.state.instrumentId,
          this.state.tuningId,
          stringNumber,
          number
        ),
        desiredString: newDesiredString,
        desiredNote: randNote,
        streak: newStreak + 1
      });
    } else {
      this.error(
        getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(
          this.state.instrumentId,
          this.state.tuningId,
          this.state.desiredString,
          this.state.desiredNote
        ),
        this.state.desiredString
      );
    }
  }
  stringSelectorHandler(name, stringNumber) {
    const activeStrings = this.state.activeStrings;
    const index = activeStrings.indexOf(stringNumber);
    if (index !== -1) {
      activeStrings.splice(index, 1);
    } else {
      activeStrings.push(stringNumber);
    }
    this.setState({ activeStrings: activeStrings.sort() }, () => {
      console.log(this.state.activeStrings);
    });
  }

  /**
   * 
   * @param {number} id instrumentId
   */

  handleInstrumentSelection(id) {
    this.setState({ instrumentId: id, isInstrumentChosen: true }, () => {
      const instrument = getInstrumentByInstrumentId(id);
      this.setState({
        desiredString: instrument.defaultStringCount - 1,
        activeStrings: getTuningByInstrumentIdAndTuningId(
          id,
          this.state.tuningId
        )
      });
    });
  }

  handleChange(event) {
    const instrument =
      Instruments[
        Instruments.map(e => e.instrumentName).indexOf(event.target.value)
      ];
    const startString = instrument.defaultStringCount - 1;
    this.setState({
      instrument: instrument.instrumentName,
      currentNote: "?",
      desiredString: startString
    });
  }

  error(fretNumber, desiredString) {
    let errors = this.state.errors;
    errors.push({string: desiredString + 1, fret: fretNumber});
    let correctFret = document.getElementsByClassName(
      `string-${desiredString} fret-${fretNumber}`
    )[0];
    correctFret.className += " correct-note";
    this.setState({ currentNote: "😭", streak: 0, errors });
  }

  success() {}

  render() {
    const allInstruments = getInstrumentList();

    /* 
      Start Screen where instrument is selected
      Show the start screen when isInstrumentChosen == false
    */

    const showStartScreen = !this.state.isInstrumentChosen ? 'start-screen' : 'hidden start-screen';
    
    /*
      Tuning Selection Screen where tuning is selected
      Show the tuning selection screen when isInstrumentChosen == true && isTuningChosen == false
    */

    const showTuningSelectionScreen = this.state.isInstrumentChosen && !this.state.isTuningChosen ? 'tuning-selection' : 'hidden tuning-selection';
    
    /*
      Game Mode Screen where game mode is selected
      Show game mode selection screen when isInstrumentChosen == true && isTuningChosen == true && isGameModeChosen == false
    */

    const showGameModeSelectionScreen = this.state.isInstrumentChosen && this.state.isTuningChosen && !this.state.isGameModeChosen ? 'game-mode-selection' : 'hidden game-mode-selection';

    /*
      Game Screen where game is played
      Show game screen when isInstrumentChosen == true && isTuningChosen == true && isGameModeChosen == true
    */

    const showGamePlayScreen = this.state.isInstrumentChosen && this.state.isTuningChosen && this.state.isGameModeChosen && !this.state.isGameEnded ? 'game-play' : 'game-play hidden';
    
    /*
      Statistics screen that shows after game has ended
      Show statistics screen when isInstrumentChosen == true && isTuningChosen == true && isGameModeChosen == true && isGameEnded == true
    */

    const showGameStatisticsScreen = this.state.isGameEnded ? 'game-score' : 'hidden game-score';

    const statistics = this.state.isGameEnded ? <GameStatisticsScreen instrumentId={this.state.instrumentId} tuningId={this.state.tuningId} errors={this.state.errors}/> : '' ;

    return (
      <div className="App">
        <section className={showStartScreen}>
          <StartScreen
            instruments={allInstruments}
            handleInstrumentSelection={this.handleInstrumentSelection}
          />
        </section>

        <section className={showTuningSelectionScreen}>
          <TuningSelector
            handleGoBack={this.handleGoBack}
            handleTuningSelection={this.handleTuningSelection}
            instrument={getInstrumentByInstrumentId(this.state.instrumentId)}
          />
        </section>

        <section className={showGameModeSelectionScreen}>
          <GameModeSelector 
            handleGoBack={this.handleGoBack}
            handleGameModeSelection={this.handleGameModeSelection}
            instrument={getInstrumentByInstrumentId(this.state.instrumentId)}
          />
        </section>

        <section className={showGamePlayScreen} id="game">
          <h4>
            {getInstrumentNameByInstrumentId(this.state.instrumentId)} -{" "}
            {getTuningNameByInstrumentIdAndTuningId(
              this.state.instrumentId,
              this.state.tuningId
            )}
          </h4>
          <h6>{this.state.gameMode}</h6>
          <h5>Current Streak: {this.state.streak}</h5>
          {/* <h6>Tuning: {getStringNamesByInstrumentIdAndTuningId(this.state.instrumentId, this.state.tuningId)}</h6> */}
          <FretBoard
            clickHandler={this.clickHandler}
            instrumentId={this.state.instrumentId}
            tuningId={this.state.tuningId}
            desiredString={this.state.desiredString}
            instrument={getInstrumentNameByInstrumentId(this.state.instrumentId)}
          />
          <div className={"note-container"}>
            <DesiredDisplay
              note={this.state.desiredNote}
              stringNumber={this.state.desiredString + 1}
              stringName={getStringNameByInstrumentIdTuningIdAndStringNumber(this.state.instrumentId, this.state.tuningId, this.state.desiredString)}
            />
            <NoteDisplay note={this.state.currentNote} />
          </div>

          <div>
            <button className={'end-free-play'}onClick={this.handleEndFreePlayMode}>End Free Play</button>
          </div>
        </section>
        <section className={showGameStatisticsScreen}>
            {statistics}
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
