import React from 'react';
import * as ROUTES from '../../constants/routes';

import ProjectNav from '../Layout/ProjectNav';
import ProjectFooter from '../Layout/ProjectFooter';
import './Project.scss';

import mock from '../../resources/projects/bj/mock21.jpg';
import cards from '../../resources/projects/bj/cards.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

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
        <h6>A simple basic card game</h6>
        <h6>Skills: HTML5, SASS, JavaScript</h6>

        <ul className="projectLinks">
          <p>Links</p>
          <li className="red">
            <a href="https://yoniakabecky.github.io/blackjack-js/" rel="noopener noreferrer" target="_blank" className="pageLink">
              Play Game <FontAwesomeIcon icon={faPlay} className="playIcon" />
            </a>
          </li>
          <li className="red">
            <a href="https://github.com/yoniakabecky/blackjack-js" rel="noopener noreferrer" target="_blank" className="pageLink">
              Github Repo
          </a>
          </li>
        </ul>

        <div className="projectImages">
          <img src={mock} alt="mock_bj" rel="preload" />
        </div>
      </div>

      <ProjectFooter next nextLink={ROUTES.E_COMMERCE} />

    </div>
  )
}

export default ProjectBJ;
