import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MenuIcon = styled.button`
position:fixed;
top:2rem;
right;2rem;
display:flex;
flex-direction:column;
justify-content:space-around;
width:1.5rem;
height:1.5rem;
background:transparent;
border:none;
cursor:pointer;
z-index:5;

div{
    width:1.5rem;
    height:.2rem;
    background:black;
    border-radius:.4rem;
    transform-origin:1px;
    position:relative;
    transition:opacity 300ms, transform 300ms;

    :first-child{
        transform:${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")}
    }

    :nth-child(2){
        opacity:${({ nav }) => (nav ? "0" : "1")}
    }

:nth-child(3){
        transform:${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")}
    }
}

`
const MenuLinks = styled.nav`
display:flex;
flex-direction:column;
justify-content-center;
align-items:center;
text-align:center;
height:100vh;
width:100%;
background:#D7D7D7;
position:absolute;
top:0;
right:0;
transform:${({ nav }) => (nav ? "translatex(0)" : "translatex(100%)")};
transition:transform 300ms;

a{
font-size:1.5rem;
transition:color 300ms;

    :hover{
        color:#6ab4ff;
    }
}


`

const Hamburger = () => {
  const [nav, showNav] = useState(false)

  return (
    <div>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuLinks nav={nav}>
        <ul className="nav__list-group">
          <li className="nav__list-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav__list-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </MenuLinks>
    </div>
  )
}

export default Hamburger
