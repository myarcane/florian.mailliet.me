import React from "react"
import Caption from "./caption"
import "./contact.css"

const Contact = ({ id }) => {
  return (
    <section id={id} className="aligner">
      <div className="aligner__item">
        <Caption>
          <h2
            style={{
              transitionDelay: "500ms",
            }}
          >
            {" "}
            Feel free to{" "}
            <a
              className="button"
              href="mailto:florian@mailliet.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact me
            </a>{" "}
          </h2>
          <p
            style={{
              transitionDelay: "600ms",
            }}
          >
            Currently open to new opportunities 🤝
          </p>
          <p />
          <p />
        </Caption>
      </div>
    </section>
  )
}

export default Contact
