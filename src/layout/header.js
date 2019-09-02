import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Button, Text } from "../components/Common"

const Header = () => (
  <header
    style={{
      margin: `0 auto`,
      padding: `20px 80px`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: "0.5em",
        color: `#000`,
        textDecoration: `none`,
      }}
    >
      <Text text="CONAN RU" />
    </Link>
    <Link
      to="/"
      style={{
        marginLeft: "auto",
        fontSize: "0.5em",
        color: `#000`,
        textDecoration: `none`,
      }}
    >
      CONAN RU
    </Link>
    <Link
      to="/"
      style={{
        fontSize: "0.5em",
        color: `#000`,
        textDecoration: `none`,
      }}
    >
      CONAN RU
    </Link>
    <Button text="Contact" bg="red" />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
