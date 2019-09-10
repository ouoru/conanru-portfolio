import React from "react"
import {
  palette,
  alignX,
  getLineHeight,
  getFontSize,
  getFontWeight,
  margins,
} from "./Standards"

export default function Text(props) {
  const {
    id,
    align = "",
    color = "black",
    size = "s",
    weight = "m",
    lineSize = "l",
    lineBreak = false,
    style,
    text,
  } = props

  const textStyle = {
    fontSize: getFontSize(size),
    fontWeight: getFontWeight(weight),
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
