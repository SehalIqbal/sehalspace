import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <nav className="navbar header-nav navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-between align-items-center">

          {/* Brand */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <h1 className="m-0 fw-bold" style={{ color: "#22c55e" }}>
              Sehal Iqbal
            </h1>
          </Link>

          {/* Menu — no hamburger, always visible */}
          <div className="navbar-collapse show" id="navbar-collapse-toggle">
            <ul className="navbar-nav ms-auto d-flex align-items-center gap-4 mb-0">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/skills" className="nav-link">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
