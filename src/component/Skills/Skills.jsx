import React from 'react';
import ModalNav from '../ModalNav/ModalNav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faSass, faJs, faReact, faGitAlt, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faLaptop, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

import './Skills.scss';

function Skills() {
  return (
    <div>
      <ModalNav />
      <div className="container">
        <div className="left">
          <div id="webSkills" >
            <h6>Web Development</h6>
            <div className="skills">
              <input type="checkbox" href="#" className="skillOpen" name="webSkillOpen" id="webSkillOpen" />
              <label className="skillOpenBtn tooltip" htmlFor="webSkillOpen">
                <FontAwesomeIcon icon={faCode} />
              </label>
              <span className="list-item tooltip html "><FontAwesomeIcon icon={faHtml5} /><span className="tooltipText" id="html">HTML5</span></span>
              <span className="list-item tooltip css"><FontAwesomeIcon icon={faCss3} /><span className="tooltipText" id="css">CSS3</span></span>
              <span className="list-item tooltip sass"><FontAwesomeIcon icon={faSass} /><span className="tooltipText" id="sass">Sass</span></span>
              <span className="list-item tooltip js"><FontAwesomeIcon icon={faJs} /><span className="tooltipText" id="js">JavaScript</span></span>
              <span className="list-item tooltip react"><FontAwesomeIcon icon={faReact} /><span className="tooltipText" id="react">ReactJS</span></span>
            </div>
          </div>
          <div id="otherSkills">
            <h6>Other</h6>
            <div className="skills">
              <input type="checkbox" href="#" className="skillOpen" name="otherSkillOpen" id="otherSkillOpen" />
              <label className="skillOpenBtn" htmlFor="otherSkillOpen">
                <FontAwesomeIcon icon={faLaptop} />
              </label>
              <span className="list-item tooltip git"><FontAwesomeIcon icon={faGitAlt} /><span className="tooltipText" id="git">Git</span></span>
              <span className="list-item tooltip firebase">FB<span className="tooltipText" id="firebase">Firebase</span></span>
              <span className="list-item tooltip nodejs"><FontAwesomeIcon icon={faNodeJs} /><span className="tooltipText" id="nodejs">NodeJS (maybe)</span></span>
              <span className="list-item tooltip illustrator">Ai<span className="tooltipText" id="illustrator">Illustrator</span></span>
              <span className="list-item tooltip solving"><FontAwesomeIcon icon={faPuzzlePiece} /><span className="tooltipText" id="solving">Problem Solving</span></span>
            </div>
          </div>
        </div>
        <div className="right github-link">
          <a href="https://github.com/yoniakabecky" rel="noopener noreferrer" target="_blank" className="github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>

  );
}

export default Skills;