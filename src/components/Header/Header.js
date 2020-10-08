import React from "react"
import { Link } from "gatsby"
import { navLinks, siteTitle } from "../../config"

const Header = () => {
  const { menu } = navLinks

  return (
    <header className="flex bg items-center justify-between py-6 px-12 ">
      <Link to="/" aria-label="home">
        <p className="text font-regular">{siteTitle}</p>
      </Link>

      <nav className="flex items-center">
        {menu.map(({ name, url }, key) => {
          return (
            <Link
              className="text font-regular px-3 py-9 rounded "
              key={key}
              to={url}
            >
              {name}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
