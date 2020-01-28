import React from 'react';
import ProjectNav from '../Layout/ProjectNav';
import ProjectFooter from '../Layout/ProjectFooter';

import * as ROUTES from '../../constants/routes';

import './Project.scss';

import logo from '../../resources/projects/assignments/ciccc.svg';
import crud from '../../resources/projects/assignments/curd.gif';
import bnb from '../../resources/projects/assignments/bnb.jpg';
import ballet from '../../resources/projects/assignments/ballet.jpg';
import mern from '../../resources/projects/assignments/mern.gif';

const ProjectAssignment = () => {
  return (
    <div>
      <ProjectNav />
      <div className="projectTopImage" id="assignmentTop">
        <div className="projectTitle">
          <h2>Projects at School</h2>
          <img src={logo} alt="ciccc_logo" id="ciccc_logo" rel="preload" />
        </div>
      </div>
      <div className="projectContainer">
        <h5>Task: Employee Manager (Full-Stack)</h5>
        <h6>Skills: MongoDB, ExpressJS, ReactJS, NodeJS, Bootstrap</h6>
        <br />
        <div className="projectImages">
          <img src={mern} alt="mern" rel="preload" />
        </div>
      </div>
      <div className="projectContainer">
        <h5>Task: CRUD implementation using React and Redux</h5>
        <h6>Skills: ReactJS, Redux, REST API, Material-ui</h6>
        <br />
        <div className="projectImages">
          <img src={crud} alt="crud" rel="preload" />
        </div>
      </div>
      <div className="projectContainer">
        <h5>Task: Website Revamping #1 (Group project)</h5>
        <h6>Role: Make wire frame (sub pages), Coding & Reviewing </h6>
        <h6>Skills: HTML5, CSS3, Javascript</h6>
        <br />
        <div className="projectImages">
          <img src={ballet} alt="ballet" rel="preload" />
        </div>
      </div>
      <div className="projectContainer">
        <h5>Task: Website Revamping #2 (Group project)</h5>
        <h6>Role: Scheduling, Validate Contents & Coding </h6>
        <h6>Skills: HTML5, CSS3, Javascript</h6>
        <br />
        <div className="projectImages">
          <img src={bnb} alt="bnb" rel="preload" />
        </div>
      </div>

      <ProjectFooter prev next prevLink={ROUTES.SCHEDULER} nextLink={ROUTES.PORTFOLIO} />
    </div>
  )
}

export default ProjectAssignment;
