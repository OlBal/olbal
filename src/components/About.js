import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import IconStack from "./IconStack"
// import Me from "../assets/img/oliver.jpg"
const About = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <>
      <div className="about__container">
        <section className="about__left-container">
          {/* <Me /> */}
          <div className="about__me">
            <div className="about__text">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </div>
        </section>
        <section className="middle__container">
          <a href="mailto:oliverballon1@gmail.com">oliverballon1@gmail.com</a>
        </section>

        <section className="about__right-container">
          {/* <p className="about__section__text">
            <strong>
              <em>Experience</em>
            </strong>
          </p> */}
          <p className="about__section__text">
            <strong>
              <em>Education</em>
            </strong>
            <br />
            <em>
              <strong>2020</strong>
            </em>
            &nbsp; DevelopMe Coding Fellowship <br />
            <em>
              <strong>2014</strong>
            </em>
            &nbsp; Central Saint Martins (BA Graphic Design) <br />
            <em>
              <strong>2011</strong>
            </em>
            &nbsp; Central Saint Martins (Foundation Diploma)
          </p>

          <div className="row">
            <div className="split-col">
              <p className="about__section__text col-1">
                <strong>
                  <em>Skills</em>
                </strong>
                <br />
                React <br />
                Redux <br />
                Gatsby
                <br />
                Javascript
                <br />
                Laravel <br />
                MySQL <br />
                PHP
                <br />
                Laravel <br />
                MySQL <br />
                PHP
                <br />
              </p>
            </div>
            <div className="split-col">
              <p className="about__section__text col-2">
                <strong>
                  <em>Tools</em>
                </strong>
                <br />
                Git <br />
                Gulp <br />
              </p>
            </div>
          </div>

          <IconStack />
        </section>
      </div>
    </>
  )
}

export default About

{
  /* <text x="0" y="5000015" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by abeldb</text><text x="0" y="5000020" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text> */
}
