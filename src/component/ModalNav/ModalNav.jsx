import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './ModalNav.scss';

function ModalHeader({ location }) {
  const pathName = location.pathname;
  const getPageName = () => {
    return pathName.replace('/', '');
  }

  return (
    <div className="modal-nav">
      <h4 className={pathName === "/skills" ? "logo red" : "logo"}>{getPageName()}</h4>
      <Link to="/" className="close-link font-simple">
        CLOSE<FontAwesomeIcon icon={faTimes} className="close-icon" />
      </Link>
    </div>
  );
}

export default withRouter(ModalHeader);
