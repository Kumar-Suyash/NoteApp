import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <Link
            to="/"
            className={`navbar-link ${location.pathname === "/" ? "navbar-link-active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/notes"
            className={`navbar-link ${location.pathname === "/notes" ? "navbar-link-active" : ""}`}
          >
            Notes
          </Link>
          <Link
            to="/create"
            className={`navbar-link ${location.pathname === "/create" ? "navbar-link-active" : ""}`}
          >
            Create Note
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
