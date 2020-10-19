import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import IconStack from "./IconStack"

const Contact = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <>
      <div className="about__container">
        <section className="about__left-container">
          <div className="about__me">
            <h3 className="about__title">{frontmatter.title}</h3>
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

export default Contact
