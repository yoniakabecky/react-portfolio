import React from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import './ModalNav.scss';

const ProjectNav = () => {
  const history = useHistory();

  const redirectToSkills = () => {
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
