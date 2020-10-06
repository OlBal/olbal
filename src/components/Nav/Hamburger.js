import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MenuIcon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.8rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  align-items: center;

  div {
    width: 2rem;
    height: 0.2rem;
    background: black;
    transform-origin: 5%;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
const MenuLinks = styled.nav`
  transform: ${({ nav }) => (nav ? "translatex(0)" : "translatex(100%)")};
`

const Hamburger = () => {
  const [nav, showNav] = useState(false)

  return (
    <>
      <div className="container__hamburger">
        <MenuIcon className="menuIcon" nav={nav} onClick={() => showNav(!nav)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </div>
      <MenuLinks className="menu-links" nav={nav}>
        <ul className="nav__list-group">
          <li className="nav__list-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav__list-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav__list-item">
            <Link to="/about">Contact</Link>
          </li>
        </ul>
      </MenuLinks>
    </>
  )
}

export default Hamburger
