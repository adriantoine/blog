import React from "react"

import Layout from "../components/layout"
import Avatar from "../components/avatar"
import SEO from "../components/seo"
import { IconGitHub, IconTwitter, IconLinkedIn } from "../components/icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="flex flex-col items-center mt-20">
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
    </div>
  </Layout>
)

export default IndexPage
