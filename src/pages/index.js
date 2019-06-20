import React from "react"
import { graphql } from "gatsby"
import "font-awesome/css/font-awesome.min.css"
import "./index.css"
import Navigation from "../components/navigation"
import Contact from "../components/contact"
import About from "../components/about"
import Skills from "../components/skills"
import Work from "../components/work"
import cssVars from "css-vars-ponyfill"

cssVars()

const HomePage = ({ data }) => {
  return (
    <div>
      <div className="layout">
        <Navigation />
        <main className="main">
          <About id="about" data={data} />
          <Work id="work" data={data} />
          <Skills id="skills" data={data} />
          <Contact id="contact" data={data} />
        </main>
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
        fluid(maxWidth: 400, maxHeight: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    climbingImage: file(relativePath: { eq: "climbing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
