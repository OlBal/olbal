import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import { Helmet } from "react-helmet"
import Nav from "../Nav/Nav"
import Footer from "../Footer"
const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Oliver Ballon's Portfolio</title>
      </Helmet>

      <MDXProvider
        components={{
          p: props => <p {...props} />,
        }}
      >
        <Nav />
        <main className="main">{children}</main>
        <Footer />
      </MDXProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
