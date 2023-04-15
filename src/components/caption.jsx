import React, { Component } from "react"
import "./caption.css"

class Caption extends Component {
  constructor(props) {
    super(props)

    this.captionNode = React.createRef()
    this.captionItems = React.createRef()
    this.getItemsHeight = this.getItemsHeight.bind(this)

    this.state = {
      isIntersecting: false,
      nodeHeight: 0,
    }
  }

  componentDidMount() {
    if ("IntersectionObserver" in window) {
      const node = this.captionNode.current

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

            if (this.props.onIntersecting) {
              this.props.onIntersecting()
            }
          }
        })
      }

      const observer = new IntersectionObserver(onChange, options)
      observer.observe(node)
    } else {
      this.setState({
        isIntersecting: true,
      })

      if (this.props.onIntersecting) {
        this.props.onIntersecting()
      }
    }
  }

  getItemsHeight() {
    const node = this.captionItems.current
    return node.getBoundingClientRect().height
  }

  render() {
    const { isIntersecting } = this.state
    const { children } = this.props
    return (
      <div
        ref={this.captionNode}
        className={`caption ${isIntersecting ? "fadein" : ""}`}
      >
        <div ref={this.captionItems} className="caption__item">
          {children}
        </div>
      </div>
    )
  }
}

export default Caption
