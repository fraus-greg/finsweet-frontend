import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import styles from './MediumPost.module.scss'
import font from './../../../assets/Font.module.scss'
// Utils
import { scrollToTop } from '../../../utils/scrollToTop.js'

function MediumPost(props) {
	const img = require(`./assets/${props.img}.png`)

	return (
		<Link className={styles.section} to='/postpage' onClick={scrollToTop}>
			<img src={img} alt='postImage' />
			<div className={styles.content}>
				<div className={font.l1}>
					By <span className={font.pl1}>{props.name}</span> | {props.date}
				</div>
				<div className={font.h3}>{props.title}</div>
				<div className={font.b1}>{props.text}</div>
			</div>
		</Link>
	)
}

export default MediumPost
