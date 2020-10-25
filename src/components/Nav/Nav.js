import React from "react"
import { Link } from "gatsby"
import { navLinks } from "../../config"
import Twitter from "../../assets/icons/twitter.svg"
import Github from "../../assets/icons/iconmonstr-github-1.svg"
import Email from "../../assets/icons/iconmonstr-email-4.svg"

const Nav = () => {
  const { menu } = navLinks

  return (
    <>
      <header>
        <div className="nav__menu">
          <nav>
            <ul className="nav__list">
              <li className="nav__item">
                <Link className="logo" to="/">
                  <p> Oliver Ballon</p>
                </Link>
              </li>
              {menu.map(({ name, url }, key) => {
                return (
                  <li className="nav__item">
                    <Link className="nav-link" key={key} to={url}>
                      {name}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="icon__container">
              <a
                href="http://www.twitter.com/not_wavving"
                className="icon__link--nav"
              >
                <Twitter className="icon" />
              </a>
              <a href="http://www.github.com/olbal" className="icon__link--nav">
                <Github className="icon" />
              </a>
              <a
                href="mailto:oliverballon1@gmail.com"
                className="icon__link--nav"
              >
                <Email className="icon" />
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Nav
