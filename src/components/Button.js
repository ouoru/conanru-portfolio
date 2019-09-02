import React from "react"

import { Row, Text, Touchable } from "./Common"
import { getRadiusPx, margins } from "./Standards"

export default function Button(props) {
  const {
    color = "white",
    text,
    bg = "blackish",
    align = "c",
    radius = "l",
    size = "s",
    padding = ["s", "m"],
    style,
    onClick,
    disabled,
    modal,
    params,
  } = props

  const viewStyle = {
    ...margins(props),
    ...style,
    position: "relative",
    alignItems: "center",
  }

  const bodyStyle = {
    borderRadius: getRadiusPx(radius),
  }

  return (
    <Touchable
      onClick={onClick}
      modal={modal}
      params={params}
      disabled={disabled}
      style={viewStyle}
    >
      <Row
        bg={bg}
        x={align}
        radius={radius}
        padding={padding}
        style={bodyStyle}
      >
        <Text text={text} color={color} size={size} />
      </Row>
    </Touchable>
  )
}
