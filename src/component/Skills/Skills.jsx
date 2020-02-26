import React from 'react';
import ModalNav from '../Layout/ModalNav';
import { useMediaQuery } from 'react-responsive';
import cx from "classnames";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5, faCss3, faSass, faJs, faReact,
  faGitAlt, faNodeJs, faFigma,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPuzzlePiece, faMobileAlt, faSmile,
  faUtensils, faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

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
  { name: "Happy!!", wrapper: "human", icon: <FontAwesomeIcon icon={faSmile} />, tooltipId: "human" },
];

const myProjects = [
  { title: "21", subTitle: "Simple Card Game", img: "game21Img", linkTo: ROUTES.BJ },
  // { title: "Scheduler", subTitle: "Shift Manager", img: "schedulerImg", linkTo: ROUTES.SCHEDULER },
  { title: "E-Commerce", subTitle: "Shopping Site", img: "eCommerceImg", linkTo: ROUTES.E_COMMERCE },
  { title: "Assignment", subTitle: "Projects at school", img: "", linkTo: ROUTES.ASSIGNMENT },
  { title: "Portfolio", subTitle: "First Attempt", img: "jsPortfolioImg", linkTo: ROUTES.PORTFOLIO },
  { title: "Vector", subTitle: "Sticker Design", img: "vectorImg", linkTo: ROUTES.VECTOR },
];


function Skills() {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)'
  });

  const arrowRef = React.useRef(null);

  const [arrowScroll, setArrowScroll] = React.useState(true);
  const [documentHeight, setDocumentHeight] = React.useState(0);
  const [screenHeight, setScreenHeight] = React.useState(0);
  const [yOffset, setYOffset] = React.useState(0);

  const handleScroll = React.useCallback(() => {
    setYOffset(window.pageYOffset);

    if (yOffset !== 0) {
      if (yOffset + (screenHeight * .2) > documentHeight - screenHeight) {
        setArrowScroll(false);
      } else {
        setArrowScroll(true);
      }
    }
  }, [yOffset, documentHeight, screenHeight]);


  React.useEffect(() => {
    setDocumentHeight(arrowRef.current.scrollHeight);
    setScreenHeight(window.innerHeight);

    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll])

  return (
    <div ref={arrowRef}>
      <ModalNav isBgGray={false} />
      <div className={cx("container", { alignItemCenter: isMobile })}>

        {arrowScroll ?
          <div className="scrollArrow">
            <FontAwesomeIcon icon={faAngleDown} className="icons" />
            <p>scroll</p>
          </div>
          : null}

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
          <h5>My Works <span>(Click to See the Detail)</span> </h5>
          <div className="projects">
            {myProjects.map((project, index) => (
              <Link to={project.linkTo} key={index} rel="preload">
                <div className="projectItems" key={index}>
                  <div className="projectImages" id={project.img}></div>
                  <div className="projectDescription">
                    <h6>{project.title}</h6>
                    <p>{project.subTitle}</p>
                  </div>
                </div>
              </Link>
            ))}
            <a href="https://github.com/yoniakabecky" rel="noopener noreferrer" target="_blank">
              <div className="projectItems" style={{ cursor: "pointer" }}>
                <div className="projectImages" id="octcatImg"></div>
                <div className="projectDescription">
                  <h6>My Github</h6>
                  <p>Jump to the page</p>
                </div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div >
  );
}

export default Skills;
