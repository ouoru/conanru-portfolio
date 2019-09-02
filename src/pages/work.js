import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

const WorkFilter = {
  None: "none",
  Tattle: "tattle",
  Personal: "personal",
}

const WorkView = () => {
  const [filter, setFilter] = useState(WorkFilter.none)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default WorkView
