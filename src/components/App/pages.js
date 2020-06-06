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
  [ROUTES.HOME, <Home />, animation.fadeInFadeOut],
  [ROUTES.ABOUT, <About />, animation.slideInSlideOut],
  [ROUTES.SKILLS, <Skills />, animation.slideInSlideOut],
  [ROUTES.CONTACT, <Contact />, animation.slideInSlideOut],
  [ROUTES.BJ, <ProjectBJ />, animation.slideInSlideOutLeft],
  [ROUTES.SCHEDULER, <ProjectScheduler />, animation.slideInSlideOutLeft],
  [ROUTES.PORTFOLIO, <ProjectPortfolio />, animation.slideInSlideOutLeft],
  [ROUTES.ASSIGNMENT, <ProjectAssignment />, animation.slideInSlideOutLeft],
  [ROUTES.VECTOR, <ProjectVector />, animation.slideInSlideOutLeft],
  [ROUTES.E_COMMERCE, <ProjectECommerce />, animation.slideInSlideOutLeft],
];
