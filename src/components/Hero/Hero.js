import React from "react"
import Twitter from "../../assets/icons/iconmonstr-twitter-1.svg"
import Github from "../../assets/icons/iconmonstr-github-1.svg"
import Email from "../../assets/icons/iconmonstr-email-4.svg"

const Hero = ({ content }) => {
  const { frontmatter } = content[0].node
  return (
    <>
      <section class="hero__container">
        <div class="hero__text__container">
          <h1 className="hero__text hero__font">
            {frontmatter.title}
            &nbsp;Find out more To discuss a project or say hi
            <a class="contact__link" href="mailto:oliverballon1@gmail.com">
              &nbsp;please get in contact.
            </a>
          </h1>
          <div className="icon__container">
            <a href="http://www.twitter.com/not_wavving" className="icon__link">
              <Twitter className="icon" />
            </a>
            <a href="http://www.github.com/olbal" className="icon__link">
              <Github className="icon" />
            </a>
            <a href="mailto:oliverballon1@gmail.com" className="icon__link">
              <Email className="icon" />
            </a>
          </div>
        </div>

        {/* <div class="contact__container">
            <div class="contact__links">
              <ul>
                <li>
                  <a
                    class="contact__link"
                    href="mailto:oliverballon1@gmail.com"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a class="contact__link" href="https://github.com/olbal">
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    class="contact__link"
                    href="http://www.twitter.com/not_wavving"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
      </section>
    </>
  )
}

export default Hero
