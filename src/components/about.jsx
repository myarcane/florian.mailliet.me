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
            {project.title} <span>&#8599;</span>
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
          <h1
            style={{
              transitionDelay: "500ms",
            }}
          >
            My name is <span>Florian.</span>
          </h1>
          <p
            style={{
              transitionDelay: "600ms",
            }}
          >
            I am a <span>web developer</span> based in Toronto 📍
          </p>
          <p
            style={{
              transitionDelay: "650ms",
            }}
          >
            In early <span>2023</span>, I became a new Canadian permanent
            resident 🇨🇦. Prior to this, I was based in the south of France 🇫🇷
            and worked @
            <a
              href="https://www.dailymotion.com"
              target="_blank"
              rel="noreferrer nofollow"
              onTouchEnd={() => {}}
            >
              <b>dailymotion </b>
            </a>
            as a <span>Senior Frontend Engineer</span>.
          </p>
          <p
            style={{
              transitionDelay: "700ms",
            }}
          >
            With a strong drive and a deep passion for the <span>internet</span>
            , I have been crafting web applications for the past{" "}
            <span>10+ years</span>. I like problem-solving, participating in
            groundbreaking initiatives and sharing knowledge with individuals
            who prioritize <span>teamwork</span>.
          </p>
          <p />
          <p
            style={{
              transitionDelay: "800ms",
            }}
          >
            When I am not writing or reviewing code, I like to have fun
            outdoors. I love rock climbing. I also practice a couple of other
            sports: open water swimming, cycling, and volleyball.
          </p>
          <p />
          <h2
            style={{
              transitionDelay: "900ms",
            }}
          >
            Here are a few technologies I've been{" "}
            <span className="technologies">working</span> with
          </h2>
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
          <h2
            style={{
              transitionDelay: "2500ms",
            }}
          >
            Or simple things built lately for the <span>fun ⚙️</span>
          </h2>
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
              <i className="fa fa-2x fa-fw fa-download" />
            </a>{" "}
            +
            <a href="mailto:florian@mailliet.me">
              <i className="fa fa-2x fa-fw fa fa-envelope" />
            </a>{" "}
          </p>
          <p />
          <p />
          <h2
            style={{
              transitionDelay: "3200ms",
            }}
          >
            What is it like <span>working</span> with me?
          </h2>
          <p
            style={{
              transitionDelay: "3200ms",
            }}
          >
            “Florian is not only a highly experienced front-end engineer, he is
            also a great team player and human being. I worked with him for
            almost 10 years in Dailymotion Video Player team; first as a peer
            front-end engineer, then lately as his direct manager. He is one of
            the most reliable front-end engineer I had the chance to work with.
            Always commited to deliver high-quality product, able to dig into
            really complex technical topics, come-up with a clean solution that
            will fit the needs. In addition, he’s always eager to share his
            knowledge with his team and stakeholders. He was a trustable
            teammate over the years and demonstrated his skills on many
            occasions, would that be on the codebase itself or through his
            collaborations with stakeholders in other teams such as Product,
            Design, Backend or Data. I recommend him without any hesitation. ”
          </p>
          <p style={{ textAlign: "right", transitionDelay: "3200ms" }}>
            <a href="https://fr.linkedin.com/in/audard">Olivier Audard</a>,
            Engineering Director @Dailymotion
          </p>

          <p />
          <p
            style={{
              transitionDelay: "3200ms",
            }}
          >
            I've worked with Florian on the Dailymotion HTML5 player during 3
            years and I've really appreciated his sense of details. He is the
            kind of person to fully size a problem before working on a solution,
            ensuring every scenarios will be handled properly. Whenever he was
            working on a UX feature, he makes sure to provide the best
            experience to user, with a particular attention to performance so it
            doesn't feel laggish. Doing a user interface that works on every
            mobile browsers, including some low-end devices stuck with Chrome
            30, in a country where EDGE connection is the norm, is not an easy
            task. Florian was able to fully achieve it.
          </p>
          <p style={{ textAlign: "right", transitionDelay: "3200ms" }}>
            <a href="https://ca.linkedin.com/in/michael-vial">Michael Vial</a>,
            Eng. Manager @Busbud
          </p>
        </Caption>
      </div>
    </section>
  )
}
