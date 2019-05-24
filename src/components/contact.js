import React, { Component } from "react"
import Caption from "./caption"
import "./contact.css"

const Contact = ({ id }) => {
  return (
    <section id={id} className="aligner">
      <div className="aligner__item">
        <Caption>
          <h1
            style={{
              transitionDelay: "400ms",
            }}
          >
            What's next ?
          </h1>
          <p />
          <p />
          <h2
            style={{
              transitionDelay: "500ms",
            }}
          >
            {" "}
            Feel free to{" "}
            <a
              className="button"
              href="mailto:florian.mailliet@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact me
            </a>{" "}
          </h2>
          <p />
          <p />
        </Caption>
      </div>
    </section>
  )
}

export default Contact
