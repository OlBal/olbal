import React from "react"
import "../styles/styles.scss"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"

export default function Home({ data }) {
  return (
    <>
      <Layout>
        <Hero content={data.hero.edges} />
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
  }
`
