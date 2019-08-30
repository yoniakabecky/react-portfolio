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
    <div className="modal_nav">
      <h6 className={pathName === "/skills" ? "logo red" : "logo"}>{getPageName()}</h6>
      <Link to="/" className="close_link font_simple">
        CLOSE<FontAwesomeIcon icon={faTimes} className="close_icon" />
      </Link>
    </div>
  );
}

export default withRouter(ModalHeader);
