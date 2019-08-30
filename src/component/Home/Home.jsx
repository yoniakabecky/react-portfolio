import React from 'react';
import { Link } from 'react-router-dom';

// import '../App/App.scss';
import './Home.scss';

function Home() {
  return (
    <div className="container" id="homeContainer" style={{ height: "100vh" }}>
      <div className="left name_wrapper">
        <h1 id="myName" className="red font_accent">Yoni</h1>
        <h5 className="font_accent">A Front End Developer</h5>
      </div>
      <ul className="right link-wrapper">
        <li>
          <Link to="/about" className="links">Who I Am</Link>
        </li>
        <li>
          <Link to="/skills" className="links">What I Can</Link>
        </li>
        <li>
          <Link to="/contact" className="links">Let's Talk</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;