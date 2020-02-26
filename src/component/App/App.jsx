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
import ProjectECommerce from '../Skills/ProjectECommerce';

const routes = [
  { path: ROUTES.HOME, component: Home },
  { path: ROUTES.ABOUT, component: About },
  { path: ROUTES.SKILLS, component: Skills },
  { path: ROUTES.CONTACT, component: Contact },
  { path: ROUTES.BJ, component: ProjectBJ },
  { path: ROUTES.SCHEDULER, component: ProjectScheduler },
  { path: ROUTES.PORTFOLIO, component: ProjectPortfolio },
  { path: ROUTES.ASSIGNMENT, component: ProjectAssignment },
  { path: ROUTES.VECTOR, component: ProjectVector },
  { path: ROUTES.E_COMMERCE, component: ProjectECommerce }
];

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  // when the location changes, always scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const transitionClassName = pathname === "/" ? "fadeIn" : pathname.startsWith("/project") ? "slideInRight" : "slideIn";

  return (
    <Route render={({ location, match }) => (
      <TransitionGroup>
        <CSSTransition
          in={match != null}
          key={location.key}
          timeout={500}
          classNames={transitionClassName}
          unmountOnExit
        >
          <Switch location={location}>
            {routes.map(({ path, component }) => (

              <Route exact path={path} component={component} />
            ))}
            <Route component={Error404} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  );
}

export default withRouter(App);
