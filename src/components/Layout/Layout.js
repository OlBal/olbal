import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import { Helmet } from "react-helmet"
import Nav from "../Nav/Nav"
const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Oliver Ballon's Portfolio</title>
      </Helmet>
      <Nav />
      <MDXProvider
        components={{
          p: props => <p {...props} className="" />,
        }}
      >
        <main className="main">{children}</main>
      </MDXProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
