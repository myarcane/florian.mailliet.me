import React, { Component } from "react"
import Caption from "./caption"
import "./skills.css"

const Skills = ({ id }) => {
  const skills = [
    "JavaScript (ES6+)",
    "HTML",
    "CSS3/Sass",
    "PHP",
    "React",
    "Preact",
    "Redux",
    "Jasmine",
    "Jest",
    "Enzyme",
    "NodeJS",
    "Webpack",
    "Babel",
    "npm",
    "Git",
    "Jira",
  ]

  const projects = [
    {
      title: "easy-pr",
      link: "https://github.com/myarcane/easy-pr",
    },
  ]

  const skillItems = []
  let transitionDelay = 800

  skills.map(skill => {
    skillItems.push(
      <li className="skill" style={{ transitionDelay: `${transitionDelay}ms` }}>
        {skill}
      </li>
    )
    transitionDelay += 80
  })

  const projectItems = []
  projects.map(project => {
    projectItems.push(
      <a href={project.link}>
        <li
          className="project"
          style={{ transitionDelay: `${transitionDelay}ms` }}
        >
          {project.title}
        </li>
      </a>
    )
    transitionDelay += 200
  })

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
            Here is few <span>technologies</span> I've been working with
          </h2>
          <ul className="skills--grid">{skillItems}</ul>
          <h2
            style={{
              transitionDelay: `${transitionDelay}ms`,
            }}
          >
            And simple things <span>built</span> lately for the fun
          </h2>
          <ul className="skills--grid">{projectItems}</ul>
          <p />
          <p />
        </Caption>
      </div>
    </section>
  )
}

export default Skills
