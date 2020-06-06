import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, withRouter, useLocation } from "react-router-dom";

import PageTransition from "../../animations/PageTransition";
import Error404 from "../404/Error404";
import "./App.scss";
import pages from "./pages";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  // when the location changes, always scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={pathname}>
        {pages.map(([path, component, animation], i) => (
          <Route exact path={path} key={`component-${i}`}>
            <PageTransition variants={animation}>{component}</PageTransition>
          </Route>
        ))}

        <Route component={Error404} />
      </Switch>
    </AnimatePresence>
  );
}

export default withRouter(App);
