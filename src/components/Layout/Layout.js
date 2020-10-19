import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import Nav from "../Nav/Nav"
const Layout = ({ children }) => {
  return (
    <MDXProvider
      components={{
        p: props => <p {...props} className="" />,
      }}
    >
      <div className="">
        <Nav />
        <main>{children}</main>
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
