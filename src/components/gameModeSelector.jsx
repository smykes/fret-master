import React, { Component } from 'react';
import '../css/game-mode.css';

class GameModeSelector extends Component {
    render() {
        return (
            <section className='game-mode'>
              <h1>Fret Master</h1>
              <h3>- Chose {this.props.instrument.instrumentName} Game Mode -</h3>

                    <div className={'tuning-selector-item'} onClick={() => this.props.handleGameModeSelection('freeplay')}>Free Play</div>
                    <div className={'tuning-selector-item'} onClick={() => this.props.handleGameModeSelection('arcade')}>Arcade</div>

                <button onClick={this.props.handleGoBack}>Go Back</button>
            </section>
        );
    }
}

export default GameModeSelector;
