import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Pointer from "../../assets/icons/pointer.svg"

const Hero = ({ content }) => {
  const { frontmatter } = content[0].node
  return (
    <>
      <section class="hero__container">
        <div class="hero__text__container">
          <h1 className="hero__text hero__font">
            {frontmatter.title}
            &nbsp;To discuss a project or just say hi
            <a class="contact__link" href="mailto:oliverballon1@gmail.com">
              &nbsp;please get in contact.
            </a>
          </h1>
          <div className="project__scroll">
            <p className="scroll" onClick={() => scrollTo("#projectone")}>
              Get To The Good Bit
            </p>
            <div
              className="pointer__container"
              onClick={() => scrollTo("#projectone")}
            >
              <Pointer />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
