import React from 'react';
import ProjectNav from '../ModalNav/ProjectNav';

import './Project.scss';

import crud from '../../resources/projects/assignments/gif_crud.gif';
import bnb from '../../resources/projects/assignments/bnb.png';
import ballet from '../../resources/projects/assignments/ballet.png';
import mern from '../../resources/projects/assignments/mern.gif';

const ProjectAssignment = () => {
  return (
    <div>
      <ProjectNav />
      <div className="projectTopImage" id="assignmentTop">
        <div className="projectTitle">
          <h2>Projects at School</h2>
        </div>
      </div>
      <div className="projectContainer">
        <h6>Task: Employee Manager (Full-Stack)</h6>
        <h6>Skills: MongoDB, ExpressJS, ReactJS, NodeJS, Bootstrap</h6>
        <br />
        <div className="projectImages">
          <img src={mern} alt="mern" />
        </div>
      </div>
      <div className="projectContainer">
        <h6>Task: CRUD implementation using React and Redux</h6>
        <h6>Skills: ReactJS, Redux, REST API, Material-ui</h6>
        <br />
        <div className="projectImages">
          <img src={crud} alt="crud" />
        </div>
      </div>
      <div className="projectContainer">
        <h6>Task: Website Revamping #1 (Group project)</h6>
        <h6>Role: Make wire frame (sub pages), Coding & Reviewing </h6>
        <h6>Skills: HTML5, CSS3, Javascript</h6>
        <br />
        <div className="projectImages">
          <img src={ballet} alt="ballet" />
        </div>
      </div>
      <div className="projectContainer">
        <h6>Task: Website Revamping #2 (Group project)</h6>
        <h6>Role: Scheduling, Validate Contents & Coding </h6>
        <h6>Skills: HTML5, CSS3, Javascript</h6>
        <br />
        <div className="projectImages">
          <img src={bnb} alt="bnb" />
        </div>
      </div>
    </div>
  )
}

export default ProjectAssignment;
