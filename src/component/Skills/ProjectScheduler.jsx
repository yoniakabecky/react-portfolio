import React from 'react';
import ProjectNav from '../Layout/ProjectNav';
import ProjectFooter from '../Layout/ProjectFooter';

import * as ROUTES from '../../constants/routes';

import './Project.scss';
import mock from '../../resources/projects/scheduler-topPage.jpg';


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
          <img src={mock} alt="mock_bj" rel="preload" />
        </div>
      </div>

      <ProjectFooter prev next prevLink={ROUTES.BJ} nextLink={ROUTES.ASSIGNMENT} />

    </div>
  )
}

export default ProjectScheduler;
