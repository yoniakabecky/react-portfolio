import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './App.scss';

import * as ROUTES from '../../constants/routes';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
// import ProjectBJ from '../Skills/ProjectBJ';


function App({ location }) {
  const pathname = location.pathname;
  const transitionClassName = pathname === "/" ? "fadeIn" : pathname.startsWith("/project") ? "slideInRight" : "slideIn";

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={800} classNames={transitionClassName}>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.ABOUT} component={About} />
          <Route exact path={ROUTES.SKILLS} component={Skills} />
          <Route exact path={ROUTES.CONTACT} component={Contact} />
          {/* <Route exact path={ROUTES.BJ} component={ProjectBJ} />
          <Route exact path={ROUTES.SCHEDULER} component={ProjectBJ} />
          <Route exact path={ROUTES.PORTFOLIO} component={ProjectBJ} />
          <Route exact path={ROUTES.ASSIGNMENT} component={ProjectBJ} />
          <Route exact path={ROUTES.VECTOR} component={ProjectBJ} /> */}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(App);
