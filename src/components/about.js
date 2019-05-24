import React, { Component } from "react"
import Caption from "./caption"
import "./about.css"
import Img from "gatsby-image"
import ReactDOM from "react-dom"

class About extends Component {
  constructor(props) {
    super(props)
    this.captionNode = React.createRef()
    this.onResize = this.onResize.bind(this)

    this.state = {
      captionHeight: "0px",
    }
  }

  onResize() {
    let { captionHeight } = getComputedStyle(
      ReactDOM.findDOMNode(this)
    ).getPropertyValue("--image-cover-height")

    if (window.matchMedia("(min-width: 700px)").matches) {
      captionHeight = `${this.captionNode.current.getItemsHeight()}px`
    }

    this.setState({
      captionHeight,
    })
  }

  componentDidMount() {
    if (window) {
      window.addEventListener("resize", this.onResize)
      this.onResize()
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener("resize", this.onResize)
    }
  }

  render() {
    const { id, data } = this.props

    return (
      <section id={id} className="aligner">
        <div className="aligner__item">
          <Caption>
            <Img
              style={{
                height: this.state.captionHeight,
              }}
              className="image--cover"
              fluid={data.profileImage.childImageSharp.fluid}
            />
          </Caption>
          <Caption ref={this.captionNode}>
            <h1
              style={{
                transitionDelay: "400ms",
              }}
            >
              Hi.
            </h1>
            <h2
              style={{
                transitionDelay: "500ms",
              }}
            >
              my name is <span>Florian Mailliet.</span>
            </h2>
            <p
              style={{
                transitionDelay: "600ms",
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
                transitionDelay: "700ms",
              }}
            >
              I'm originally from Paris but I moved in the south of France 6
              years ago. Highly motivated and passionated about the web, I have
              been crafting digital products for over <b>10 years</b>. Strongly
              focused on <b>UI</b>, I like to be involved in innovative
              projects, interact and share knowledge with people with a strong{" "}
              <b>team</b> mindset.
            </p>
            <p />
            <p
              style={{
                transitionDelay: "800ms",
              }}
            >
              When I'm not coding, I like to have fun outdoors. My passion
              number 1 is climbing. I absolutely love it. I also do couple of
              other sports : open water swimming, cycling, volleyball.
            </p>
            <p />
          </Caption>
        </div>
      </section>
    )
  }
}

export default About
