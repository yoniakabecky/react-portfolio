import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import ProjectNav from '../ModalNav/ProjectNav';
import './Project.scss';

import mock from '../../resources/projects/bj/mock21.png';
import cards from '../../resources/projects/bj/cards.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ProjectBJ = () => {

  return (
    <div>
      <ProjectNav />
      <div className="projectTopImage" id="bjTop">
        <div className="projectTitle">
          <h2>21 - Black Jack -</h2>
          <img src={cards} alt="cards_img" id="bj_cards" rel="preload" />
        </div>
      </div>
      <div className="projectContainer">
        <h5>Simple Card Game</h5>
        <h6>Skills: HTML5, SASS, JavaScript</h6>
        <br />
        <div className="projectImages">
          <img src={mock} alt="mock_bj" rel="preload" />
        </div>
        <a href="https://yoniakabecky.github.io/blackjack-js/" rel="noopener noreferrer" target="_blank" className="pageLink">
          <p>Play Game <FontAwesomeIcon icon={faPlay} className="playIcon" /></p>
        </a>
      </div>

      <>
        <Link to={ROUTES.SCHEDULER} className="projectFooter arrowNext">
          next project
          <FontAwesomeIcon icon={faChevronRight} className="footerIcons" />
        </Link>
      </>
    </div>
  )
}

export default ProjectBJ;
