import React, { Component } from 'react';
import '../css/footer.css';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
              Guitar, Bass Guitar, Mandolin, and Braritone Ukulele, Charango, Baglamas icons by Datacrafted from the Noun Project<br />
              Created with 💝 in Chicago by Jeff Smykil
            </footer>
        );
    }
}

Footer.proptypes = {
    stringNumber: PropTypes.number,
    note: PropTypes.string,
}

export default Footer;
