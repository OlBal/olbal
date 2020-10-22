import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
const About = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <>
      <div className="about__wrapper">
        <div className="about__container">
          <section className="spacing-about about__left-container">
            <figure>
              <Img
                alt="Oliver Ballon"
                className="about-me__image"
                fluid={frontmatter.screenshot.childImageSharp.fluid}
              />
              <figcaption className="about-image-caption about__section__text">
                I promise I do have eyes.
              </figcaption>
            </figure>
            <div className="about__text">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </section>

          <section className="middle__container spacing-about">
            <p className="about__section__text">
              <figure className="figure__container">
                <figcaption className="column-title">
                  <strong>
                    <em>Contact</em>
                  </strong>
                </figcaption>
                <ul>
                  <li>
                    <a href="mailto:oliverballon1@gmail.com">
                      oliverballon1@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="http://www.twitter.com/notwavving">@Not_Wavving</a>
                  </li>
                </ul>
              </figure>
              <figure className="figure__container">
                <figcaption>
                  <strong>
                    <em>Research & Link Collection</em>
                  </strong>
                </figcaption>
                <ul>
                  <li>
                    <a href="http://notballoon.tumblr.com">Tumblr</a>
                  </li>
                </ul>
              </figure>
              <figure className="figure__container">
                This website is typeset in&nbsp;
                <strong>
                  <a
                    className="type__link"
                    href=" https://www.recursive.design/"
                  >
                    Recursive
                  </a>
                </strong>
                &nbsp;by
                <strong>
                  <a className="type__link" href="https://www.arrowtype.com/">
                    &nbsp;Arrow Type
                  </a>
                </strong>
              </figure>
            </p>
          </section>

          <section className="about__right-container spacing-about">
            <p className="about__section__text">
              <figure className="figure__container">
                <figcaption>
                  <strong>
                    <em>Education</em>
                  </strong>
                </figcaption>
                <ul>
                  <li>
                    <em>
                      <strong>2020</strong>
                    </em>
                    &nbsp; DevelopMe Coding Fellowship
                  </li>
                  <li>
                    <em>
                      <strong>2014</strong>
                    </em>
                    &nbsp; Central Saint Martins (BA Graphic Design)
                  </li>
                  <li>
                    <em>
                      <strong>2011</strong>
                    </em>
                    &nbsp; Central Saint Martins (Foundation Diploma)
                  </li>
                </ul>
              </figure>
            </p>

            <div className="row">
              <div className="split-col">
                <p className="about__section__text col-1">
                  <strong>
                    <em>Skills</em>
                  </strong>
                  <ul>
                    <li>React</li>
                    <li>Redux </li>
                    <li>Gatsby</li>
                    <li>Javascript</li>
                    <li>Laravel</li>
                    <li>PHP</li>
                    <li>SASS/SCSS</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                    <li>GraphQL</li>
                    <li>MySQL</li>
                    <li>OOP</li>
                    <li>OOCSS</li>
                  </ul>
                </p>
              </div>
              <div className="split-col">
                <p className="about__section__text col-2">
                  <strong>
                    <em>Tools</em>
                  </strong>
                  <ul>
                    <li>Git</li>
                    <li>Gulp</li>
                    <li>Adobe Creative Suite</li>
                    <li>Figma</li>
                    <li>Balsamiq</li>
                  </ul>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default About
