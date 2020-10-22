import React from "react"
import "../styles/styles.scss"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Project from "../components/Project"

export default function Home({ data }) {
  return (
    <>
      <Layout>
        <Hero content={data.hero.edges} />
        <Project content={data.project.edges} />
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  {
    project: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/project/" }
        frontmatter: { visible: { eq: "true" } }
      }
      sort: { fields: [frontmatter___position], order: ASC }
    ) {
      edges {
        node {
          body
          frontmatter {
            title
            visible
            tags
            position
            external
            github
            category
            screenshot {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    hero: allMdx(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
          }
        }
      }
    }
  }
`
