import React from "react";

import * as ROUTES from "../../constants/routes";
import mock from "../../resources/projects/scheduler-topPage.jpg";
import ProjectFooter from "../Layout/ProjectFooter";
import ProjectNav from "../Layout/ProjectNav";
import "./Project.scss";

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
        <p>Shift Maker for Hourly Workers</p>
        <p>Skills: HTML5, SASS, React, Redux, Material-ui, Firebase</p>

        <ul className="projectLinks">
          <p>Links</p>
          <li className="red">
            <a
              href="https://react-scheduler-yoni.firebaseapp.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="pageLink"
            >
              https://react-scheduler-yoni.firebaseapp.com/
            </a>
          </li>
          <li className="red">
            <a
              href="https://github.com/yoniakabecky/react-scheduler"
              rel="noopener noreferrer"
              target="_blank"
              className="pageLink"
            >
              Github Repo
            </a>
          </li>
        </ul>

        <p>Still in the progress... Coming soon</p>

        <div className="projectImages">
          <img src={mock} alt="mock_bj" rel="preload" />
        </div>
      </div>

      <ProjectFooter
        prev
        next
        prevLink={ROUTES.BJ}
        nextLink={ROUTES.ASSIGNMENT}
      />
    </div>
  );
};

export default ProjectScheduler;
