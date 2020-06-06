import React from "react";

import * as animation from "../../animations/animations";
import * as ROUTES from "../../constants/routes";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import ProjectAssignment from "../Skills/ProjectAssignment";
import ProjectBJ from "../Skills/ProjectBJ";
import ProjectECommerce from "../Skills/ProjectECommerce";
import ProjectPortfolio from "../Skills/ProjectPortfolio";
import ProjectScheduler from "../Skills/ProjectScheduler";
import ProjectVector from "../Skills/ProjectVector";

export default [
  [ROUTES.HOME, <Home />, animation.slideInFadeOut],
  [ROUTES.ABOUT, <About />, animation.slideInFadeOut],
  [ROUTES.SKILLS, <Skills />, animation.slideInFadeOut],
  [ROUTES.CONTACT, <Contact />, animation.slideInFadeOut],
  [ROUTES.BJ, <ProjectBJ />, animation.slideInFadeOut],
  [ROUTES.SCHEDULER, <ProjectScheduler />, animation.slideInFadeOut],
  [ROUTES.PORTFOLIO, <ProjectPortfolio />, animation.slideInFadeOut],
  [ROUTES.ASSIGNMENT, <ProjectAssignment />, animation.slideInFadeOut],
  [ROUTES.VECTOR, <ProjectVector />, animation.slideInFadeOut],
  [ROUTES.E_COMMERCE, <ProjectECommerce />, animation.slideInFadeOut],
];
