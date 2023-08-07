import React from 'react'
// Styles
import styles from './CategoryBox.module.scss'
import font from '../../../assets/Font.module.scss'

function CatagoryBox(props) {
	const icon = require(`./assets/${props.icon}.svg`)

	return (
		<section className={styles.section}>
			<img className={styles.icon} src={icon} alt='icon' />
			<div className={styles.text}>
				<div className={font.h3}>{props.title}</div>
				<div className={font.gb1}>{props.text}</div>
			</div>
		</section>
	)
}

export default CatagoryBox
