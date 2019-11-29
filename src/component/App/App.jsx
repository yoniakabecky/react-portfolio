import React, { useEffect } from 'react';
import { Switch, Route, withRouter, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './App.scss';

import * as ROUTES from '../../constants/routes';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import ProjectVector from '../Skills/ProjectVector';
import ProjectAssignment from '../Skills/ProjectAssignment';
import ProjectBJ from '../Skills/ProjectBJ';
import ProjectPortfolio from '../Skills/ProjectPortfolio';
import ProjectScheduler from '../Skills/ProjectScheduler';
import Error404 from '../404/Error404';


function App() {
  const location = useLocation();
  const pathname = location.pathname;

  // when the location changes, always scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const transitionClassName = pathname === "/" ? "fadeIn" : pathname.startsWith("/project") ? "slideInRight" : "slideIn";

  return (
    <Route render={({ location }) => (
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={{ enter: 500, exit: 300 }} classNames={transitionClassName}>
          <Switch location={location}>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.ABOUT} component={About} />
            <Route exact path={ROUTES.SKILLS} component={Skills} />
            <Route exact path={ROUTES.CONTACT} component={Contact} />
            <Route exact path={ROUTES.BJ} component={ProjectBJ} />
            <Route exact path={ROUTES.SCHEDULER} component={ProjectScheduler} />
            <Route exact path={ROUTES.PORTFOLIO} component={ProjectPortfolio} />
            <Route exact path={ROUTES.ASSIGNMENT} component={ProjectAssignment} />
            <Route exact path={ROUTES.VECTOR} component={ProjectVector} />
            <Route component={Error404} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  );
}

export default withRouter(App);
