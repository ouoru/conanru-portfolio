import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Row from "../components/Row"
import Body from "../components/Body"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

function LandingView() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "portrait.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Row wrap={false} x="c" y="c" style={{ height: "100vh" }}>
      <Body
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "22%",
          backgroundColor: "#FFB70F",
        }}
      ></Body>
      <Body style={{ flex: 0.47 }}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </Body>
      <Body style={{ flex: 0.42 }}>
        <h1 style={{ color: "#000" }}>
          {`Hi, I’m Conan Ru.\nI Design & Develop Fun-Packed Video Games And
      Interactive Media!`}
        </h1>
      </Body>
    </Row>
  )
}

export default LandingView
