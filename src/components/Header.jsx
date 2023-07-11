import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="header">
      <h1 className="header-title">
        <Link to="/" className="header-link">
          Smart
          <br />
          Farming
        </Link>
      </h1>
      <div className="hamburger">
        <FaBars size={30} onClick={() => setOpen(!open)} />
      </div>
      <div className="header-navs">
        <Link to="/" className="header-nav">
          Home
        </Link>
        <Link to="/community" className="header-nav">
          Community
        </Link>
        <Link to="/about" className="header-nav">
          About
        </Link>
        <Link to="/contact" className="header-nav">
          Contact
        </Link>
      </div>
      {open && (
        <div className="navsMobi">
          <div className="header-navs-mobi">
            <Link to="/" className="header-nav" onClick={() => setOpen(!open)}>
              Home
            </Link>
            <Link
              to="/community"
              className="header-nav"
              onClick={() => setOpen(!open)}
            >
              Community
            </Link>
            <Link
              to="/about"
              className="header-nav"
              onClick={() => setOpen(!open)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="header-nav"
              onClick={() => setOpen(!open)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
