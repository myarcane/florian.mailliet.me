import React from "react"
import { graphql } from "gatsby"
import "font-awesome/css/font-awesome.min.css"
import "./index.css"
// import Navigation from "../components/navigation"
import Contact from "../components/contact"
import About from "../components/about"
// import Skills from "../components/skills"
// import Work from "../components/work"
import cssVars from "css-vars-ponyfill"

cssVars()

const HomePage = ({ data }) => {
  return (
    <div>
      <div className="layout">
        <main className="main">
          <About id="about" data={data} />
          {/* <Skills id="skills" data={data} /> */}
          {/* <Work id="work" data={data} /> */}
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
