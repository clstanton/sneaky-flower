import React from 'react';
// import Modal from '../Modal';
// import portfolioImage from "../../assets/projects";

function Portfolio() {
    return (
      <section>
        <h1 id="portfolio">Portfolio</h1>
        <div className="flex-row">
          <img src={require(`../../assets/projects/run-buddy.jpg`)} className="img-thumbnail mx-1" alt="run-buddy" />
          <img src={require(`../../assets/projects/updog.jpg`)} className="img-thumbnail mx-1" alt="updog" />
          <img src={require(`../../assets/projects/vacation-planner.jpg`)} className="img-thumbnail mx-1" alt="vacation planner" />
        </div>
      </section>
    );
  }

export default Portfolio;