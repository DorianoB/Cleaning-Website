import Nav from "./nav.js";
import { Link } from "react-router-dom";
import homebound from "../images/homebound.png";

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="homebound" src={homebound} alt="Home Bound Image" />
          {/* <h1 className="title">Homebound Services</h1> */}
        </Link>

        <Nav />
      </div>
    </>
  );
}
export default Header;
