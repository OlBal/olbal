import React from "react"
import { Link } from "gatsby"
import { navLinks, siteTitle } from "../../config"

const Header = () => {
  const { menu } = navLinks

  return (
    <header className="header">
      <Link to="/" aria-label="home">
        <p className="">{siteTitle}</p>
      </Link>

      <nav className="nav__list-group">
        {menu.map(({ name, url }, key) => {
          return (
            <Link className="nav__list-item " key={key} to={url}>
              {name}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
