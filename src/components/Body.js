import React from "react"
import {
  palette,
  paddingValues,
  alignX,
  justifyY,
  getRadiusPx,
  margins,
} from "./Standards"

export default function Body(props) {
  const {
    children,
    padding = "",
    radius = "z",
    className = "",
    y = "",
    x = "",
    style,
    color,
    bg,
  } = props

  const bodyStyle = {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    justifyContent: justifyY(y),
    alignItems: alignX(x),
    padding: paddingValues(padding),
    color: palette(color),
    backgroundColor: bg && palette(bg),
    borderRadius: getRadiusPx(radius),
    ...margins(props),
    ...style,
  }

  return (
    <div className={className} style={bodyStyle}>
      {children}
    </div>
  )
}
