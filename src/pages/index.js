import React from "react"
import { graphql } from "gatsby"
import "./font.css"
import "font-awesome/css/font-awesome.min.css"
import Contact from "../components/contact"
import About from "../components/about"
import cssVars from "css-vars-ponyfill"
import { HelmetIndex } from "../components/helmet-index"

cssVars()

const HomePage = ({ data }) => {
  return (
    <div>
      <HelmetIndex data={data} />
      <div className="layout">
        <main className="main">
          <About id="about" data={data} />
          <Contact id="contact" data={data} />
        </main>
      </div>
    </div>
  )
}

export default HomePage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    profileImage: file(relativePath: { eq: "profile.jpeg" }) {
      childImageSharp {
        gatsbyImageData(width: 460, height: 460, layout: CONSTRAINED)
      }
    }
  }
`
