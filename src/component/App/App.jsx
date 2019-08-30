import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './App.scss';

import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';


function App({ location }) {
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={800} classNames={location.pathname === "/" ? "fadeIn" : "slideIn"}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>

  );
}

export default withRouter(App);
