import React from "react"
import Caption from "./caption"
import "./skills.css"
import skills from "../data/skills.json"
import projects from "../data/projects"

const Skills = ({ id }) => {
  const skillItems = []
  let transitionDelay = 800

  skills.map((skill, id) => {
    skillItems.push(
      <li
        key={id.toString()}
        className="skill"
        style={{ transitionDelay: `${transitionDelay}ms` }}
      >
        {skill}
      </li>
    )
    transitionDelay += 80
  })

  const projectItems = []
  projects.map((project, id) => {
    projectItems.push(
      <a
        href={project.link}
        key={id.toString()}
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
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
          <p />
          <p />
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
