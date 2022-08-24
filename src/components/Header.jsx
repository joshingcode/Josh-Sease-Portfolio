import React from "react";
import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
      {/* <!-- Intro --> */}
      <div id="intro">
        <h1>
          Josh
          <br />
          Sease
        </h1>
        <p>a lil portfilio</p>
        <ul className="actions">
          <li>
            <a
              href="#header"
              className="button icon solid solo fa-arrow-down scrolly"
            >
              Continue
            </a>
          </li>
        </ul>
      </div>

      {/* <!-- Header --> */}
      <header id="header">
        <a href="index.html" className="logo">
          Josh Sease
        </a>
      </header>

      {/* <!-- Nav --> */}
      <nav id="nav">
        <ul className="links">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='projects'>Projects</Link>
          </li>

          <li className="active">
           <Link to="contact">Contact Me !</Link>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
