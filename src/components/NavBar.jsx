// src/components/NavBar.js
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <nav role="navigation">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/directors">Directors</NavLink>
        <NavLink className="nav-link" to="/actors">Actors</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
