import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import cx from "classnames";

import './ModalNav.scss';
import * as ROUTES from '../../constants/routes';

function ModalNav({ location, isBgGray }) {
  const pathName = location.pathname;
  const getPageName = () => {
    return pathName.replace('/', '');
  }

  const bgColor = isBgGray ? "bg-gray" : "bg-dark";

  return (
    <div className={cx("modal-nav", bgColor)}>
      <h4 className={pathName === "/skills" ? "logo red" : "logo"}>{getPageName()}</h4>
      <Link to={ROUTES.HOME} className="close-link font-simple">
        CLOSE<FontAwesomeIcon icon={faTimes} className="close-icon" />
      </Link>
    </div>
  );
}

export default withRouter(ModalNav);
