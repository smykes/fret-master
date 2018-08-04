import React from 'react';
import PropTypes from 'prop-types';

const Round = (props) => {
  const { round } = props;
  return (
    <div>
      Round:
      {round}
    </div>
  );
};

Round.propTypes = {
  round: PropTypes.number.isRequired,
};

export default Round;
