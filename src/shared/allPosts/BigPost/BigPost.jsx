import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import styles from './BigPost.module.scss'
import font from '../../../assets/Font.module.scss'
// Utilys
import { scrollToTop } from '../../../utils/scrollToTop.js'

function BigPost(props) {
	const img = require(`./assets/${props.img}.png`)

	return (
		<Link className={styles.section} to={'/postpage'} onClick={scrollToTop}>
			<img src={img} alt='imagePost' />
			<div className={styles.content}>
				<div className={font.pc1}>{props.name}</div>
				<div className={styles.text}>
					<div className={font.h2}>{props.title}</div>
					<div className={font.gb1}>{props.subtitle}</div>
				</div>
			</div>
		</Link>
	)
}

export default BigPost
