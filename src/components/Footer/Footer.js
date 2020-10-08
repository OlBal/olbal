import React from "react"
import { Link } from "gatsby"
import { siteTitle } from "../../config"

const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-6 px-12">
      <Link to="/" aria-label="home">
        <h1 className="text font-reuglar">{siteTitle}</h1>
      </Link>
    </footer>
  )
}

export default Footer
