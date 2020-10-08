import React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { navLinks } from "../../config/index"

const Hero = ({ content }) => {
  const { frontmatter } = content[0].node

  return (
    <>
      <div className="flex items-center min-h-screen">
        <section class="mx-auto container w-4/5">
          <p className="font-hero ">{frontmatter.title}</p>
        </section>
      </div>
    </>
  )
}

export default Hero
