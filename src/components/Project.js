import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import External from "../assets/icons/external.svg"

const Project = ({ content }) => {
  return (
    <section className="project__wrapper">
      {content.map((project, key) => {
        const { body, frontmatter } = project.node
        return (
          <div id="project" className="project__container">
            <div class="project__text__container" key={frontmatter.position}>
              <h2 className="project__title">{frontmatter.title}</h2>
              <div class="project__text__body">
                <MDXRenderer>{body}</MDXRenderer>
              </div>
              <a href={frontmatter.external} className="project__link">
                Live Project
                <span className="external-arrow">
                  <External />
                </span>
              </a>
              <a href={frontmatter.github} className="project__link">
                Github
                <span className="external-arrow">
                  <External />
                </span>
              </a>

              <div className="tags">
                {frontmatter.tags.map((tag, key) => {
                  return <p className="tag-text">{tag}</p>
                })}
              </div>
            </div>

            <div className="project__image__container">
              <div style={{ width: "100%" }}>
                <Img
                  className="project__image"
                  fluid={frontmatter.screenshot.childImageSharp.fluid}
                />
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Project
