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
    this.toggleCover = this.toggleCover.bind(this)

    this.state = {
      captionHeight: "0px",
      isHovering: false,
    }
  }

  onResize() {
    let captionHeight = getComputedStyle(
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

  toggleCover() {
    this.setState({
      isHovering: this.state.isHovering ? false : true,
    })
  }

  render() {
    const { id, data } = this.props

    return (
      <section id={id} className="aligner">
        <div className="aligner__item">
          <Caption>
            <div
              className="image-wrapper"
              onMouseOver={this.toggleCover}
              onMouseOut={this.toggleCover}
              onClick={this.toggleCover}
            >
              <div className="image-cover">
                <Img
                  className="image-cover__item"
                  style={{
                    height: this.state.captionHeight,
                  }}
                  fluid={data.profileImage.childImageSharp.fluid}
                />
              </div>
              <div className="image-cover">
                <Img
                  className="image-cover__item"
                  style={{
                    height: this.state.captionHeight,
                    opacity: this.state.isHovering ? 1 : 0,
                  }}
                  fluid={data.climbingImage.childImageSharp.fluid}
                />
              </div>
            </div>
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
              I'm a <span>JavaScript developer</span> based in the Nice Area,
              France. Currently working @
              <a
                href="https://www.dailymotion.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>dailymotion </b>
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
              been crafting digital products for over
              <span> 10 years</span>. Strongly focused on <span>UI</span>, I
              like to be involved in innovative projects, interact and share
              knowledge with people with a strong <span>team mindset</span> .
            </p>
            <p />
            <p
              style={{
                transitionDelay: "800ms",
              }}
            >
              When I'm not writing or reviewing code, I like to have fun
              outdoors. My passion number 1 is climbing. I absolutely love it. I
              also do couple of other sports : open water swimming, cycling,
              volleyball.
            </p>
            <p />
            <p
              style={{
                transitionDelay: "900ms",
              }}
            >
              In <span>March 2019</span>, I started a sabbatical year and I'm
              currently exploring British Columbia (Canada).
            </p>
            <p />
          </Caption>
        </div>
      </section>
    )
  }
}

export default About
