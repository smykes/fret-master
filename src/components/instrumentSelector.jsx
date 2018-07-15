import React from 'react';
import PropTypes from 'prop-types';

import '../css/instrument-selector.css';

const InstrumentSelector = (props) => {
  const {
    name,
    instrumentIcon,
    instrumentId,
    handleInstrumentSelection,
  } = props;
  return (
    <button type="button" className="instrument-selector" onClick={() => handleInstrumentSelection(instrumentId)}>
      <div>
        {name}
      </div>
      <i className={instrumentIcon} />
    </button>
  );
};

InstrumentSelector.propTypes = {
  name: PropTypes.string.isRequired,
  instrumentIcon: PropTypes.string.isRequired,
  instrumentId: PropTypes.number.isRequired,
  handleInstrumentSelection: PropTypes.func.isRequired,
};

export default InstrumentSelector;
