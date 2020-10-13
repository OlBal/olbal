import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"

const Layout = ({ children }) => {
  return (
    <MDXProvider
      components={{
        p: props => <p {...props} className="" />,
      }}
    >
      <div className="">
        <main>{children}</main>
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
