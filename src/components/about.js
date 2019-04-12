import React, { Component } from "react"
import Caption from "./caption"
import "./about.css"
import Img from "gatsby-image"

class About extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { id } = this.props
    const { data } = this.props
    return (
      <section id={id} className="aligner">
        <div className="aligner__item">
          <Caption>
            <Img
              className="image--cover"
              fluid={data.climbingImage.childImageSharp.fluid}
            />
            <h1
              style={{
                transitionDelay: "400ms",
              }}
            >
              About me.
            </h1>
            <p
              style={{
                transitionDelay: "500ms",
              }}
            >
              Hi, I'm <b>Flo</b>. Friends usually call me like that as it easier
              to pronounce. I'm originally from Paris but I moved in the south
              of France 6 years ago. Highly motivated and passionated about the
              web, I have been crafting digital products for over{" "}
              <b>10 years</b>. Strongly focused on <b>UI</b>, I like to be
              involved in innovative projects, interact and share knowledge with
              people with a strong <b>team</b> mindset.
            </p>
            <p />
            <p
              style={{
                transitionDelay: "600ms",
              }}
            >
              When I'm not coding, I like to have fun outdoors. My passion
              number 1 is climbing. I absolutely love it. I also do couple of
              other sports : open water swimming, cycling, volleyball.
            </p>
            <p />
            <p
              style={{
                transitionDelay: "1000ms",
              }}
            >
              On the picture, I'm the person who's holding the rope (the
              belayer).
            </p>
          </Caption>
        </div>
      </section>
    )
  }
}

export default About
