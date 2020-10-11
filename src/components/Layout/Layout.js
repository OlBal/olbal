import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <MDXProvider
      components={{
        p: props => <p {...props} className="mt-4" />,
      }}
    >
      <div className="">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
