import React from 'react';
import ModalNav from '../ModalNav/ModalNav';
import { useMediaQuery } from 'react-responsive';
import cx from "classnames";
// import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5, faCss3, faSass, faJs, faReact,
  faGitAlt, faNodeJs, faFigma,
} from '@fortawesome/free-brands-svg-icons';
import { faPuzzlePiece, faMobileAlt, faSmile, faUtensils } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as ReduxIcon } from '../../resources/icons/redux.svg';
import { ReactComponent as FirebaseIcon } from '../../resources/icons/firebase.svg';
import { ReactComponent as MuiIcon } from '../../resources/icons/mui.svg';

import './Skills.scss';

const mySkills = [
  { name: "HTML5", wrapper: "html", icon: <FontAwesomeIcon icon={faHtml5} />, tooltipId: "html" },
  { name: "CSS3", wrapper: "css", icon: <FontAwesomeIcon icon={faCss3} />, tooltipId: "css" },
  { name: "Sass", wrapper: "sass", icon: <FontAwesomeIcon icon={faSass} />, tooltipId: "sass" },
  { name: "JavaScript", wrapper: "js", icon: <FontAwesomeIcon icon={faJs} />, tooltipId: "js" },
  { name: "ReactJS", wrapper: "react", icon: <FontAwesomeIcon icon={faReact} />, tooltipId: "react" },
  { name: "Redux", wrapper: "redux", icon: <ReduxIcon id="reduxIcon" className="svgIcon" />, tooltipId: "redux" },
  { name: "Material-ui", wrapper: "mui", icon: <MuiIcon id="muiIcon" className="svgIcon" />, tooltipId: "mui" },
  { name: "Responsive Design", wrapper: "responsive", icon: <FontAwesomeIcon icon={faMobileAlt} />, tooltipId: "responsive" },
  { name: "Git", wrapper: "git", icon: <FontAwesomeIcon icon={faGitAlt} />, tooltipId: "git" },
  { name: "Firebase", wrapper: "firebase", icon: <FirebaseIcon id="firebaseIcon" className="svgIcon" />, tooltipId: "firebase" },
  { name: "NodeJS", wrapper: "nodejs", icon: <FontAwesomeIcon icon={faNodeJs} />, tooltipId: "nodejs" },
  { name: "Problem Solving", wrapper: "solving", icon: <FontAwesomeIcon icon={faPuzzlePiece} />, tooltipId: "solving" },
  { name: "Illustrator", wrapper: "illustrator", icon: "Ai", tooltipId: "illustrator" },
  { name: "Figma", wrapper: "figma", icon: <FontAwesomeIcon icon={faFigma} />, tooltipId: "figma" },
  { name: "Hospitality", wrapper: "hospitality", icon: <FontAwesomeIcon icon={faUtensils} />, tooltipId: "hospitality" },
  { name: "human", wrapper: "", icon: <FontAwesomeIcon icon={faSmile} />, tooltipId: "" },
];

const myProjects = [
  { title: "21", img: "game21Img", linkTo: ROUTES.BJ },
  { title: "Scheduler", img: "schedulerImg", linkTo: ROUTES.SCHEDULER },
  { title: "Portfolio", img: "jsPortfolioImg", linkTo: ROUTES.PORTFOLIO },
  { title: "Assignment", img: "", linkTo: ROUTES.ASSIGNMENT },
  { title: "Vector", img: "", linkTo: ROUTES.VECTOR },
];


function Skills() {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)'
  });

  return (
    <div>
      <ModalNav isBgGray={false} />
      <div className={cx("container", { alignItemCenter: isMobile })}>
        <div id="mySkills">
          <h5>My Skills</h5>
          <div className="skills">
            {mySkills.map((skill, index) => (
              <span className={cx("skillItems tooltip", skill.wrapper)} key={index}>
                {skill.icon}
                <span className="tooltipText" id={skill.tooltipId}>{skill.name}</span>
              </span>
            ))}
          </div>
        </div>

        <div id="myWorks" className="mb-5">
          <h5>My Works</h5>
          <p></p>
          <div className="projects">
            {myProjects.map((project, index) => (
              // <Link to={project.linkTo} key={index}>
              <div className="projectItems" key={index}>
                <div className="projectImages" id={project.img}></div>
                <div className="projectDescription">
                  <h6>{project.title}</h6>
                </div>
              </div>
              // </Link>
            ))}
            <a href="https://github.com/yoniakabecky" rel="noopener noreferrer" target="_blank">
              <div className="projectItems" style={{ cursor: "pointer" }}>
                <div className="projectImages" id="octcatImg"></div>
                <div className="projectDescription">
                  <h6>My Github</h6>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
