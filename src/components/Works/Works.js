import React from "react";
import "./Works.scss";

const works = () => {
  return (
    <div className="works">
      <h1 className="works--heading">LATEST WORKS !</h1>
      <div className="works--cards">
        <div className="project">
          <a
            href="https://burger-builder-bykalyyan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project__picture project__picture--1"></div>
          </a>

          <div className="project__stack">REACT : SASS : FIREBASE</div>
          <h4 className="project__heading">Burger Builder</h4>
          <div className="project__details">
            A burger application where a user can dynamically build a burger,
            add ingredients and then in the end also purchase it.
          </div>
        </div>
        <div className="project">
          <a
            href="https://smartbrain-kalyyan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project__picture project__picture--2"></div>
          </a>
          <div className="project__stack">
            REACT : NODE : POSTGRESQL : HEROKU
          </div>
          <h4 className="project__heading">Smart Brain</h4>

          <div className="project__details">
            It is a webapp where you can submit image URLs and it will detect
            where the faces are in the given photo.
          </div>
        </div>
      </div>
      <div className="works--view-more">
        <a href="/" class="more-projects-btn">
          View all&rarr;
        </a>
      </div>
    </div>
  );
};

export default works;
