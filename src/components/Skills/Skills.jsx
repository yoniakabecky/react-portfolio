import React from "react";
import cx from "classnames";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import BounceContents from "../../animations/BounceContents";
import ModalNav from "../Layout/ModalNav";
import mySkills from "./mySkills";
import myWorks from "./myWorks";
import "./Skills.scss";

function Skills() {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  const arrowRef = React.useRef(null);

  const [arrowScroll, setArrowScroll] = React.useState(true);
  const [documentHeight, setDocumentHeight] = React.useState(0);
  const [screenHeight, setScreenHeight] = React.useState(0);
  const [yOffset, setYOffset] = React.useState(0);

  const handleScroll = React.useCallback(() => {
    setYOffset(window.pageYOffset);

    if (yOffset !== 0) {
      if (yOffset + screenHeight * 0.2 > documentHeight - screenHeight) {
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
  }, [handleScroll]);

  return (
    <div ref={arrowRef}>
      <ModalNav isBgGray={false} />

      <div className={cx("container", { alignItemCenter: isMobile })}>
        {arrowScroll && (
          <div className="scrollArrow">
            <FontAwesomeIcon icon={faAngleDown} className="icons" />
            <p>scroll</p>
          </div>
        )}

        <BounceContents id="mySkills">
          <h5>My Skills</h5>

          <div className="skills">
            {mySkills.map((skill, index) => (
              <span
                className={cx("skillItems tooltip", skill.wrapper)}
                key={index}
              >
                {skill.icon}
                <span className="tooltipText" id={skill.tooltipId}>
                  {skill.name}
                </span>
              </span>
            ))}
          </div>
        </BounceContents>

        <BounceContents id="myWorks" className="mb-5">
          <h5>
            My Works <span>(Click to See the Detail)</span>
          </h5>

          <div className="projects">
            {myWorks.map((project, index) => (
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

            <a
              href="https://github.com/yoniakabecky"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="projectItems" style={{ cursor: "pointer" }}>
                <div className="projectImages" id="octcatImg"></div>
                <div className="projectDescription">
                  <h6>My Github</h6>
                  <p>Jump to the page</p>
                </div>
              </div>
            </a>
          </div>
        </BounceContents>
      </div>
    </div>
  );
}

export default Skills;
