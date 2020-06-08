import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./ModalNav.scss";

const ProjectFooter = ({ prev, next, prevLink, nextLink }) => {
  return (
    <Fragment>
      {prev && (
        <Link to={prevLink} className="projectFooter arrowPrev">
          <FontAwesomeIcon icon={faChevronLeft} className="footerIcons" />
          prev project
        </Link>
      )}

      {next && (
        <Link to={nextLink} className="projectFooter arrowNext">
          next project
          <FontAwesomeIcon icon={faChevronRight} className="footerIcons" />
        </Link>
      )}
    </Fragment>
  );
};

export default ProjectFooter;
