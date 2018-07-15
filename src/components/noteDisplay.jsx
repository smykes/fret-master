import React from 'react';
import PropTypes from 'prop-types';
import '../css/note-display.css';

const NoteDisplay = (props) => {
  const { note } = props;
  return (
    <div className="note-display">
      {note}
    </div>
  );
};

NoteDisplay.propTypes = {
  note: PropTypes.string.isRequired,
};

export default NoteDisplay;
