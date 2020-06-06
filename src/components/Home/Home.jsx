import React from "react";
import cx from "classnames";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import "./Home.scss";

function Home() {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  return (
    <div
      className={cx("container", {
        justifyCenter: isMobile,
        alignItemCenter: isMobile,
      })}
      style={{ height: "100vh" }}
    >
      <div
        className={cx({
          left: !isMobile,
          nameWrapper: !isMobile,
          textAlignCenter: isMobile,
        })}
      >
        <h1 id="myName" className="red font-accent">
          Yoni
        </h1>
        <h3 id="myPosition" className="font-accent">
          A Front End Developer
        </h3>
      </div>

      <ul className={cx("linkWrapper", { right: !isMobile })}>
        <li>
          <Link to={ROUTES.ABOUT} className="links">
            Who I Am?
          </Link>
        </li>
        <li>
          <Link to={ROUTES.SKILLS} className="links">
            What I Do?
          </Link>
        </li>
        <li>
          <Link to={ROUTES.CONTACT} className="links">
            Wanna Chat?
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
