import React, { Component } from "react"
import Caption from "./caption"
import "./hero.css"

const Hero = ({ id }) => {
  return (
    <section id={id} className="aligner">
      <div className="aligner__item">
        <Caption>
          <h1
            style={{
              transitionDelay: "400ms",
            }}
          >
            Hi, my name is
          </h1>
          <h2
            style={{
              transitionDelay: "500ms",
            }}
          >
            Florian Mailliet.
          </h2>
          <h3
            style={{
              transitionDelay: "600ms",
            }}
          >
            I like to craft things for the web.
          </h3>
          <p
            style={{
              transitionDelay: "700ms",
            }}
          >
            I'm a <b>JavaScript</b> developer based in the Nice Area, France.
            Currently working at
            <a
              href="https://www.dailymotion.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b> dailymotion </b>
            </a>
            as a senior Front-end engineer.
          </p>
          <p
            style={{
              transitionDelay: "1000ms",
            }}
          >
            <a
              className="button"
              href="mailto:florian.mailliet@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </a>
          </p>
        </Caption>
      </div>
    </section>
  )
}

export default Hero
