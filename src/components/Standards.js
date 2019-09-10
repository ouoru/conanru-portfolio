export function palette(color) {
  switch (color) {
    case "black":
      return "#262626"
    case "blackish":
      return "#444"
    case "darkgrey":
      return "#666"
    case "grey":
      return "#999"
    case "lightgrey":
      return "#bbb"
    case "whitish":
      return "#eee"
    case "white":
      return "#fff"
    case "red":
      return "#ef3f3f"
    case "orange":
      return "#fab005"
    case "online":
      return "#42b72a"
    default:
      return color
  }
}

export function pixelVal(size) {
  switch (size) {
    case "z":
      return 0
    case "xs":
      return 5
    case "s":
      return 10
    case "m":
      return 15
    case "l":
      return 30
    case "xl":
      return 40
    default:
      return size
  }
}

export function getFontSize(size) {
  switch (size) {
    case "xs":
      return 12
    case "s":
      return 16
    case "m":
      return 20
    case "l":
      return 32
    default:
      return 20
  }
}

export function getFontWeight(weight) {
  switch (weight) {
    case "l":
      return 400
    case "r":
      return 500
    case "sb":
      return 600
    case "b":
    default:
      return 700
  }
}

export function getRadiusPx(size) {
  switch (size) {
    case "s":
      return 4
    case "m":
      return 8
    case "l":
      return 12
    default:
      return 0
  }
}

export function getLineHeight(lineSize) {
  switch (lineSize) {
    case "s":
      return 0.85
    case "m":
      return 1
    case "l":
      return 1.1
    default:
      return 1.1
  }
}

export function paddingValues(sizes) {
  if (typeof sizes !== "object") {
    return ""
  }

  return pixelVal(sizes[0]) + "px " + pixelVal(sizes[1]) + "px"
}

export function alignX(align) {
  switch (align) {
    case "l":
      return "flex-start"
    case "r":
      return "flex-end"
    case "c":
      return "center"
    case "s":
      return "stretch"
    default:
      return ""
  }
}

export function justifyY(justify) {
  switch (justify) {
    case "t":
      return "flex-start"
    case "b":
      return "flex-end"
    case "c":
      return "center"
    case "s":
      return "stretch"
    default:
      return ""
  }
}

export function margins({
  before = "z",
  after = "z",
  above = "z",
  below = "z",
}) {
  return {
    marginBottom: pixelVal(below),
    marginTop: pixelVal(above),
    marginLeft: pixelVal(before),
    marginRight: pixelVal(after),
  }
}
