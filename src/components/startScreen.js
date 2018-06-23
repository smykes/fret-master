import React, { Component } from 'react';
import '../css/start-screen.css';
import InstrumentSelector from './instrumentSelector';

class StartScreen extends Component {
    render() {

      const options = this.props.instruments.map((instrument, index) => {
        return <InstrumentSelector key={index} 
                                    instrumentIcon = {instrument.instrumentIcon} 
                                    instrumentId = {instrument.instrumentId} 
                                    name = {instrument.instrumentName} 
                                    handleInstrumentSelection = {this.props.handleInstrumentSelection} />
      });
        return (
            <section className='start-screen'>
              <h1>Fret Master</h1>
              <h3>- Chose an Instrument to Start -</h3>
              <div>
                {options}
              </div>
            </section>
        );
    }
}

export default StartScreen;
