import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Caption } from "./caption"
import { Recommendations } from "./recommendations"
import { Projects } from "./projects"
import { Skills } from "./skills"
import "./about.css"
import "./skills.css"

export const About = ({ id, data }) => {
  const incrementDelay = 80 // ms

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
            I am a <span>web developer</span> based in Vancouver 📍
          </p>
          <p
            style={{
              transitionDelay: "650ms",
            }}
          > 
            In early <span>2023</span>, I became a new Canadian permanent
            resident. Before that, I was located in the south of France and held
            the position of Senior Frontend Engineer at{" "}
            <a
              href="https://www.dailymotion.com"
              target="_blank"
              rel="noreferrer nofollow"
              onTouchEnd={() => {}}
            >
              dailymotion
            </a>
            . Currently working with an amazing team at{" "}
            <a
              href="https://www.dayforce.com/"
              target="_blank"
              rel="noreferrer nofollow"
              onTouchEnd={() => {}}
            >
              Dayforce
            </a>
          </p>
          <p
            style={{
              transitionDelay: "700ms",
            }}
          >
            I have been crafting web applications for the past{" "}
            <span>10+ years</span>. I enjoy tackling new challenges,
            contributing to innovative projects, and partnering with people who
            prioritize <span>teamwork</span>.{" "}
          </p>
          <p />
          <p
            style={{
              transitionDelay: "800ms",
            }}
          >
            When I'm not writing or reviewing code, I enjoy spending time
            outdoors, especially rock climbing, which I started in 2015.
          </p>
          <p />
          <p
            style={{
              transitionDelay: "850ms",
            }}
          >
            For those who don't speak French and are curious about the
            pronunciation of my name /flɔ.ʁjɑ̃/, I stumbled upon this{" "}
            <a
              href="https://www.youtube.com/watch?v=jiz_A97JSJc"
              target="_blank"
              rel="noreferrer nofollow"
            >
              video
            </a>{" "}
            randomly :D
          </p>
          <p />
          <Skills incrementDelay={incrementDelay} />
          <p />
          <p />
          <Projects incrementDelay={incrementDelay} />
          <p />
          <p />
          <Recommendations />
        </Caption>
      </div>
    </section>
  )
}
