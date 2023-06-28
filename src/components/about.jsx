import React, { useEffect, useState } from "react"
import { Caption } from "./caption"
import "./about.css"
import "./skills.css"
import { GatsbyImage } from "gatsby-plugin-image"
import learningSkills from "../data/learning-skills.json"
import masteringSkills from "../data/mastering-skills.json"
import projects from "../data/projects.json"

export const About = ({ id, data }) => {
  const [masteringSkillsElements, setMasteringSkillsElements] = useState([])
  const [learningSkillsElements, setLearningSkillsElements] = useState([])
  const [projectsElements, setProjectsElements] = useState([])

  useEffect(() => {
    const incrementDelay = 80 // ms

    masteringSkills.forEach((skill, id) => {
      setMasteringSkillsElements(prevState => [
        ...prevState,
        <li
          key={`skill-${id.toString()}`}
          className="skill"
          style={{
            transitionDelay: `${id * incrementDelay + 1000}ms`,
          }}
        >
          {skill}
        </li>,
      ])
    })

    learningSkills.forEach((skill, id) => {
      setLearningSkillsElements(prevState => [
        ...prevState,
        <li
          key={id.toString()}
          className="skill learning"
          style={{
            transitionDelay: `${(masteringSkills.length + id) * incrementDelay +
              1300}ms`,
          }}
        >
          {skill}
        </li>,
      ])
    })

    projects.forEach((project, id) => {
      setProjectsElements(prevState => [
        ...prevState,
        <a
          href={project.link}
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
            {project.title}
          </li>
        </a>,
      ])
    })
  }, [])

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
            <span>Early 2023</span>, I became a new canadian permanent resident
            🇨🇦. Before that, I was based in the south of France 🇫🇷 and worked @
            <a
              href="https://www.dailymotion.com"
              target="_blank"
              rel="noreferrer nofollow"
              onTouchEnd={() => {}}
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
            Highly motivated and passionated about the web, I have been crafting
            digital products for over
            <span> 10 years</span>. I like problem solving, being involved in
            innovative projects, interact and share knowledge with people with a
            strong <span>team mindset</span>.
          </p>
          <p />
          <p
            style={{
              transitionDelay: "800ms",
            }}
          >
            When I'm not writing or reviewing code, I like to have fun outdoors.
            I love rock climbing. I also do couple of other sports : open water
            swimming, cycling, volleyball.
          </p>
          <p />
          <p
            style={{
              transitionDelay: "900ms",
            }}
          >
            Here are a few technologies I've been{" "}
            <span className="technologies">working</span> with
          </p>
          <p />
          <div>
            <ul className="skills--grid">{masteringSkillsElements}</ul>
          </div>
          <p />
          <p
            style={{
              transitionDelay: "2500ms",
            }}
          >
            learning topics 👨‍💻
          </p>
          <div>
            <ul className="skills--grid">{learningSkillsElements}</ul>
          </div>
          <p />
          <p
            style={{
              transitionDelay: "2500ms",
            }}
          >
            Or simple things built lately for the fun ⚙️
          </p>
          <div>
            <ul className="skills--grid">{projectsElements}</ul>
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
              <i className="fa fa-2x fa-fw fa-file" />
            </a>{" "}
            +
            <a href="mailto:florian@mailliet.me">
              <i className="fa fa-2x fa-fw fa fa-envelope" />
            </a>{" "}
          </p>
        </Caption>
      </div>
    </section>
  )
}
