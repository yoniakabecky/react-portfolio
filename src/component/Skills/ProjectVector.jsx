import React from 'react';
import ProjectNav from '../Layout/ProjectNav';
import ProjectFooter from '../Layout/ProjectFooter';

import * as ROUTES from '../../constants/routes';

import './Project.scss';
import mock from '../../resources/projects/vector/vector_mock.png';
import stamp from '../../resources/projects/vector/stamp.png';


const ProjectVector = () => {
  return (
    <div>
      <ProjectNav />
      <div className="projectTopImage" id="vectorTop">
        <div className="projectTitle">
          <h2>Stickers and T-shirt Design</h2>
        </div>
      </div>
      <div className="projectContainer">
        <h5>Client: Vector International Academy</h5>
        <h6>Role: Designer & Illustrator</h6>
        <br />
        <div className="projectImages">
          <p>A Sticker set for Students who using "LINE" and School T-shirts</p>
          <p className="text-15">* LINE is the most popular communication app in Japan</p>
          <img src={mock} alt="mock_bj" rel="preload" />
          <img src={stamp} alt="stamp" rel="preload" />
        </div>
      </div>

      <ProjectFooter prev prevLink={ROUTES.PORTFOLIO} />

    </div>
  )
}

export default ProjectVector;
