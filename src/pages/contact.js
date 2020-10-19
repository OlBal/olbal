import React from "react"
import "../styles/styles.scss"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Contact from "../components/Contact"
export default function Home({ data }) {
  return (
    <>
      <Layout>
        <Contact content={data.contact.edges} />
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
            title
            caption
          }
        }
      }
    }
  }
`
