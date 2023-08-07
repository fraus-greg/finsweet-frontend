import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import styles from './Header.module.scss'
import font from '../../../assets/Font.module.scss'
// Images
import logo from './assets/logo.svg'
// Utils
import classNames from 'classnames'
import { scrollToTop } from '../../../utils/scrollToTop.js'

function Header(props) {
	const navList = props.navListInformation.map((item) => {
		return (
			<Link
				className={font.wb1}
				to={item.path}
				key={item.id}
				onClick={scrollToTop}
			>
				{item.name}
			</Link>
		)
	})

	return (
		<header className={styles.header}>
			<img src={logo} alt='logo' />
			<div className={styles.content}>
				<nav>{navList}</nav>
				<button className={classNames(styles.button, font.but1)}>
					Subscribe
				</button>
			</div>
		</header>
	)
}

export default Header
