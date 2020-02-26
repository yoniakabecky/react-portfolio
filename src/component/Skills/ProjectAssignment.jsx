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
        <p>Task: Employee Manager (Full-Stack)</p>
        <p>Skills: MongoDB, ExpressJS, ReactJS, NodeJS, Bootstrap</p>
        <ul className="projectLinks">
          <p>Links</p>
          <li className="red">
            <a href="https://github.com/yoniakabecky/Employees-Manager-React-Bootstrap" rel="noopener noreferrer" target="_blank" className="pageLink">
              Github Repo
          </a>
          </li>
        </ul>
        <div className="projectImages">
          <img src={mern} alt="mern" rel="preload" />
        </div>
      </div>
      <div className="projectContainer">
        <p>Task: CRUD implementation using React and Redux</p>
        <p>Skills: ReactJS, Redux, REST API, Material-ui</p>
        <ul className="projectLinks">
          <p>Links</p>
          <li className="red">
            <a href="https://github.com/yoniakabecky/assignment-react-and-redux" rel="noopener noreferrer" target="_blank" className="pageLink">
              Github Repo
          </a>
          </li>
        </ul>
        <div className="projectImages">
          <img src={crud} alt="crud" rel="preload" />
        </div>
      </div>
      <div className="projectContainer">
        <p>Task: Website Revamping #1 (Group project)</p>
        <p>Role: Make wire frame (sub pages), Coding & Reviewing </p>
        <p>Skills: HTML5, CSS3, Javascript</p>
        <br />
        <div className="projectImages">
          <img src={ballet} alt="ballet" rel="preload" />
        </div>
      </div>
      <div className="projectContainer">
        <p>Task: Website Revamping #2 (Group project)</p>
        <p>Role: Scheduling, Validate Contents & Coding </p>
        <p>Skills: HTML5, CSS3, Javascript</p>
        <br />
        <div className="projectImages">
          <img src={bnb} alt="bnb" rel="preload" />
        </div>
      </div>

      <ProjectFooter prev next prevLink={ROUTES.E_COMMERCE} nextLink={ROUTES.PORTFOLIO} />
    </div>
  )
}

export default ProjectAssignment;
