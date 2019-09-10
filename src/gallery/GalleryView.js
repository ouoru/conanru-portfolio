// takes an array of images/descriptions and renders the gallery grid

import React, { useState } from "react"
import { Content, Filters } from "../content/content"

import GalleryItem from "./components/GalleryItem"
import Row from "../components/Row"
import GalleryFilter from "./components/GalleryFilter"
import Body from "../components/Body"

export default function Gallery() {
  const [filter, setFilter] = useState(Filters.All)

  const items =
    filter === Filters.All
      ? Content
      : Content.filter(i => i.categories.includes(filter))

  return (
    <Body x="c">
      <GalleryFilter filter={filter} setFilter={setFilter} />
      <Row x="c" style={{ width: "100%", paddingTop: 15 }}>
        {items.map(item => (
          <GalleryItem key={item.key} {...item} />
        ))}
      </Row>
    </Body>
  )
}
