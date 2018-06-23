import React, { Component } from 'react';
import TuningSelectorItem from './tuningSelectorItem.js';
import '../css/tuning-selector.css';

class TuningSelector extends Component {
    render() {
        const options = this.props.instrument.tunings.map((tuning, index) => {
            return <TuningSelectorItem handleTuningSelection={this.props.handleTuningSelection} key={index} tuningId={tuning.tuningId} name={tuning.tuningName} stringCount={tuning.stringCount} />
        });
        return (
            <section className='start-screen'>
              <h1>Fret Master</h1>
              <h3>- Chose {this.props.instrument.instrumentName} Configuration -</h3>
                {options}
                <button onClick={this.props.handleGoBack}>Go Back</button>
            </section>
        );
    }
}

export default TuningSelector;
