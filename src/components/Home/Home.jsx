import React from "react";
import cx from "classnames";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import { homePageMenu, homePageName } from "../../animations/animations";
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
      <motion.div
        className={cx({
          left: !isMobile,
          nameWrapper: !isMobile,
          textAlignCenter: isMobile,
        })}
        variants={homePageName}
      >
        <h1 id="myName" className="red font-accent">
          Yoni
        </h1>
        <h3 id="myPosition" className="font-accent">
          A Front End Developer
        </h3>
      </motion.div>

      <ul className={cx("linkWrapper", { right: !isMobile })}>
        <motion.li variants={homePageMenu} custom={1}>
          <Link to={ROUTES.ABOUT} className="links">
            Who I Am?
          </Link>
        </motion.li>

        <motion.li variants={homePageMenu} custom={2}>
          <Link to={ROUTES.SKILLS} className="links">
            What I Do?
          </Link>
        </motion.li>

        <motion.li variants={homePageMenu} custom={3}>
          <Link to={ROUTES.CONTACT} className="links">
            Wanna Chat?
          </Link>
        </motion.li>
      </ul>
    </div>
  );
}

export default Home;
