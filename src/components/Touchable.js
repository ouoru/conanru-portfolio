import React from "react"

export default function Touchable(props) {
  const { onClick, modal, children, disabled, style } = props

  const handleClick = e => {
    if (disabled) return

    if (onClick) {
      onClick(e)
      return
    }
  }

  return (
    <div
      className={
        disabled ? "--touchable-frozen" : onClick || modal ? "--touchable" : ""
      }
      onClick={handleClick}
      style={style}
    >
      {children}
    </div>
  )
}
