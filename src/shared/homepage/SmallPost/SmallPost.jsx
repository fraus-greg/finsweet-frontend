import React from "react"
// Styles
import styles from "./SmallPost.module.scss"
import font from "../../../assets/Font.module.scss"

function SmallPost(props) {
  return (
    <section className={styles.section}>
      <div className={font.l1}>
        By <span className={font.pl1}>{props.smallPostName}</span> |{" "}
        {props.smallPostDate}
      </div>
      <div className={[styles.text, font.h4].join(" ")}>{props.smallPostText}</div>
    </section>
  )
}

export default SmallPost
