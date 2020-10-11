import React from "react"
import "../styles/styles.scss"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import About from "../components/About"
import Project from "../components/Project"

export default function Home({ data }) {
  return (
    <>
      <Layout>
        <Hero content={data.hero.edges} />
        <About content={data.about.edges} />
        <Project content={data.project.edges} />
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  {
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
            github
            external
            category
            screenshot {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    about: allMdx(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            caption
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`
