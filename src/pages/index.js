import React from "react"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import LandingView from "../landing/LandingView"
import GalleryView from "../gallery/GalleryView"

const HomeView = () => (
  <Layout>
    <SEO title="Conan Ru" />
    <LandingView />
    <GalleryView />
  </Layout>
)

export default HomeView
