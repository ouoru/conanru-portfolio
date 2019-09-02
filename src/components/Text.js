import React from "react"
import {
  palette,
  alignX,
  getLineHeight,
  getFontSize,
  margins,
} from "./Standards"

export default function Text(props) {
  const {
    id,
    align = "",
    color = "black",
    size = "s",
    lineSize = "l",
    lineBreak = false,
    style,
    text,
  } = props

  const textStyle = {
    fontSize: getFontSize(size),
    lineHeight: getLineHeight(lineSize),
    textAlign: alignX(align),
    color: palette(color),
    ...margins(props),
    whiteSpace: lineBreak && "pre-line",
    ...style,
  }

  return (
    <div id={id} className="--text" style={textStyle}>
      {text}
    </div>
  )
}
