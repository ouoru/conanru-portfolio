import React from "react"
import {
  palette,
  alignX,
  getLineHeight,
  getFontSize,
  margins,
} from "./Standards"

export default function CuteText(props) {
  const {
    align = "",
    color = "white",
    size = "m",
    lineSize = "m",
    style,
    text,
    underline = "white",
  } = props

  const textStyle = {
    fontSize: getFontSize(size),
    lineHeight: getLineHeight(lineSize),
    textAlign: alignX(align),
    color: palette(color),
    ...margins(props),
    marginLeft: 5,
    marginRight: 5,
    position: "relative",
    display: "flex",
    alignSelf: "flex-start",
    ...style,
  }

  return (
    <div className="--text" style={textStyle}>
      {underline && (
        <div
          style={{
            position: "absolute",
            backgroundColor: palette(underline),
            borderRadius: 2,
            left: -5,
            right: -5,
            bottom: -2,
            height: 10,
          }}
        />
      )}
      <div style={{ position: "relative" }}>{text}</div>
    </div>
  )
}
