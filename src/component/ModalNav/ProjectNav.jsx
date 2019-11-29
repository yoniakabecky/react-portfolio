import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { PageContext } from '../../contexts/PageContext';

import './ModalNav.scss';

const ProjectNav = () => {
  const history = useHistory();
  const { checkPrevPage } = useContext(PageContext);

  const redirectToSkills = () => {
    checkPrevPage(true);
    history.push(ROUTES.SKILLS);
  }

  return (
    <div className="modal-nav bg-noColor">
      <h4 className="backToSkills" onClick={redirectToSkills}>
        > Back to Skills
      </h4>
    </div>
  );
}

export default ProjectNav;
