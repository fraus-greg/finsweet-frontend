import React from "react"
// Components
import ButtonYellow from "../ButtonYellow/ButtonYellow"
// Styles
import styles from "./JoinTeam.module.scss"
import font from "../../../assets/Font.module.scss"

function JoinTeam(props) {
  return (
    <section className={styles.section}>
      <div className={styles.help}>
        <div className={styles.text}>
          <div className={font.h2}>
            Join our team to be a part of our story
          </div>
          <div className={font.gb1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt.
          </div>
        </div>
        <ButtonYellow text="Join Now" />
      </div>
    </section>
  )
}

export default JoinTeam
