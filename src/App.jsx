import React, { Component } from 'react';
import { Howl } from 'howler';
import './App.css';
import './css/string-selector.css';
import FretBoard from './components/fretBoard';
import NoteDisplay from './components/noteDisplay';
import DesiredDisplay from './components/desiredDisplay';
import Footer from './components/footer.jsx';
import StartScreen from './components/startScreen';
import TuningSelector from './components/tuningSelector';
import GameModeSelector from './components/gameModeSelector';
import GameStatisticsScreen from './components/gameStatisticsScreen';
import { InstrumentConstants } from './constants/instrumentConstants';

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
} from './methods';

class App extends Component {
  constructor(props) {
    const instrumentId = 0;
    const tuningId = 0;
    super(props);
    const sound = new Howl({
      src: ['sounds/gogogo.ogg'],
    });
    const errorSound = new Howl({
      src: ['sounds/error.ogg'],
    });
    const correctSound = new Howl({
      src: ['sounds/correct.ogg'],
    });

    this.state = {
      currentNote: '?',
      desiredNote: 'C',
      streak: 0,
      sound,
      errorSound,
      correctSound,
      isInstrumentChosen: false,
      isTuningChosen: false,
      isGameModeChosen: false,
      isGameEnded: false,
      errors: [],
      questionCount: 0,
      gameMode: false, // game modes are freestyle or arcade
      instrumentId,
      tuningId,
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.stringSelectorHandler = this.stringSelectorHandler.bind(this);
    this.handleInstrumentSelection = this.handleInstrumentSelection.bind(this);
    this.handleTuningSelection = this.handleTuningSelection.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleGameModeSelection = this.handleGameModeSelection.bind(this);
    this.handleEndFreePlayMode = this.handleEndFreePlayMode.bind(this);
    this.handleTryAgain = this.handleTryAgain.bind(this);
  }

  /* -- Event Handlers -- */

  handleTryAgain() {
    this.setState({
      isInstrumentChosen: false,
      isTuningChosen: false,
      isGameModeChosen: false,
      isGameEnded: false,
      questionCount: 0,
      errors: [],
      streak: 0,
    });
  }

  handleEndFreePlayMode() {
    this.setState({ isGameEnded: true });
  }

  handleTuningSelection(tuningId) {
    const { sound, instrumentId } = this.state;
    sound.play();

    const desiredString = getTuningByInstrumentIdAndTuningId(
      instrumentId,
      tuningId,
    );
    this.setState({
      tuningId,
      isTuningChosen: true,
      desiredString: desiredString.stringCount - 1,
    });
  }

  handleGameModeSelection(mode = 'arcade') {
    const { sound } = this.state;
    sound.play();
    this.setState({
      gameMode: mode,
      isGameModeChosen: true,
    });
  }

  handleGoBack() {
    this.setState({ isTuningChosen: false, isInstrumentChosen: false });
  }

  clickHandler(notes, number, string, stringNumber) {
    const {
      instrumentId,
      tuningId,
      desiredNote,
      desiredString,
      correctSound,
      streak,
      questionCount,
    } = this.state;
    const clickedNote = getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(
      instrumentId,
      tuningId,
      stringNumber,
      number,
    );
    if (
      clickedNote === desiredNote
      && stringNumber === desiredString
    ) {
      correctSound.play();
      const numberOfStrings = getStringCountByInstrumentIdAndTuningId(
        instrumentId,
        tuningId,
      );
      const newDesiredString = (desiredString - 1) >= 0
        ? desiredString - 1
        : numberOfStrings - 1;
      const newStreak = streak;
      const randNo = getRandomNumber(0, 11);
      const randNote = getNoteByNumber(randNo);
      let count = questionCount;
      count = questionCount + 1;
      this.setState({
        currentNote: getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(
          instrumentId,
          tuningId,
          stringNumber,
          number,
        ),
        desiredString: newDesiredString,
        desiredNote: randNote,
        streak: newStreak + 1,
        questionCount: count,
      });
    } else {
      this.error(
        getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(
          instrumentId,
          tuningId,
          desiredString,
          desiredNote,
        ),
        desiredString,
      );
    }
  }

  stringSelectorHandler(name, stringNumber) {
    const { activeStrings } = this.state;
    const index = activeStrings.indexOf(stringNumber);
    if (index !== -1) {
      activeStrings.splice(index, 1);
    } else {
      activeStrings.push(stringNumber);
    }
    this.setState({ activeStrings: activeStrings.sort() });
  }

  /**
   *
   * @param {number} id instrumentId
   */

  handleInstrumentSelection(id) {
    const { sound, tuningId } = this.state;
    sound.play();
    this.setState({ instrumentId: id, isInstrumentChosen: true }, () => {
      const instrument = getInstrumentByInstrumentId(id);
      this.setState({
        desiredString: instrument.defaultStringCount - 1,
        activeStrings: getTuningByInstrumentIdAndTuningId(
          id,
          tuningId,
        ),
      });
    });
  }

  handleChange(event) {
    const instrument = InstrumentConstants[
      InstrumentConstants.map(e => e.instrumentName).indexOf(event.target.value)
    ];
    const startString = instrument.defaultStringCount - 1;
    this.setState({
      currentNote: '?',
      desiredString: startString,
    });
  }

  error(fretNumber, desiredString) {
    const {
      errorSound,
      questionCount,
      errors,
      gameMode,
    } = this.state;

    errorSound.play();
    let count = questionCount;
    count += 1;
    errors.push({ string: desiredString + 1, fret: fretNumber });
    const correctFret = document.getElementsByClassName(
      `string-${desiredString} fret-${fretNumber}`,
    )[0];
    correctFret.className += ' correct-note';
    if (gameMode === 'arcade') {
      this.setState({ isGameEnded: true });
    } else {
      this.setState({
        currentNote: '😭', streak: 0, errors, questionCount: count,
      });
    }
  }

  render() {
    const {
      instrumentId,
      tuningId,
      isInstrumentChosen,
      isTuningChosen,
      isGameModeChosen,
      isGameEnded,
      errors,
      questionCount,
      streak,
      gameMode,
      desiredString,
      desiredNote,
      currentNote,
    } = this.state;

    const allInstruments = getInstrumentList();

    /*
      Start Screen where instrument is selected
      Show the start screen when
      isInstrumentChosen == false
    */

    const showStartScreen = !isInstrumentChosen ? 'start-screen' : 'hidden start-screen';

    /*
      Tuning Selection Screen where tuning is selected
      Show the tuning selection screen when
      isInstrumentChosen == true &&
      isTuningChosen == false
    */

    const showTuningSelectionScreen = isInstrumentChosen && !isTuningChosen ? 'tuning-selection' : 'hidden tuning-selection';

    /*
      Game Mode Screen where game mode is selected
      Show game mode selection screen when
      isInstrumentChosen == true &&
      isTuningChosen == true &&
      isGameModeChosen == false
    */

    const showGameModeSelectionScreen = isInstrumentChosen && isTuningChosen && !isGameModeChosen ? 'game-mode-selection' : 'hidden game-mode-selection';

    /*
      Game Screen where game is played
      Show game screen when
      isInstrumentChosen == true &&
      isTuningChosen == true &&
      isGameModeChosen == true
    */

    const showGamePlayScreen = isInstrumentChosen && isTuningChosen && isGameModeChosen && !isGameEnded ? 'game-play' : 'game-play hidden';

    /*
      Statistics screen that shows after game has ended
      Show statistics screen when
      isInstrumentChosen == true &&
      isTuningChosen == true &&
      isGameModeChosen == true &&
      isGameEnded == true
    */

    const showGameStatisticsScreen = isGameEnded ? 'game-score' : 'hidden game-score';

    const statistics = isGameEnded ? <GameStatisticsScreen instrumentId={instrumentId} tuningId={tuningId} errors={errors} questionCount={questionCount} /> : '';

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
            instrument={getInstrumentByInstrumentId(instrumentId)}
          />
        </section>

        <section className={showGameModeSelectionScreen}>
          <GameModeSelector
            handleGoBack={this.handleGoBack}
            handleGameModeSelection={this.handleGameModeSelection}
            instrument={getInstrumentByInstrumentId(instrumentId)}
          />
        </section>

        <section className={showGamePlayScreen} id="game">
          <h4>
            {getInstrumentNameByInstrumentId(instrumentId)}

            {getTuningNameByInstrumentIdAndTuningId(instrumentId, tuningId)}
          </h4>
          <h6>
            { gameMode }
          </h6>
          <h5>
            Current Streak:
            { streak }
          </h5>

          <FretBoard
            clickHandler={this.clickHandler}
            instrumentId={instrumentId}
            tuningId={tuningId}
            desiredString={desiredString}
            instrument={getInstrumentNameByInstrumentId(instrumentId)}
          />
          <div className="note-container">
            <DesiredDisplay
              note={desiredNote}
              stringNumber={desiredString + 1}
              stringName={
                getStringNameByInstrumentIdTuningIdAndStringNumber(
                  instrumentId,
                  tuningId,
                  desiredString,
                )
              }
            />
            <NoteDisplay note={currentNote} />
          </div>

          <div>
            <button type="button" className="end-free-play" onClick={this.handleEndFreePlayMode}>
              End Free Play
            </button>
          </div>
        </section>

        <section className={showGameStatisticsScreen}>
          {statistics}
          <button type="button" className="end-free-play" onClick={this.handleTryAgain}>
            Try Again
          </button>
        </section>

        <Footer />
      </div>
    );
  }
}

export default App;
