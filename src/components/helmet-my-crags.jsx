import React from "react"
import { Helmet } from "react-helmet"

// here we inline the global CSS of the my-crags's page to avoid
// conflict with the index in dev mode.
// the CSS is taken from http://getskeleton.com/
export const HelmetMyCrags = () => (
  <Helmet>
    <title>My climbing crags</title>
    <style type="text/css">
      {`
      a {
        text-decoration: none;
      }
      
      html {
        font-size: 62.5%;
      }
      body {
        font-size: 1.5em;
        line-height: 1.6;
        font-weight: 400;
        font-family: Raleway, HelveticaNeue, "Helvetica Neue", Helvetica, Arial,
          sans-serif;
        color: #222;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 0;
        margin-bottom: 2rem;
        font-weight: 300;
      }
      h1 {
        font-size: 4rem;
        line-height: 1.2;
        letter-spacing: -0.1rem;
      }
      h2 {
        font-size: 3.6rem;
        line-height: 1.25;
        letter-spacing: -0.1rem;
      }
      h3 {
        font-size: 3rem;
        line-height: 1.3;
        letter-spacing: -0.1rem;
      }
      h4 {
        font-size: 2.4rem;
        line-height: 1.35;
        letter-spacing: -0.08rem;
      }
      h5 {
        font-size: 1.8rem;
        line-height: 1.5;
        letter-spacing: -0.05rem;
      }
      h6 {
        font-size: 1.5rem;
        line-height: 1.6;
        letter-spacing: 0;
      }
      @media (min-width: 550px) {
        h1 {
          font-size: 5rem;
        }
        h2 {
          font-size: 4.2rem;
        }
        h3 {
          font-size: 3.6rem;
        }
        h4 {
          font-size: 3rem;
        }
        h5 {
          font-size: 2.4rem;
        }
        h6 {
          font-size: 1.5rem;
        }
      }
      p {
        margin-top: 0;
      }
      a {
        color: #1eaedb;
      }
      a:hover {
        color: #0fa0ce;
      }
      .button,
      button,
      input[type="button"],
      input[type="reset"],
      input[type="submit"] {
        display: inline-block;
        height: 38px;
        padding: 0 30px;
        color: #555;
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        line-height: 38px;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        text-decoration: none;
        white-space: nowrap;
        background-color: transparent;
        border-radius: 4px;
        border: 1px solid #bbb;
        cursor: pointer;
        box-sizing: border-box;
      }
      .button:focus,
      .button:hover,
      button:focus,
      button:hover,
      input[type="button"]:focus,
      input[type="button"]:hover,
      input[type="reset"]:focus,
      input[type="reset"]:hover,
      input[type="submit"]:focus,
      input[type="submit"]:hover {
        color: #333;
        border-color: #888;
        outline: 0;
      }
      .button.button-primary,
      button.button-primary,
      input[type="button"].button-primary,
      input[type="reset"].button-primary,
      input[type="submit"].button-primary {
        color: #fff;
        background-color: #33c3f0;
        border-color: #33c3f0;
      }
      .button.button-primary:focus,
      .button.button-primary:hover,
      button.button-primary:focus,
      button.button-primary:hover,
      input[type="button"].button-primary:focus,
      input[type="button"].button-primary:hover,
      input[type="reset"].button-primary:focus,
      input[type="reset"].button-primary:hover,
      input[type="submit"].button-primary:focus,
      input[type="submit"].button-primary:hover {
        color: #fff;
        background-color: #1eaedb;
        border-color: #1eaedb;
      }
      input[type="email"],
      input[type="number"],
      input[type="password"],
      input[type="search"],
      input[type="tel"],
      input[type="text"],
      input[type="url"],
      select,
      textarea {
        height: 38px;
        padding: 6px 10px;
        background-color: #fff;
        border: 1px solid #d1d1d1;
        border-radius: 4px;
        box-shadow: none;
        box-sizing: border-box;
      }
      input[type="email"],
      input[type="number"],
      input[type="password"],
      input[type="search"],
      input[type="tel"],
      input[type="text"],
      input[type="url"],
      textarea {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      textarea {
        min-height: 65px;
        padding-top: 6px;
        padding-bottom: 6px;
      }
      input[type="email"]:focus,
      input[type="number"]:focus,
      input[type="password"]:focus,
      input[type="search"]:focus,
      input[type="tel"]:focus,
      input[type="text"]:focus,
      input[type="url"]:focus,
      select:focus,
      textarea:focus {
        border: 1px solid #33c3f0;
        outline: 0;
      }
      label,
      legend {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
      }
      fieldset {
        padding: 0;
        border-width: 0;
      }
      input[type="checkbox"],
      input[type="radio"] {
        display: inline;
      }
      label > .label-body {
        display: inline-block;
        margin-left: 0.5rem;
        font-weight: 400;
      }
      ul {
        list-style: circle inside;
      }
      ol {
        list-style: decimal inside;
      }
      ol,
      ul {
        padding-left: 0;
        margin-top: 0;
      }
      ol ol,
      ol ul,
      ul ol,
      ul ul {
        margin: 1.5rem 0 1.5rem 3rem;
        font-size: 90%;
      }
      li {
        margin-bottom: 1rem;
      }
      code {
        padding: 0.2rem 0.5rem;
        margin: 0 0.2rem;
        font-size: 90%;
        white-space: nowrap;
        background: #f1f1f1;
        border: 1px solid #e1e1e1;
        border-radius: 4px;
      }
      pre > code {
        display: block;
        padding: 1rem 1.5rem;
        white-space: pre;
      }
      td,
      th {
        padding: 12px 15px;
        text-align: left;
        border-bottom: 1px solid #e1e1e1;
      }
      td:first-child,
      th:first-child {
        padding-left: 0;
      }
      td:last-child,
      th:last-child {
        padding-right: 0;
      }
      .button,
      button {
        margin-bottom: 1rem;
      }
      fieldset,
      input,
      select,
      textarea {
        margin-bottom: 1.5rem;
      }
      blockquote,
      dl,
      figure,
      form,
      ol,
      p,
      pre,
      table,
      ul {
        margin-bottom: 2.5rem;
      }
      .u-full-width {
        width: 100%;
        box-sizing: border-box;
      }
      .u-max-full-width {
        max-width: 100%;
        box-sizing: border-box;
      }
      .u-pull-right {
        float: right;
      }
      .u-pull-left {
        float: left;
      }
      hr {
        margin-top: 3rem;
        margin-bottom: 3.5rem;
        border-width: 0;
        border-top: 1px solid #e1e1e1;
      }
      .container:after,
      .row:after,
      .u-cf {
        content: "";
        display: table;
        clear: both;
      }
      `}
    </style>
  </Helmet>
)
