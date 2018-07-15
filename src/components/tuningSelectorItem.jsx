import React from 'react';
import PropTypes from 'prop-types';
import '../css/tuning-selector.css';

const TuningSelectorItem = (props) => {
  const {
    handleTuningSelection,
    tuningId,
    stringCount,
    name,
  } = props;
  return (
    <button type="button" className="tuning-selector-item" onClick={() => handleTuningSelection(tuningId)}>
      {stringCount}
      String -
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
