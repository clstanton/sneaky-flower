import React from 'react';
import aboutImage from "../../assets/about/CLS.jpg";

function About() {
  return (
    <section>
      <h1 id="about">About Me</h1>
      <img src={aboutImage} className="my-2" style={{ width: "10%" }} alt="cover" />
      <p>Ea magna dolore dolore et gubergren, tempor ea no et amet amet diam, elitr amet et amet aliquyam duo rebum sed elitr. Ea dolores aliquyam amet rebum elitr ut sed tempor, eos sed justo duo consetetur ea stet amet dolor amet, duo et dolor lorem vero dolor eos ea no. Aliquyam kasd diam amet ut sadipscing dolor. Magna takimata et duo stet ipsum sit dolores eos tempor. Gubergren dolore kasd magna sadipscing dolor clita. Ipsum takimata invidunt gubergren ut et vero labore dolore, vero labore lorem rebum vero sadipscing dolor invidunt et sanctus. Justo ipsum elitr rebum stet eirmod sit.</p>
    </section>
  );
}

export default About;