import aboutImage from "../../assets/about/CLS.jpg";
import React from 'react';

function About() {
  return (
    <section>
      <h1 id="about">About Me</h1>
      <img src={aboutImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;