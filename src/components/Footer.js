import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer className="section has-text-centered" id="social">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title is-size-4-touch">Contact Me</h1>
            </div>
          </div>
          <div className="columns is-mobile is-centered">
            <div className="column is-2 is-4-mobile">
              <a
                href="https://www.linkedin.com/in/suzanne-radlein-6bb09353"
                target="_blank"
                rel="noopener"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="column is-2">
              <a
                href="https://github.com/srad25"
                target="_blank"
                rel="noopener"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="column is-2">
              <a
                href="mailto:suzanne.radlein@gmail.com"
                target="_blank"
                rel="noopener"
              >
                <i className="far fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;