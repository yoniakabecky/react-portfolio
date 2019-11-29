import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import cx from "classnames";
import { TransitionMotion, spring } from 'react-motion';

import './Home.scss';
import * as ROUTES from '../../constants/routes';

// for React Motion
const leavingSpringConfig = { stiffness: 60, damping: 15 };


function Home() {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)'
  });

  const MainContents = () => (
    <div id="container">
      <div className={cx("container", { justifyCenter: isMobile, alignItemCenter: isMobile })} style={{ height: "100vh" }}>
        <div className={cx({ left: !isMobile, nameWrapper: !isMobile, textAlignCenter: isMobile })}>
          <h1 id="myName" className="red font-accent">Yoni</h1>
          <h3 id="myPosition" className="font-accent">A Front End Developer</h3>
        </div>
        <ul className={cx("linkWrapper", { right: !isMobile })}>
          <li>
            <Link to={ROUTES.ABOUT} className="links">Who I Am?</Link>
          </li>
          <li>
            <Link to={ROUTES.SKILLS} className="links">What I Do?</Link>
          </li>
          <li>
            <Link to={ROUTES.CONTACT} className="links">Wanna Chat?</Link>
          </li>
        </ul>
      </div>
    </div>
  );


  // React Motion: Water Ripples
  const [state, setState] = React.useState({ mouse: [], now: 't' + 0 })

  const handleMouseMove = ({ pageX, pageY }) => {
    setState({
      mouse: [pageX - 25, pageY - 25],
      now: 't' + Date.now(),
    });
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    handleMouseMove(e.touches[0]);
  };

  const willLeave = (styleCell) => {
    return {
      ...styleCell.style,
      opacity: spring(0, leavingSpringConfig),
      scale: spring(2, leavingSpringConfig),
    };
  };


  const { mouse: [mouseX, mouseY], now } = state;

  const styles = mouseX == null ? [] : [{
    key: now,
    style: {
      opacity: spring(1),
      scale: spring(0),
      x: spring(mouseX),
      y: spring(mouseY),
      zIndex: 10,
    }
  }];

  return (
    <TransitionMotion willLeave={willLeave} styles={styles}>
      {circles =>
        <div
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="reactMotion">
          {circles.map(({ key, style: { opacity, scale, x, y } }) =>
            <div
              key={key}
              className="reactMotionBall"
              style={{
                opacity: opacity,
                scale: scale,
                transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                WebkitTransform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
              }} />
          )}
          <MainContents />
        </div>
      }
    </TransitionMotion>
  );
}

export default Home;
