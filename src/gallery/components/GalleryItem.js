// item of a gallery
import React from "react"
import Body from "../../components/Body"

export default function GalleryItem(props) {
  return (
    <Body style={{ width: "22vw", height: "22vw", padding: "1vw" }}>
      <img
        src={props.source}
        style={{ width: "20vw", height: "20vw", objectFit: "cover" }}
      />
    </Body>
  )
}
