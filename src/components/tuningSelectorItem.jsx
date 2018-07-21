import React from 'react';
import PropTypes from 'prop-types';
import '../css/tuning-selector.css';
import '../css/buttons.css';

const TuningSelectorItem = (props) => {
  const {
    handleTuningSelection,
    tuningId,
    stringCount,
    name,
  } = props;
  return (
    <button type="button" className="btn btn-outline tuning-selector-item" onClick={() => handleTuningSelection(tuningId)}>
      {stringCount}
      &nbsp;String -
      {name}
    </button>
  );
};

TuningSelectorItem.propTypes = {
  handleTuningSelection: PropTypes.func.isRequired,
  tuningId: PropTypes.number.isRequired,
  stringCount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default TuningSelectorItem;
