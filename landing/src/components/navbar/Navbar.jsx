import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="navbar-logo">
        <a href="/home">
        <img src={logo} alt="Loop of Infinity" className="logo-image" />
        </a>
      </div>

      <ul className="navbar-links">
        {/* <li>
          <a href="#">How it works</a>
        </li> */}
        <li>
          <a href="/roadmap">Roadmap</a>
        </li>
        <li>
          <a href="/tokonomics">Tokonomics</a>
        </li>
        <li>
          <a href="https://ten-ai-consulting-labs.vercel.app">Ten AI Consulting</a>
        </li>
        {/* <li>
          <a href="#white-paper">Ten Mentors</a>
        </li> */}
        <li>
          <a href="/about">About Us</a>
        </li>
        {/* <li>
          <a href="#stake">Stake</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;


