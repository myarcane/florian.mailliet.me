import React from "react"
import { graphql } from "gatsby"
import "./main.css"
import Navigation from "../components/navigation"
import Hero from "../components/hero"
import BackgroundSkills from "../components/background-skills"
import { Helmet } from "react-helmet"

const HomePage = ({ data }) => {
  return (
    <div>
      <div className="layout">
        <Navigation />
        <BackgroundSkills data={data} />
        <div className="main">
          <Hero data={data} />
          <Hero data={data} />
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
        fixed(width: 310) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
