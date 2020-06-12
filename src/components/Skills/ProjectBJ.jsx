import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import * as ROUTES from "../../constants/routes";
import mock from "../../resources/projects/bj/mock21.jpg";
import cards from "../../resources/projects/bj/cards.png";
import ProjectFooter from "../Layout/ProjectFooter";
import ProjectNav from "../Layout/ProjectNav";
import "./Project.scss";

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
        <p>A simple basic card game</p>
        <p>Skills: HTML5, SASS, JavaScript</p>

        <ul className="projectLinks">
          <p>Links</p>
          <li className="red">
            <a
              href="https://yoniakabecky.github.io/blackjack-js/"
              rel="noopener noreferrer"
              target="_blank"
              className="pageLink"
            >
              Play Game <FontAwesomeIcon icon={faPlay} className="playIcon" />
            </a>
          </li>
          <li className="red">
            <a
              href="https://github.com/yoniakabecky/blackjack-js"
              rel="noopener noreferrer"
              target="_blank"
              className="pageLink"
            >
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
  );
};

export default ProjectBJ;
