import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import IconStack from "./IconStack"

const About = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <>
      <div className="about__container">
        <section className="about__left-container">
          <Img fluid={frontmatter.image.childImageSharp.fluid} />
          <div className="about__me">
            <div className="about__text">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </div>
        </section>

        <section className="about__right-container">
          <IconStack />
          <div className="education__container"></div>
        </section>
      </div>
    </>
  )
}

export default About

{
  /* <text x="0" y="5000015" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by abeldb</text><text x="0" y="5000020" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text> */
}
