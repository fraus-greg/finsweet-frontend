import React from 'react'
// Styles
import styles from './AuthorBox.module.scss'
import font from '../../../assets/Font.module.scss'
// Images
import icon1 from './assets/icon1.svg'
import icon2 from './assets/icon2.svg'
import icon3 from './assets/icon3.svg'
import icon4 from './assets/icon4.svg'

function AuthorBox(props) {
	const authorBoxImg = require(`./assets/${props.authorBoxImg}.png`)

	return (
		<section className={styles.section}>
			<img className={styles.author} src={authorBoxImg} alt='icon' />
			<div className={styles.text}>
				<div className={font.h3}>{props.authorBoxName}</div>
				<div className={font.gb2}>{props.authorBoxDescription}</div>
			</div>
			<div className={styles.icons}>
				<a className={styles.icon} href='/'>
					<img src={icon1} alt='icon' />
				</a>
				<a className={styles.icon} href='/'>
					<img src={icon2} alt='icon' />
				</a>
				<a className={styles.icon} href='/'>
					<img src={icon3} alt='icon' />
				</a>
				<a className={styles.icon} href='/'>
					<img src={icon4} alt='icon' />
				</a>
			</div>
		</section>
	)
}

export default AuthorBox
