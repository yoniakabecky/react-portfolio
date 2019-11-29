import React from 'react';
import ProjectNav from '../ModalNav/ProjectNav';

import './Project.scss';


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
        <h6>Shift Maker for Hourly Workers</h6>
        <h6>Skills: HTML5, SASS, React, Redux, Material-ui, Firebase</h6>
        <br />
        <p>Still in the progress... Coming soon</p>
        <div className="projectImages">
          {/* <img src={mock} alt="mock_bj" /> */}
        </div>
      </div>
    </div>
  )
}

export default ProjectScheduler;
