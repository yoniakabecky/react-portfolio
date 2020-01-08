import React from 'react';
import ModalNav from '../ModalNav/ModalNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from 'react-responsive';
import cx from "classnames";
import { ReactComponent as Football } from '../../resources/icons/football.svg';

import './About.scss';

function About() {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)'
  });

  return (
    <div className="bg-gray">
      <ModalNav isBgGray={true} />
      <div className={cx("container", { justifyCenter: isMobile, alignItemCenter: isMobile })}>
        <div className={cx({ left: !isMobile }, "introWrapper")}>
          <h5>
            <FontAwesomeIcon icon={faCanadianMapleLeaf} className="icons red" />
            Hi, I'm Yoni Aoki
          </h5>
          <p>
            A Front-end Web Developer based in Vancouver, Canada.
            Formerly worked as an electronic engineer at a car parts manufacturer in Japan.
            I'm passionate about improving my knowledge and skills, and learning new and innovative methods.
          </p>
        </div>
        <div className={cx({ right: !isMobile }, "hobbyWrapper")}>
          <p>
            Also I like these things.<br />
            Do we have interests in common?
          </p>

          <div className="displayFlex">

            <div className="hobbyIcons" id="beerIcon">
              <span className="beerHandle"></span>
              <div className="beerGlass">
                <span className="beerGlassLine"></span>
                <div className="beerEmpty"></div>
                <div className="beer"></div>
              </div>
            </div>

            <div className="hobbyIcons" id="soccerIcon">
              <Football />
            </div>

            <div className="hobbyIcons" id="movieIcon">
              <div className="clapper" id="clapperUp"></div>
              <div className="clapper" id="clapperBottom"></div>
              <div className="blackBoard">
                <div className="lineForBoard" id="titleSpace">Yoni</div>
                <div className="lineForBoard">1</div>
                <div className="lineForBoard" id="middleSpace">42</div>
                <div className="lineForBoard"></div>
                <div className="lineForBoard" id="descriptionSpace"></div>
              </div>
            </div>

            <div className="hobbyIcons" id="coffeeIcon">
              <span className="cupHandle"></span>
              <div className="cup">
                <div className="steam"></div>
                <span className="steam"></span>
                <span className="steam"></span>
              </div>
              <div className="cupSaucer"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
