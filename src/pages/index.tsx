import React from "react"

import Layout from "../components/layout"
import Avatar from "../components/avatar"
import SEO from "../components/seo"
import { IconGitHub, IconTwitter, IconLinkedIn } from "../components/icons"
import { useStaticQuery, graphql, Link } from "gatsby"

const IndexPage = () => {
  const res = useStaticQuery(
    graphql`
      query {
        allMdx {
          edges {
            node {
              frontmatter {
                title
                path
                synopsis
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <div className="flex flex-col items-center mt-20">
        <aside className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-32 border-gray-800 border-4">
            <Avatar />
          </div>

          <h1 className="mt-2">
            Hi! I'm{" "}
            <a className="font-bold" href="http://adriantoine.com">
              Adrien
            </a>
            !
          </h1>

          <div className="flex justify-between w-40 mt-6">
            <a
              className="hover:text-blue-500"
              href="https://twitter.com/adriantoine"
              target="_blank"
            >
              <IconTwitter className="h-8 w-8" />
            </a>
            <a
              className="hover:text-black"
              href="https://github.com/adriantoine"
              target="_blank"
            >
              <IconGitHub className="h-8 w-8" />
            </a>
            <a
              className="hover:text-blue-700"
              href="https://linkedin.com/in/adriantoine"
              target="_blank"
            >
              <IconLinkedIn className="h-8 w-8" />
            </a>
          </div>
        </aside>

        <div className="mt-16 max-w-xl">
          <main>
            {res.allMdx.edges.map((post: any) => (
              <article key={post.node.frontmatter.path} className="mb-16">
                <header className="leading-tight text-blue-600 font-serif text-3xl">
                  <Link
                    className="no-underline"
                    to={post.node.frontmatter.path}
                  >
                    {post.node.frontmatter.title}
                  </Link>
                </header>
                <small className="text-gray-500 text-sm">
                  {post.node.frontmatter.date}
                </small>
                <p className="block mt-2 font-serif">
                  {post.node.frontmatter.synopsis}
                </p>
              </article>
            ))}
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
