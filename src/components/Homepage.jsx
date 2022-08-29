import React from "react";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <div id="main">
        {/* <!-- Featured Post --> */}
        <article className="post featured">
          <header className="major">
            <span className="date">about me...</span>
            <h2></h2>
            <p>
              " Creative, detail-oriented, software engineer with a deep
              interest in cloud services. Proven track record of creating and
              implementing successful front and back end web applications.
              Looking to bring my skills to a tech company with global reach."
            </p>
          </header>
          {/* <a href="#" className="image main">
            <img src="" alt="TECH/PROFESSION PIC INSERT HERE" />
          </a>
          <ul className="actions special">
            <li>
              <Link to="projects" className="button">
                "Projects"
              </Link>
            </li>
          </ul> */}
        </article>

        {/* <!-- Posts --> */}
        <h2 style={{ textAlign: "center" }}>Technologies </h2>

        <section className="posts">
          <article>
            <header>
              <h2>
                <a href="#">HTML, CSS</a>
              </h2>
            </header>
            <a href="#" className="image fit">
              <img
                className="overlay-image"
                src="https://i.postimg.cc/Qtt5qLmf/Welcome-to-Paris.png"
                alt=""
              />
            </a>
            <p>
              My entry point into the tech industry was the build of this
              visitor information site for Paris, France.
              <br />
            </p>
            <span style={{ fontSize: "13px" }}>
              View more of my projects below.
            </span>
            <ul className="actions special">
              <li>
                <Link to="projects" className="button">
                  "Projects"
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <h2>
                <a href="#">JAVASCRIPT</a>
              </h2>
            </header>
            <a href="#" className="image fit">
              <img
                src="https://i.postimg.cc/vmKyBjPJ/Pic-of-the-Day.png"
                alt=""
              />
            </a>
            <p>
              Passion project for me was building a NASA Photo of the Day app,
              that generations the picture for the specified date and short
              description.{" "}
            </p>
            <span style={{ fontSize: "13px" }}>
              View more of my projects below.
            </span>

            <ul className="actions special">
              <li>
                <Link to="projects" className="button">
                  "Projects"
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <h2>
                <a href="#">React JS</a>
              </h2>
            </header>
            <a href="#" className="image fit">
              <img
                className="container-pic image overlay-image"
                src="https://i.postimg.cc/L4Lnf6Bx/Chick-Fil-A-1.png"
                alt=""
              />
            </a>
            <p>
              A fun project for me is redesigning a favorite website of mine.
              For me to cement my skills using the react framework.
            </p>
            <span style={{ fontSize: "13px" }}>
              View more of my projects below.
            </span>

            <ul className="actions special">
              <li>
                <Link to="projects" className="button">
                  "Projects"
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <h2>
                <a href="#">MySQL</a>
              </h2>
            </header>
            <a href="#" className="image fit">
              <img
                className="overlay-image"
                src="https://i.postimg.cc/nc9TqmS6/Josh-To-Do-s.png"
                alt=""
              />
            </a>
            <p>
              To better improve my time management, I developed an task tracker
              application (Josh ToDos) that allows me to create task, check
              task, change and delete a task using MySQL.
            </p>
            <span style={{ fontSize: "13px" }}>
              View more of my projects below.
            </span>
            <ul className="actions special">
              <li>
                <Link to="projects" className="button">
                  "Projects"
                </Link>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}

export default Homepage;
