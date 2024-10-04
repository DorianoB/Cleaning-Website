import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar">
        <span id="current">
          <Link to="/about">About us</Link>
        </span>
        <span className="dropdown">
          <Link className="dropdown">Services</Link>
          <div className="dropdown-content">
            {<Link to="/cleaningServices">Cleaning services</Link>}
            {<Link to="/propertyManagement">Property management</Link>}
          </div>
        </span>
        <span>
          <Link to="/reviews">Reviews</Link>
        </span>
        <span>
          {/* <Link to="#contact">Contact</Link> */}
          <a href="#contact">Contact</a>
        </span>
        <strong>
          <span className="quote">
            <Link to="/quote">Get a Quote</Link>
          </span>
        </strong>
      </nav>
    </>
  );
}
export default Nav;
