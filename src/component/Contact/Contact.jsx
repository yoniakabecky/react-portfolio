import React from 'react';
import ModalNav from '../ModalNav/ModalNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { greeting } from '../../function/greeting';

import './Contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className="bg-gray">
        <ModalNav />
        <div className="container alignItemCenter justifyCenter">
          <h2 className="red">{greeting()}</h2>
          <p className="contents">
            Would you like to contact me?<br />
            Please contact me on ⬇
          </p>
          <div>
            <a href="https://www.linkedin.com/in/yoniakabecky/" rel="noopener noreferrer" target="_blank" className="social_icon linkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="mailto:yoniakabecky@gmail.com" className="social_icon envelope">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://www.instagram.com/yoniakabecky/" rel="noopener noreferrer" target="_blank" className="social_icon instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;