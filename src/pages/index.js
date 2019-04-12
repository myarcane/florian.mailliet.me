import React from "react"
import { graphql } from "gatsby"
import "font-awesome/css/font-awesome.min.css"
import "./index.css"
import Navigation from "../components/navigation"
import Hero from "../components/hero"
import About from "../components/about"

const HomePage = ({ data }) => {
  return (
    <div>
      <div className="layout">
        <Navigation />
        <div className="main">
          <Hero id="hero" data={data} />
          <About id="about" data={data} />
        </div>
      </div>
    </div>
  )
}

export default HomePage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }

    profileImage: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    climbingImage: file(relativePath: { eq: "climbing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
