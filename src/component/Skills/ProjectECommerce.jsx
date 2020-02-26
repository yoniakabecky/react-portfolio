import React from "react";
import ProjectNav from "../Layout/ProjectNav";
import ProjectFooter from "../Layout/ProjectFooter";

import * as ROUTES from "../../constants/routes";

import "./Project.scss";
import TopPage from "../../resources/projects/eCommerce/eCommerceTop.jpg";
import SearchPage from "../../resources/projects/eCommerce/eCommerceSearch.jpg";
import CartPage from "../../resources/projects/eCommerce/eCommerceCart.jpg";

const ProjectECommerce = () => {
  return (
    <div>
      <ProjectNav />
      <div className="projectTopImage" id="eCommerceTop">
        <div className="projectTitle">
          <h2>E-Commerce Shopping Site</h2>
        </div>
      </div>
      <div className="projectContainer">
        <p>A simple and easy to update shopping site for my friend</p>
        <p>
          Skill: ReactJS, Context, Material-UI, Contentful, Netlify(hosting), PayPal(payment)
        </p>

        <ul className="projectLinks">
          <p>Links</p>
          <li className="red">
            <a href="https://macrameshop37.netlify.com/" rel="noopener noreferrer" target="_blank" className="pageLink">
              https://macrameshop37.netlify.com/
          </a>
          </li>
          <li className="red">
            <a href="https://github.com/yoniakabecky/react-shopping-site" rel="noopener noreferrer" target="_blank" className="pageLink">
              Github Repo
          </a>
          </li>
        </ul>

        <div className="projectImages">
          <img src={TopPage} alt="mock_eCommerce" rel="preload" />
          <img src={SearchPage} alt="search page" rel="preload" />
          <img src={CartPage} alt="cart page" rel="preload" />
        </div>
      </div>

      <ProjectFooter
        prev
        next
        prevLink={ROUTES.BJ}
        nextLink={ROUTES.ASSIGNMENT}
      />
    </div>
  );
};

export default ProjectECommerce;
