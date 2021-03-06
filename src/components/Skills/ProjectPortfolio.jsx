import React from "react";

import * as ROUTES from "../../constants/routes";
import mock from "../../resources/projects/portfolio/mockPortfolio.jpg";
import ProjectFooter from "../Layout/ProjectFooter";
import ProjectNav from "../Layout/ProjectNav";
import "./Project.scss";

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
        <p>First Attempt of My Portfolio</p>
        <p>Skills: HTML5, SASS, JavaScript</p>

        <br />

        <div className="projectImages">
          <img src={mock} alt="mock_bj" rel="preload" />
        </div>
      </div>

      <ProjectFooter
        prev
        next
        prevLink={ROUTES.ASSIGNMENT}
        nextLink={ROUTES.VECTOR}
      />
    </div>
  );
};

export default ProjectPortfolio;
