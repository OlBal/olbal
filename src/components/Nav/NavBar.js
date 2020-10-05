import React from "react"
import styled from "styled-components"
import Hamburger from "./Hamburger"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <>
      <Hamburger />
      <nav className="nav nav__menu">
        <figure>Oliver Ballon</figure>
      </nav>
    </>
  )
}

export default NavBar
