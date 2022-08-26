import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const link = <FontAwesomeIcon icon={faLinkedin} />;
  const git = <FontAwesomeIcon icon={faGithub} />;
  const twit = <FontAwesomeIcon icon={faTwitter} />;

  return (
    <>
      {/* <footer>
        <div className="pagination">
          <a href="#" className="page active">
            1
          </a>
          <a href="#" className="page">
            2
          </a>
          <a href="#" className="page">
            3
          </a>
          <span className="extra">&hellip;</span>
          <a href="#" className="page">
            8
          </a>
          <a href="#" className="page">
            9
          </a>
          <a href="#" className="page">
            10
          </a>
          <a href="#" className="next">
            Next
          </a>
        </div>
      </footer> */}

      <footer id="footer">
        <section>
          <form method="post" action="#">
            <div className="fields">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="3"></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </section>
        <section className="split contact">
          <section>
            <h3>Email</h3>
            <p>
              <a href="#">joshsease96@gmail.com</a>
            </p>
          </section>
          <section>
            <h3>Social</h3>
            <ul className="icons alt">
              <li>{link}</li>
              <li>{git}</li>
              <li>{twit}</li>
            </ul>
          </section>
        </section>
      </footer>

      <div id="copyright">
        <ul>
          <li>&copy; 2023 Sease Holdings, LLC</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
