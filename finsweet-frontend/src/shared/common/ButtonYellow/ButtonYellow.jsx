import React from "react"
// Styles
import styles from "./ButtonYellow.module.scss"
import font from "../../../assets/Font.module.scss"

function ButtonYellow(props) {
  return (
    <button className={[styles.button, font.but1].join(" ")}>
      {props.text}
    </button>
  )
}

export default ButtonYellow
