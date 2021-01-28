import React, { useLayoutEffect, useRef, useState } from "react";
import logo from "../media/logo-light.svg";
import { Link, useLocation } from "react-router-dom";
import "../css/Nav.css";

const Nav = ({ getBackground, locations, buttons }) => {
  const [navOpen, setNavOpen] = useState(false);
  const backgroundColor = getBackground(useLocation().pathname);

  const buttonColor =
    useLocation().pathname === "/" ? "btn-primary" : "btn-dark";

  const backgroundHeight = navOpen ? 'show-background' : 'hide-background';

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${backgroundColor}`}>
      <div id='nav-background' className={`bg-primary collapsing ${backgroundHeight}`}></div>
      <div className="container-fluid px-4">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" height="30" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="ms-auto navbar-nav" id="right-nav">
            {locations.map((location) => (
              <li className="nav-item" key={location.href}>
                <Link to={location.href} className="nav-link">
                  {location.name}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <span className="m-2"></span>
            </li>
            {buttons.map((button) => (
              <>
                <li className="nav-item">
                  <span className="m-2"></span>
                </li>
                <li className="nav-item" key={button.content}>
                  <button
                    className={`btn ${button.color || buttonColor}`}
                    type="button"
                    onClick={button.onClick}
                  >
                    {button.content}
                  </button>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
