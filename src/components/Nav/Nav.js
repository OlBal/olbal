import React from "react"
import { Link } from "gatsby"
import { navLinks } from "../../config"
import Twitter from "../../assets/icons/iconmonstr-twitter-1.svg"
import Github from "../../assets/icons/iconmonstr-github-1.svg"
import Email from "../../assets/icons/iconmonstr-email-4.svg"

const Nav = () => {
  const { menu } = navLinks

  return (
    <>
      <header>
        <div className="container__nav">
          <div className="nav__menu">
            <nav className="nav">
              {menu.map(({ name, url }, key) => {
                return (
                  <Link className="nav__item" key={key} to={url}>
                    {name}
                  </Link>
                )
              })}
              <Link to="/">
                <p className="logo"> Oliver Ballon</p>
              </Link>
            </nav>
            <div className="icon__container">
              <a
                href="http://www.twitter.com/not_wavving"
                className="icon__link"
              >
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
        </div>
      </header>
    </>
  )
}

export default Nav
