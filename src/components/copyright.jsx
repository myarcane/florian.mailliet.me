import React from "react"
import { Caption } from "./caption"
import "./copyright.css"

export const Copyright = ({ id }) => {
  return (
    <section id={id} className="aligner">
      <div className="aligner__item">
        <Caption>
          <p
            style={{
              textAlign: "center",
              fontSize: "12px",
              transitionDelay: "500ms",
            }}
          >
            © Florian Mailliet {new Date().getFullYear()}
          </p>
          <p />
        </Caption>
      </div>
    </section>
  )
}
