import React from "react";

function Hero() {
  return (
    <React.Fragment>
      <section className="hero is-halfheight has-text-centered">
        <div className="hero-body">
          <div className="columns is-centered has-centered-text">
            <div className="column is-6">
              <p className="title is-1 is-spaced">Hi there, my name is Suzanne!</p>
              <p className="subtitle">Aspiring Full Stack Web Developer</p>
              <p className="pb-5">
              I have always worked and thrived in a team environment. I excel at multi-tasking and staying organized while keeping a level head under pressure. 
              </p>
              <a href="/assets/2ndWordpdfResume22" download="Resume">
                <button className="button is-white is-rounded mt-1">
                  Download My Resume
                </button>
              </a>
              <a href="mailto:suzanne.radlein@gmail.com" target="_blank">
                <button className="button is-white is-rounded mt-1 ml-2">
                  Send an Email
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Hero;