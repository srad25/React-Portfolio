import React from "react";

function PortfolioCard(props) {
  return (
    <React.Fragment>
      <div className="column is-4">
        <div className="card">
          <div className="card-header">
            <p className="card-header-title">{props.title}</p>
          </div>
          <div className="card-image">
            <figure className="image is-4by3">
              <a href={props.deployed} target="_blank" rel="noreferrer">
                <img src={props.image} alt="Project Image"/>
              </a>
            </figure>
          </div>
          <div className="card-content">
            <div className="content">{props.description}</div>
          </div>
          <div className="card-footer">
            <div className="card-footer-item">
              <a href={props.deployed} target="_blank" rel="noreferrer"
              >
                <i className="fas fa-play-circle"></i>
              </a>
            </div>
            <div className="card-footer-item">
              <a href={props.github} target="_blank" rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PortfolioCard;