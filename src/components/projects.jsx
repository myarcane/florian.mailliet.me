import React from "react"
import projects from "../data/projects.json"
import learningSkills from "../data/learning-skills.json"
import masteringSkills from "../data/mastering-skills.json"

export const Projects = ({ incrementDelay }) => {
  return (
    <>
      <h2
        style={{
          transitionDelay: "2500ms",
        }}
      >
        Or simple things built for <span>fun</span>
      </h2>
      <div>
        <ul className="skills--grid">
          {projects.map(({ link, title }, id) => {
            return (
              <>
                <a
                  href={link}
                  key={`project-${id.toString()}`}
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  onTouchEnd={() => {}}
                >
                  <li
                    className="project"
                    style={{
                      transitionDelay: `${(masteringSkills.length +
                        learningSkills.length +
                        id) *
                        incrementDelay +
                        1400}ms`,
                    }}
                  >
                    <span>{title}</span>
                  </li>
                </a>
              </>
            )
          })}
        </ul>
      </div>
      <p />
      <p />
      <p
        style={{
          transitionDelay: "2600ms",
        }}
      >
        You can check my github, linkedin, download my resume or send me an
        email
      </p>
      <p
        style={{
          transitionDelay: "3000ms",
        }}
      >
        <a
          href="https://github.com/myarcane"
          target="_blank"
          rel="noopener noreferrer nofollow"
          onTouchEnd={() => {}}
        >
          <i className="fa fa-2x fa-fw fa-github" aria-hidden="true" />
        </a>{" "}
        +
        <a
          href="https://fr.linkedin.com/in/florianmailliet"
          target="_blank"
          rel="noopener noreferrer nofollow"
          onTouchEnd={() => {}}
        >
          <i className="fa fa-2x fa-fw fa-linkedin" />
        </a>{" "}
        +
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer nofollow"
          onTouchEnd={() => {}}
        >
          <i className="fa fa-2x fa-fw fa-download" />
        </a>{" "}
        +
        <a href="mailto:florian@mailliet.me">
          <i className="fa fa-2x fa-fw fa fa-envelope" />
        </a>{" "}
      </p>
    </>
  )
}
