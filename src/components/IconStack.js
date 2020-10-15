import React from "react"
import CSS from "../assets/icons/css3-plain.svg"
import HTML from "../assets/icons/html5-plain.svg"
import Illustrator from "../assets/icons/illustrator-line.svg"
import Laravel from "../assets/icons/laravel-plain.svg"
import MySQL from "../assets/icons/mysql-plain.svg"
import Photoshop from "../assets/icons/photoshop-line.svg"
import Reakt from "../assets/icons/react-original.svg"
import Redux from "../assets/icons/redux-original.svg"
import Sass from "../assets/icons/sass-original.svg"
import Gatsby from "../assets/icons/Gatsby-Monogram.svg"

const IconStack = () => {
  return (
    <div className="icon-stack__container">
      <div className="icon-stack">
        <HTML />
      </div>
      <div className="icon-stack">
        <CSS />
      </div>
      <div className="icon-stack">
        <Reakt />
      </div>
      <div className="icon-stack">
        <Redux />
      </div>
      <div className="icon-stack">
        <Gatsby />
      </div>
      <div className="icon-stack">
        <Laravel />
      </div>
      <div className="icon-stack">
        <MySQL />
      </div>
      <div className="icon-stack">
        <Sass />
      </div>
      <div className="icon-stack">
        <Photoshop />
      </div>
      <div className="icon-stack">
        <Illustrator />
      </div>
    </div>
  )
}

export default IconStack
