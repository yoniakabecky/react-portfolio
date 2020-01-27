import React from 'react';
import ProjectNav from '../ModalNav/ProjectNav';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
        <h5>First Attempt of My Portfolio</h5>
        <h6>Skills: HTML5 / SASS / JavaScript</h6>
        <br />
        <div className="projectImages">
          <img src={mock} alt="mock_bj" rel="preload" />
        </div>
      </div>

      <>
        <Link to={ROUTES.ASSIGNMENT} className="projectFooter arrowPrev">
          <FontAwesomeIcon icon={faChevronLeft} className="footerIcons" />
          prev project
        </Link>
        <Link to={ROUTES.VECTOR} className="projectFooter arrowNext">
          next project
          <FontAwesomeIcon icon={faChevronRight} className="footerIcons" />
        </Link>
      </>
    </div>
  )
}

export default ProjectPortfolio;
