import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import cx from "classnames";

import './Home.scss';

function Home() {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)'
  });

  return (
    <div className={cx("container", { justifyCenter: isMobile, alignItemCenter: isMobile })} style={{ height: "100vh" }}>
      <div className={cx({ left: !isMobile, nameWrapper: !isMobile, textAlignCenter: isMobile })}>
        <h1 id="myName" className="red font-accent">Yoni</h1>
        <h3 id="myPosition" className="font-accent">A Front End Developer</h3>
      </div>
      <ul className={cx("linkWrapper", { right: !isMobile })}>
        <li>
          <Link to="/about" className="links">Who I Am</Link>
        </li>
        <li>
          <Link to="/skills" className="links">What I Do</Link>
        </li>
        <li>
          <Link to="/contact" className="links">Let's Talk</Link>
        </li>
      </ul>
    </div >
  );
}

export default Home;