import React from "react"
import { withPrefix } from "gatsby"
import Twitter from "../assets/icons/twitter.svg"
import Github from "../assets/icons/iconmonstr-github-1.svg"
import Email from "../assets/icons/iconmonstr-email-4.svg"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container__footer">
          <div className="footer__menu">
            <div className="footer__icon__container">
              <a
                className="nav__item"
                rel="noopener noreferrer"
                href={withPrefix("/OliverBallonCV.pdf")}
                target="_blank"
              >
                CV
              </a>
              <a
                href="http://www.twitter.com/not_wavving"
                className="icon__link--nav"
              >
                <Twitter className="footer__icon" />
              </a>
              <a href="http://www.github.com/olbal" className="icon__link--nav">
                <Github className="footer__icon" />
              </a>
              <a
                href="mailto:oliverballon1@gmail.com"
                className="icon__link--nav"
              >
                <Email className="footer__icon" />
              </a>
            </div>
            <div className="copyright">
              <strong>
                <p> Copyright © 2020</p>
              </strong>
              <p> Oliver Ballon</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
