import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

const Project = ({ content }) => {
  return (
    <section className="project__wrapper">
      {content.map((project, key) => {
        const { body, frontmatter } = project.node
        return (
          <div className="project__container">
            <div class="project__text__container" key={frontmatter.position}>
              <h2 className="project__title">{frontmatter.title}</h2>
              <div class="project__text__body">
                <MDXRenderer>{body}</MDXRenderer>
              </div>
              <div className="tags">
                {frontmatter.tags.map((tag, key) => {
                  return <p className="tag-text">{tag}</p>
                })}
              </div>
            </div>

            <div className="project__image__container">
              <div style={{ width: "100%" }}>
                <Img fluid={frontmatter.screenshot.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Project
