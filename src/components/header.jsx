import React from 'react';
import PropTypes from 'prop-types';
import '../css/start-screen.css';
import '../css/animate.css';

const Header = (props) => {
  const {
    headerText,
    headerAnimatedType,
    subHeaderText,
    subHeaderAnimatedType,
  } = props;


  return (
    <header>
      <h1 className={headerAnimatedType}>
        {headerText}
      </h1>
      <h3 className={subHeaderAnimatedType}>
        {subHeaderText}
      </h3>
    </header>
  );
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
  headerAnimatedType: PropTypes.string.isRequired,
  subHeaderText: PropTypes.string.isRequired,
  subHeaderAnimatedType: PropTypes.string.isRequired,
};

export default Header;
