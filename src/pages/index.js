import React from "react"
import { graphql } from "gatsby"
import "./index.css"
import "font-awesome/css/font-awesome.min.css"
import Contact from "../components/contact"
import About from "../components/about"
import cssVars from "css-vars-ponyfill"
import { Helmet } from "react-helmet"

cssVars()

const HomePage = ({ data, location }) => {
  // console.log("pathname", location.pathname, data)

  // if (location.pathname === "/") {
  //   console.log("loading css")
  //   // require("./index.css")
  // } else {
  //   console.log("not loading css")
  // }

  const { title } = data.site.siteMetadata

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
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
