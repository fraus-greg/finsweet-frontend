import React from 'react'
// Components
import AuthorBox from '../../shared/common/AuthorBox/AuthorBox.jsx'
import JoinTeam from '../../shared/common/JoinTeam/JoinTeam.jsx'
// Styles
import styles from './AboutUs.module.scss'
import font from '../../assets/Font.module.scss'
// Images
import teamOfCreatives from './assets/teamOfCreatives.png'
import whyStarted from './assets/whyStarted.png'
// Utils
import classNames from 'classnames'

function AboutUs(props) {
	const authorBoxesList = props.authorBoxesList.map((item) => {
		return <AuthorBox key={item.id} {...item} />
	})

	return (
		<main>
			<section className={styles.initial}>
				<div className={styles.content}>
					<div className={font.c4}>ABOUT US</div>
					<div className={font.h1}>
						We are a team of content writers who share their learnings
					</div>
				</div>
				<div className={classNames(font.gb1, styles.text)}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</div>
			</section>
			<section className={styles.second}>
				<div className={styles.amount}>
					<div className={styles.absolute}>
						<div className={styles.counter}>
							<div className={styles.number}>
								<div className={font.h0}>12+</div>
								<div className={font.b1}>Blogs Published</div>
							</div>
							<div className={styles.number}>
								<div className={font.h0}>18K+</div>
								<div className={font.b1}>Views on Finsweet</div>
							</div>
							<div className={styles.number}>
								<div className={font.h0}>30K+</div>
								<div className={font.b1}>Total active Users</div>
							</div>
						</div>
						<div className={styles.line}>
							<div className={styles.line1}></div>
							<div className={styles.line2}></div>
						</div>
					</div>
				</div>
				<div className={styles.ourMision}>
					<div className={styles.content}>
						<div className={font.c1}>Our mision</div>
						<div className={styles.text}>
							<div className={font.h3}>
								Creating valuable content for creatives all around the world
							</div>
							<div className={font.gb1}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
								blandit massa enim nec. Scelerisque viverra mauris in aliquam
								sem. At risus viverra adipiscing at in tellus.
							</div>
						</div>
					</div>
					<div className={styles.content}>
						<div className={font.c1}>Our Vision</div>
						<div className={styles.text}>
							<div className={font.h3}>
								A platform that empowers individuals to improve
							</div>
							<div className={font.gb1}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
								blandit massa enim nec. Scelerisque viverra mauris in aliquam
								sem. At risus viverra adipiscing at in tellus.
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.aboutBlock}>
				<div className={styles.firstAbsolute}></div>
				<div className={styles.text}>
					<div className={font.h2}>Our team of creatives</div>
					<div className={font.h4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt.
					</div>
					<div className={font.b1}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat.
					</div>
				</div>
				<img src={teamOfCreatives} alt='people with macbook' />
			</section>
			<section
				className={classNames(styles.aboutBlock, styles.secondAboutBlock)}
			>
				<div className={styles.secondAbsolute}></div>
				<img src={whyStarted} alt='hands' />
				<div className={styles.text}>
					<div className={font.h2}>Why we started this Blog</div>
					<div className={font.h4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt.
					</div>
					<div className={font.b1}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat.
					</div>
				</div>
			</section>
			<section className={styles.authors}>
				<div className={font.h2}>List of Authors</div>
				<div className={styles.content}>{authorBoxesList}</div>
			</section>
			<JoinTeam />
		</main>
	)
}

export default AboutUs
