import React from 'react'
// Styles
import styles from './TestimonialBox.module.scss'
import font from '../../../assets/Font.module.scss'
import classNames from 'classnames'

function TestimonialBox(props) {
	const author = require(`./assets/${props.author}.png`)

	return (
		<section className={styles.section}>
			<div className={styles.author}>
				<img src={author} alt='author' />
				<div>
					<div className={font.h4}>{props.name}</div>
					<div className={font.gb1}>{props.place}</div>
				</div>
			</div>
			<div className={classNames(styles.text, font.h4)}>{props.text}</div>
		</section>
	)
}

export default TestimonialBox
