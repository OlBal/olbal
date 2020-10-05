import React from "react"
import styled from "styled-components"
import Hamburger from "./Hamburger"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <>
      <div className="container__nav">
        <div className="nav__menu">
          <p className="logo"> oliver ballon</p>
          <Hamburger className="hamburger" />
        </div>
      </div>
    </>
  )
}

export default NavBar
