import React from "react"
import "../styles/styles.scss"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import About from "../components/About"

export default function Home({ data }) {
  return (
    <>
      <Layout>
        <About content={data.about.edges} />
      </Layout>
    </>
  )
}
export const pageQuery = graphql`
  {
    about: allMdx(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          body
          frontmatter {
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
  }
`
