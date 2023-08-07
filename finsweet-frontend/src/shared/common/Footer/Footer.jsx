import React from 'react'
import { Link } from 'react-router-dom'
// Components
import ButtonYellow from '../ButtonYellow/ButtonYellow'
// Styles
import styles from './Footer.module.scss'
import font from '../../../assets/Font.module.scss'
// Imgages
import logo from './assets/logo.svg'
import facebook from './assets/facebook.svg'
import twitter from './assets/twitter.svg'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'
// Utils
import { scrollToTop } from '../../../utils/scrollToTop.js'
import classNames from 'classnames'

function Footer(props) {
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
		<footer className={styles.footer}>
			<nav>
				<img src={logo} alt='logo' />
				<nav className={styles.links}>{navList}</nav>
			</nav>
			<div className={styles.widget}>
				<div className={classNames(styles.text, font.wh2)}>
					Subscribe to our news letter to get latest updates and news
				</div>
				<div className={styles.form}>
					<input
						className={font.wb1o}
						type='email'
						placeholder='Enter Your Email'
					/>
					<ButtonYellow text='Subscribe' />
				</div>
			</div>
			<div className={styles.contact}>
				<div className={classNames(styles.text, font.wb1o)}>
					Finstreet 118 2561 Fintown Hello@finsweet.com 020 7993 2905
				</div>
				<div className={styles.links}>
					<a href='https://www.facebook.com/'>
						<img src={facebook} alt='facebook' />
					</a>
					<a href='https://www.twitter.com/'>
						<img src={twitter} alt='twitter' />
					</a>
					<a href='https://www.instagram.com/'>
						<img src={instagram} alt='instagram' />
					</a>
					<a href='https://www.linkedin.com/'>
						<img src={linkedin} alt='linkedin' />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
