import React from "react"

const Hero = ({ content }) => {
  const { frontmatter } = content[0].node

  return (
    <>
      <section class="hero__container">
        <div class="hero__text__container">
          <h1 className="hero__text hero__font">
            {frontmatter.title}
            To discuss any projects or just to say hi{" "}
            <span class="contact__link">
              <a href="mailto:oliverballon1@gmail.com">please get in contact</a>
            </span>
          </h1>
        </div>
        <div class="contact__container">
          <div class="contact__links">
            <ul>
              <li>
                <a href="mailto:oliverballon1@gmail.com">Email</a>
              </li>
              <li>
                <a href="https://github.com/olbal">GitHub</a>
              </li>
              <li>
                <a href="http://www.twitter.com/not_wavving">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
