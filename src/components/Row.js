import React from "react"
import {
  palette,
  paddingValues,
  alignX,
  justifyY,
  getRadiusPx,
  margins,
} from "./Standards"

export default function Row(props) {
  const {
    children,
    radius = "z",
    y = "",
    x = "",
    className = "",
    style,
    wrap = true,
    color,
    bg,
    onClick,
  } = props

  const bodyStyle = {
    justifyContent: alignX(x),
    alignItems: justifyY(y),
    borderRadius: getRadiusPx(radius),
    backgroundColor: bg && palette(bg),
    color: palette(color || "whitish"),
    flexWrap: wrap ? "wrap" : "nowrap",
    display: "flex",
    flexDirection: "row",
    position: "relative",
    ...margins(props),
    ...style,
  }

  return (
    <div
      className={className}
      style={bodyStyle}
      onClick={event => onClick && onClick(event)}
    >
      {children}
    </div>
  )
}
