/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

const Layout: React.FC = ({ children }) => (
  <div>
    <main className="container m-auto">{children}</main>
  </div>
)

export default Layout
