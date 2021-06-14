import React from "react";

function AboutMe() {
  return (
    <React.Fragment>
      <section className="section" id="aboutMe">
        <div className="container">
          <h2 className="title">About Me</h2>
          <div className="columns pt-5 mt-5">
            <div className="column is-4">
              <div className="image">
                <img
                  className="is-rounded"
                  src="/assets/images/sue.jpg"
                  alt="headshot"
                  id="headshot"
                />
              </div>
            </div>
            <div className="column"></div>
            <div className="column is-7">
              <p className="pb-5">
                My name is Suzanne Radlein. I live in Stamford, Connecticut, with my husband and a precocious four year old that keeps me on my toes.
                For most of my adult life I've worked in the Restaurant Industry, I started in the business as a waitress and years later when it ended I was the General Manager of a bustling downtown restaurant. 
                I have always worked and thrived in a team environment. I excel at multi-tasking and staying organized while keeping a level head under pressure. Technology is the future and becoming a web developer puts me in the middle of that growth. I am excited about the possibilities and the fact that there is always something new to learn. 
                Over the past few months I have been attending a Full Stack Web Development Bootcamp certified by the University of Connecticut. I have since then developed a working knowledge of HTML, CSS, JavaScript, JQuery, Node.js, MySql, MongoDb and React.
            </p>
              
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AboutMe;