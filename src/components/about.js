import React, { Component } from "react"
import Caption from "./caption"
import "./about.css"
import "./skills.css"
import { GatsbyImage } from "gatsby-plugin-image"
import skills from "../data/skills.json"
import projects from "../data/projects.json"

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      skillsAndProjects: [],
    }

    let transitionDelay = 1000
    skills.forEach((skill, id) => {
      this.state.skillsAndProjects.push(
        <li
          key={`skill-${id.toString()}`}
          className="skill"
          style={{ transitionDelay: `${transitionDelay}ms` }}
        >
          {skill}
        </li>
      )
      transitionDelay += 80
    })

    projects.forEach((project, id) => {
      this.state.skillsAndProjects.push(
        <a
          href={project.link}
          key={`project-${id.toString()}`}
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
  }

  render() {
    const { id, data } = this.props
    const { skillsAndProjects } = this.state

    return (
      <section id={id} className="aligner">
        <div className="aligner__item">
          <Caption>
            <div
              className="image-wrapper"
              style={{
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <div className="image-cover">
                <GatsbyImage
                  alt=""
                  image={data.profileImage.childImageSharp.gatsbyImageData}
                  className="image-cover__item"
                />
              </div>
            </div>
          </Caption>
          <p />
          <Caption>
            <h2
              style={{
                transitionDelay: "500ms",
              }}
            >
              My name is <span>Florian Mailliet.</span>
            </h2>
            <p
              style={{
                transitionDelay: "600ms",
              }}
            >
              I'm a <span>web developer</span> based in the Toronto area.
            </p>
            <p
              style={{
                transitionDelay: "650ms",
              }}
            >
              <span>Early 2023</span>, I became a new canadian permanent
              resident 🇨🇦. Prior to that, I was based in the south of France 🇫🇷
              and worked @
              <a
                href="https://www.dailymotion.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>dailymotion </b>
              </a>
              for 8+ years as a <span>Senior Frontend Engineer</span>.
            </p>
            <p
              style={{
                transitionDelay: "700ms",
              }}
            >
              Highly motivated and passionated about the web, I have been
              crafting digital products for over
              <span> 10 years</span>. I like problem solving, being involved in
              innovative projects, interact and share knowledge with people with
              a strong <span>team mindset</span>.
            </p>
            <p />
            <p
              style={{
                transitionDelay: "800ms",
              }}
            >
              When I'm not writing or reviewing code, I like to have fun
              outdoors. I love rock climbing and also do couple of other sports
              : open water swimming, cycling, volleyball.
            </p>
            <p />
            <p
              style={{
                transitionDelay: "900ms",
              }}
            >
              Here is few <span className="technologies">technologies</span>{" "}
              I've been working with and simple things <span>built</span> lately
              for the fun
            </p>
            <p />
            <div>
              <ul className="skills--grid">{skillsAndProjects}</ul>
            </div>
            <p />
            <p />
            <p
              style={{
                transitionDelay: "2500ms",
              }}
            >
              You can check my github, linkedin or download my resume
            </p>
            <p
              style={{
                transitionDelay: "2600ms",
              }}
            >
              <a
                href="https://github.com/myarcane"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <i className="fa fa-2x fa-fw fa-github" aria-hidden="true" />
              </a>{" "}
              +
              <a
                href="https://fr.linkedin.com/in/florianmailliet"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <i className="fa fa-2x fa-fw fa-linkedin" />
              </a>{" "}
              +
              <a
                href="/resume.pdf"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <i className="fa fa-2x fa-fw fa-file" />
              </a>{" "}
            </p>
          </Caption>
        </div>
      </section>
    )
  }
}

export default About
