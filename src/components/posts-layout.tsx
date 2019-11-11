import React from "react"
import { format } from "date-fns"
import SEO from "./seo"

interface Props {
  pageContext: any
}

const Layout: React.FC<Props> = ({ children, pageContext }) => {
  return (
    <div className="mx-8">
      <SEO
        title={pageContext.frontmatter.title}
        description={pageContext.frontmatter.synopsis}
      />
      <article className="container m-auto max-w-3xl mt-16 mb-32">
        <header>
          <h1 className="leading-tight text-blue-600 font-serif text-4xl">
            {pageContext.frontmatter.title}
          </h1>
          <small className="text-gray-500 text-sm">
            {format(new Date(pageContext.frontmatter.date), "MMMM dd, yyyy")}
          </small>
        </header>

        <main className="article-content mt-8">{children}</main>
      </article>
    </div>
  )
}

export default Layout
