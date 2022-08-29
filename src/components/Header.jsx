import React from "react";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
function Header() {

    const arrowDown= <FontAwesomeIcon  className="icon button solid solo scrolly" icon={faArrowDown} />
  return (
    <>
      {/* <!-- Intro --> */}
      <div id="intro" className="header-img">
        <h1>
          <img src="https://i.postimg.cc/TPTX24z9/default-monochrome.png" />
          
        </h1>
        <p>Software Engineer</p>
       
       
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>

          <li>
            <Link to="contact">Contact Me!</Link>
          </li>
        </ul>
        {/* <ul className="icons">
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
        </ul> */}
      </nav>
    </>
  );
}

export default Header;
