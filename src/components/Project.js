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
            <div className="project__text__container">
              <div className="" key={frontmatter.position}>
                <div className="">
                  <h1 className="">{frontmatter.category}</h1>
                  <h2 className="">{frontmatter.title}</h2>
                  <div>
                    <MDXRenderer>{body}</MDXRenderer>
                    <div className="">
                      {frontmatter.tags.map((tag, key) => {
                        return <p className="mr-2 mt-6">{tag}</p>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project__image__container">
              <Img fluid={frontmatter.screenshot.childImageSharp.fluid} />
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Project
