import React from 'react';
import ProjectNav from '../ModalNav/ProjectNav';

import './Project.scss';
import mock from '../../resources/projects/portfolio/mockPortfolio.png';

const ProjectPortfolio = () => {

  return (
    <div>
      <ProjectNav />
      <div className="projectTopImage" id="portfolioTop">
        <div className="projectTitle">
          <h2>Portfolio</h2>
        </div>
      </div>
      <div className="projectContainer">
        <h6>First Attempt of My Portfolio</h6>
        <h6>Skills: HTML5 / SASS / JavaScript</h6>
        <br />
        <div className="projectImages">
          <img src={mock} alt="mock_bj" />
        </div>
      </div>
    </div>
  )
}

export default ProjectPortfolio;
