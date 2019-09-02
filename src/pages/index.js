import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import Image from "../layout/image"
import SEO from "../layout/seo"

const HomeView = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      {`Hi, I’m Parth Soni. I Design & Develop Fun-Packed Video Games And
      Interactive Media!`}
    </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/work/">Go to page 2</Link>
  </Layout>
)

export default HomeView
