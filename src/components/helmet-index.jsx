import React from "react"
import { Helmet } from "react-helmet"

// here we inline the global CSS of the index's page to avoid
// conflict with the other pages.
export const HelmetIndex = ({ data }) => {
  const { title, description } = data.site.siteMetadata

  return (
    <Helmet>
      <style type="text/css">
        {`
          /* variables */
          :root {
            /* colors */
            --highlight-color: #47a0f7;
            --link-color: black;
            --h1-color: black;
            --h2-color: rgb(136, 146, 176);
            --h3-color: rgb(136, 146, 176);
            --h4-color: black;
            --p-color: black;
            /* titles font family */
            --titles-font-family: "Gilroy", sans-serif;
            /* sizes */
            --h1-font-size: 40px;
            --h2-font-size: 24px;
            --h3-font-size: 14px;
            --h4-font-size: 16px;
            --p-font-size: 14px;
            --menu-height: 50px;
            /* button font size */
            --button-font-size: 20px;
            --button-arrow-size: calc(var(--button-font-size) / 3);
          }
          /* body */
          html,
          body {
            margin: 0;
            padding: 0;
            font-family: "Raleway", serif;
            font-weight: 150;
            width: 100%;
            height: 100vh;
            background-color: white;
          }
  
          /* reset */
           *,
           *:before,
           *:after {
             box-sizing: inherit;
           }
           
           ul {
             list-style: none;
             padding: 0;
             margin: 0;
           }
           
           h1 {
             font-family: var(--titles-font-family);
             font-weight: 900;
             font-size: var(--h1-font-size);
             color: var(--h1-color);
           }
           
           h2 {
            border-top: 1px solid rgba(136, 146, 176, 0.3);
             padding-top: 40px;
             font-family: var(--titles-font-family);
             font-weight: 400;
             font-size: var(--h2-font-size);
             color: var(--h2-color);
           }
           
           h2 span {
             font-weight: 900;
           }
           
           h3 {
             color: var(--h3-color);
             font-size: var(--h3-font-size);
           }
           
           h4 {
             font-family: var(--titles-font-family);
             font-weight: 400;
             color: var(--h4-color);
             font-size: var(--h4-font-size);
           }
           
           p {
             font-size: var(--p-font-size);
             color: var(--p-color);
           }
           
           p span,
           p a {
             font-family: var(--titles-font-family);
             font-weight: 400;
           }
           
           p a {
             text-decoration: underline;
           }
           
           /* link */
           a {
             color: var(--link-color);
             text-decoration: none;
           }

           @media (hover: hover) {
            a:hover {
              color: var(--highlight-color);
            }
           }
           
           .layout {
             width: 100%;
           }
           
           .main {
             width: 100%;
             overflow: hidden;
             position: absolute;
           }
           
           .aligner {
             display: flex;
             justify-content: center;
             width: 100%;
           }
           
           .aligner__item {
             display: flex;
             flex-direction: column;
             justify-content: center;
             /* nav height */
             /* padding-top: 50px; */
           }

           
        `}
      </style>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
