import React from "react";
import "./Works.scss";

const works = () => {
  const projects = [
    {
      href: "https://burger-builder-bykalyyan.netlify.app/",
      class: "project__picture project__picture--1",
      stack: "REACT : SASS : FIREBASE",
      name: "Burger Builder",
      details:
        "A burger application where a user can dynamically build a burger add ingredients and then in the end also purchase it.",
    },
    {
      href: "https://smartbrain-kalyyan.netlify.app/",
      class: "project__picture project__picture--2",
      stack: "REACT : NODE : POSTGRESQL : HEROKU",
      name: "Smart Brain",
      details:
        "It is a webapp where you can submit image URLs and it will detect where the faces are in the given photo.",
    },
  ];

  const cards = projects.map((project) => {
    return (
      <div className="project">
        <a href={project.href} target="_blank" rel="noopener noreferrer">
          <div className={project.class}></div>
        </a>
        <div className="project__stack">{project.stack}</div>
        <h4 className="project__heading">{project.name}</h4>

        <div className="project__details">{project.details}</div>
      </div>
    );
  });

  return (
    <div className="works">
      <h1 className="works--heading">LATEST WORKS !</h1>
      <div className="works--cards">{cards}</div>
      <div className="works--view-more">
        <a href="/" class="more-projects-btn">
          View all&rarr;
        </a>
      </div>
    </div>
  );
};

export default works;
