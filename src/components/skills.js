import React, { Component } from "react"
import Caption from "./caption"
import "./skills.css"

const Skills = ({ id }) => {
  return (
    <section id={id} className="aligner">
      <div className="aligner__item">
        <Caption>
          <h1
            style={{
              transitionDelay: "400ms",
            }}
          >
            Skills & Projects.
          </h1>
          <p />
          <p />
          <h2
            style={{
              transitionDelay: "500ms",
            }}
          >
            {" "}
            Here is few <span>technologies</span> I've been working with
          </h2>
          <ul className="skills--grid">
            <li className="skill">JavaScript (ES6+)</li>
            <li className="skill">HTML</li>
            <li className="skill">CSS3/Sass</li>
            <li className="skill">PHP</li>
            <li className="skill">React</li>
            <li className="skill">Preact</li>
            <li className="skill">Redux</li>
            <li className="skill">Gatsby</li>
            <li className="skill">Jquery</li>
            <li className="skill">NodeJS</li>
            <li className="skill">Webpack</li>
            <li className="skill">Babel</li>
            <li className="skill">npm</li>
            <li className="skill">Git</li>
            <li className="skill">Jira</li>
            <li className="skill">Jasmine</li>
            <li className="skill">Jest</li>
            <li className="skill">Enzyme</li>
          </ul>
          <p />
          <p />
        </Caption>
      </div>
    </section>
  )
}

export default Skills
