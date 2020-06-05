import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faGitAlt,
  faNodeJs,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPuzzlePiece,
  faMobileAlt,
  faSmile,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

import { ReactComponent as FirebaseIcon } from "../../resources/icons/firebase.svg";
import { ReactComponent as MuiIcon } from "../../resources/icons/mui.svg";
import { ReactComponent as ReduxIcon } from "../../resources/icons/redux.svg";

export default [
  {
    name: "HTML5",
    wrapper: "html",
    icon: <FontAwesomeIcon icon={faHtml5} />,
    tooltipId: "html",
  },
  {
    name: "CSS3",
    wrapper: "css",
    icon: <FontAwesomeIcon icon={faCss3} />,
    tooltipId: "css",
  },
  {
    name: "Sass",
    wrapper: "sass",
    icon: <FontAwesomeIcon icon={faSass} />,
    tooltipId: "sass",
  },
  {
    name: "JavaScript",
    wrapper: "js",
    icon: <FontAwesomeIcon icon={faJs} />,
    tooltipId: "js",
  },
  {
    name: "ReactJS",
    wrapper: "react",
    icon: <FontAwesomeIcon icon={faReact} />,
    tooltipId: "react",
  },
  {
    name: "Redux",
    wrapper: "redux",
    icon: <ReduxIcon id="reduxIcon" className="svgIcon" />,
    tooltipId: "redux",
  },
  {
    name: "Material-ui",
    wrapper: "mui",
    icon: <MuiIcon id="muiIcon" className="svgIcon" />,
    tooltipId: "mui",
  },
  {
    name: "Responsive Design",
    wrapper: "responsive",
    icon: <FontAwesomeIcon icon={faMobileAlt} />,
    tooltipId: "responsive",
  },
  {
    name: "Git",
    wrapper: "git",
    icon: <FontAwesomeIcon icon={faGitAlt} />,
    tooltipId: "git",
  },
  {
    name: "Firebase",
    wrapper: "firebase",
    icon: <FirebaseIcon id="firebaseIcon" className="svgIcon" />,
    tooltipId: "firebase",
  },
  {
    name: "NodeJS",
    wrapper: "nodejs",
    icon: <FontAwesomeIcon icon={faNodeJs} />,
    tooltipId: "nodejs",
  },
  {
    name: "Problem Solving",
    wrapper: "solving",
    icon: <FontAwesomeIcon icon={faPuzzlePiece} />,
    tooltipId: "solving",
  },
  {
    name: "Illustrator",
    wrapper: "illustrator",
    icon: "Ai",
    tooltipId: "illustrator",
  },
  {
    name: "Figma",
    wrapper: "figma",
    icon: <FontAwesomeIcon icon={faFigma} />,
    tooltipId: "figma",
  },
  {
    name: "Hospitality",
    wrapper: "hospitality",
    icon: <FontAwesomeIcon icon={faUtensils} />,
    tooltipId: "hospitality",
  },
  {
    name: "Happy!!",
    wrapper: "human",
    icon: <FontAwesomeIcon icon={faSmile} />,
    tooltipId: "human",
  },
];
