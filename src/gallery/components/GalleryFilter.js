// a row of keywords to filter the gallery by

import React from "react"
import { Filters } from "../../content/content"
import Row from "../../components/Row"
import Body from "../../components/Body"
import Text from "../../components/Text"

export default function GalleryFilter(props) {
  const renderFilter = filter => {
    return (
      <Body key={filter} style={{ padding: "1vw" }}>
        <Text text={filter} weight="r" />
      </Body>
    )
  }

  return (
    <Row style={{ paddingTop: 12, paddingBottom: 12, width: "88vw" }}>
      {Object.keys(Filters).map(renderFilter)}
    </Row>
  )
}
