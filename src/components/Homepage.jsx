import React from "react";
import {Link} from 'react-router-dom';
function Homepage() {
  return (
    <>
      <div id="main">
        {/* <!-- Featured Post --> */}
        <article className="post featured">
          <header className="major">
            <span className="date">"about me"</span>
            <h2>
              <a href="#">about me section</a>
            </h2>
            <p>
              full stack webdev....... love solving problems.....enjoy
              collaborating.....
            </p>
          </header>
          <a href="#" className="image main">
            <img src="" alt="TECH/PROFESSION PIC INSERT HERE" />
          </a>
          <ul className="actions special">
            <li>
            <Link to='projects' className="button">"Projects"</Link>
            </li>
          </ul>
        </article>

        {/* <!-- Posts --> */}
        <h2 style={{ textAlign: "center" }}>Technolgies </h2>
        
        
        <section className="posts">
          <article>
            <header>
              <h2>
                <a href="#">HTML, CSS</a>
              </h2>
            </header>
            <a href="#" className="image fit">
              <img src="images/pic02.jpg" alt="" />
            </a>
            <p>
              My entry point into the tech industry was the build of this visitor information site for Paris, France.<br/><span style={{fontSize:'13px'}}>View more of my projects below.</span>
            </p>
            <ul className="actions special">
              <li>
              <Link to='projects' className="button">"Projects"</Link>
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
              <img src="images/pic02.jpg" alt="" />
            </a>
            <p>
              Passion project for me was building a NASA Photo of the Day app, that generations the picture for the specified date and short description. <br/><span style={{fontSize:'13px'}}>View more of my projects below.</span>
            </p>
            <ul className="actions special">
              <li>
              <Link to='projects' className="button">"Projects"</Link>
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
              <img src="images/pic02.jpg" alt="" />
            </a>
            <p>
            
            </p>
            <ul className="actions special">
              <li>
              <Link to='projects' className="button">"Projects"</Link>
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
              <img src="images/pic02.jpg" alt="" />
            </a>
            <p>
             To better improve my time management, I developed an task tracker application (Josh ToDos) that allows me to create task, check task, change and delete a task using MySQL. 
            </p>
            <ul className="actions special">
              <li>
              <Link to='projects' className="button">"Projects"</Link>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}

export default Homepage;
