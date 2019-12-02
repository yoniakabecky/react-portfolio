import React from 'react';
import ProjectNav from '../ModalNav/ProjectNav';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './Project.scss';
import mock from '../../resources/projects/scheduler-topPage.png';


const ProjectScheduler = () => {
  return (
    <div>
      <ProjectNav />
      <div className="projectTopImage" id="schedulerTop">
        <div className="projectTitle">
          <h2>Scheduler</h2>
        </div>
      </div>
      <div className="projectContainer">
        <h5>Shift Maker for Hourly Workers</h5>
        <h6>Skills: HTML5, SASS, React, Redux, Material-ui, Firebase</h6>
        <br />
        <p>Still in the progress... Coming soon</p>
        <div className="projectImages">
          <img src={mock} alt="mock_bj" />
        </div>
      </div>

      <>
        <Link to={ROUTES.BJ} className="projectFooter arrowPrev">
          <FontAwesomeIcon icon={faChevronLeft} className="footerIcons" />
          prev project
        </Link>
        <Link to={ROUTES.ASSIGNMENT} className="projectFooter arrowNext">
          next project
          <FontAwesomeIcon icon={faChevronRight} className="footerIcons" />
        </Link>
      </>
    </div>
  )
}

export default ProjectScheduler;
