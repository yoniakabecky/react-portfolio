import React from 'react';
import ModalNav from '../ModalNav/ModalNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-regular-svg-icons';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';
import { faFilm, faBeer, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import cx from "classnames";

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
          <FontAwesomeIcon icon={faFilm} className="icons" style={{ color: "#222" }} />
          <FontAwesomeIcon icon={faFutbol} className="icons" style={{ color: "#2679ff" }} />
          <FontAwesomeIcon icon={faBeer} className="icons" style={{ color: "#F28E1C" }} />
          <FontAwesomeIcon icon={faCoffee} className="icons" style={{ color: "#ff91a4" }} />
        </div>
      </div>
    </div>
  );
}

export default About;
