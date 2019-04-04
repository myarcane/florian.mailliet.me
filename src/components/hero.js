import React, { Component } from "react"
import Img from "gatsby-image"
import "./hero.css"

class Hero extends Component {
  constructor(props) {
    super(props)

    this.screenNode = React.createRef()

    this.state = {
      isIntersecting: false,
    }
  }

  componentDidMount() {
    if ("IntersectionObserver" in window) {
      const node = this.screenNode.current

      const options = {
        root: null, // relative to document viewport
        rootMargin: "0px", // margin around root. Values are similar to css property. Unitless values not allowed
        threshold: 0.2, // visible amount of item shown in relation to root
      }

      const onChange = (changes, observer) => {
        changes.forEach(change => {
          if (change.intersectionRatio >= 0.2) {
            this.setState({
              isIntersecting: true,
            })
          }
        })
      }

      const observer = new IntersectionObserver(onChange, options)
      observer.observe(node)
    } else {
      this.setState({
        isIntersecting: true,
      })
    }
  }
  render() {
    const { isIntersecting } = this.state
    const { data } = this.props
    return (
      <div className="aligner" ref={this.screenNode}>
        <div className="aligner__item">
          {/* <Img
              className={`img transition ${isIntersecting ? "fadein" : ""}`}
              fixed={data.profileImage.childImageSharp.fixed}
            /> */}
          <div
            className={`caption transition ${isIntersecting ? "fadein" : ""}`}
          >
            <div className="caption__item">
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
                  transitionDelay: "500ms",
                }}
              >
                I like to craft and ship things for the web.
              </h3>
            </div>
          </div>
          <div
            className={`caption transition ${isIntersecting ? "fadein" : ""}`}
          >
            <div className="caption__item">
              <p
                style={{
                  transitionDelay: "800ms",
                }}
              >
                I'm a <b>JavaScript</b> developer based in Sophia Antipolis,
                south of France. Currently working at
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
                  transitionDelay: "900ms",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
