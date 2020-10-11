import React from "react"
import { Link } from "gatsby"

const Hero = ({ content }) => {
  const { frontmatter } = content[0].node

  return (
    <>
      <div className="hero__grid">
        <section class="hero__container">
          <h1 className="hero__text">{frontmatter.title}</h1>
        </section>
      </div>
    </>
  )
}

export default Hero
