import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Components
import SmallPost from '../../shared/homepage/SmallPost/SmallPost'
import CategoryBox from '../../shared/common/CategoryBox/CategoryBox'
import AuthorBox from '../../shared/common/AuthorBox/AuthorBox'
import TestimonialBox from '../../shared/homepage/TestimonialBox/TestimonialBox'
import JoinTeam from '../../shared/common/JoinTeam/JoinTeam'
import ButtonYellow from '../../shared/common/ButtonYellow/ButtonYellow'
// Styles
import styles from './Homepage.module.scss'
import font from '../../assets/Font.module.scss'
// Images
import featuredPost from './assets/featuredPost.png'
import startedBackground from './assets/startedBackground.png'
import feauterLogo1 from './assets/featuredLogo1.svg'
import feauterLogo2 from './assets/featuredLogo2.svg'
import feauterLogo3 from './assets/featuredLogo3.svg'
import feauterLogo4 from './assets/featuredLogo4.svg'
import feauterLogo5 from './assets/featuredLogo5.svg'
import testimonialArrow from './assets/testimonialArrow.svg'
// Utils
import classNames from 'classnames'
import { scrollToTop } from './../../utils/scrollToTop.js'

function Homepage(props) {
	const smallPostslist = props.smallPostslist.map((item) => {
		return <SmallPost key={item.id} {...item} />
	})

	const authorBoxesList = props.authorBoxesList.map((item) => {
		return <AuthorBox key={item.id} {...item} />
	})

	const catagoryBoxesList = props.catagoryBoxesList.map((item) => {
		return <CategoryBox key={item.id} {...item} />
	})

	const [activeSlider, setActiveSlider] = useState(0)

	function sliderForward() {
		if (activeSlider !== 2) {
			setActiveSlider(activeSlider + 1)
		} else {
			setActiveSlider(0)
		}
	}

	function sliderBackward() {
		if (activeSlider !== 0) {
			setActiveSlider(activeSlider - 1)
		} else {
			setActiveSlider(2)
		}
	}

	const sliderList = [
		{
			text: 'Finsweet has helped my team and I stay on the same page. Previously, we were all over the board. Using Finsweet has definitely saved us time and money.',
			author: 'author1',
			name: 'Jonathan Vallem',
			place: 'New york, USA'
		},
		{
			text: 'I would recommend Finsweet for anyone trying to get the word out about their business. It has saved me so much time!',
			author: 'author2',
			name: 'Luke Spencer',
			place: 'York, UK'
		},
		{
			text: 'Everyone’s on the same page. Many of our people are not very organized naturally, so Finsweet is a godsend!',
			author: 'author3',
			name: 'Greg Oden',
			place: 'Kiev, Ua'
		}
	]
	return (
		<>
			<main>
				<section className={styles.step}>
					<div className={styles.text}>
						<div className={font.wc1}>
							POSTED ON <span className={font.wc3}>STARTUP</span>
						</div>
						<div className={font.wh0}>
							Step-by-step guide to choosing great font pairs
						</div>
						<div className={styles.information}>
							<div className={font.wb1}>
								By <span className={font.yb1}>James West</span> | May 23, 2022
							</div>
							<div className={font.wb1}>
								Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident.
							</div>
						</div>
					</div>
					<ButtonYellow text='Read More >' />
				</section>
				<section className={styles.homepagePost}>
					<div className={styles.featuredPost}>
						<div className={font.h2}>Featured Post</div>
						<div className={styles.content}>
							<img src={featuredPost} alt='featuredPost' />
							<div className={styles.text}>
								<div className={font.l1}>
									By <span className={font.pl1}>{props.featuredPostName}</span>{' '}
									| {props.featuredPostDate}
								</div>
								<div className={font.h3}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor.
								</div>
								<div className={classNames(styles.subtitle, font.gb1)}>
									Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint
									occaecat cupidatat non proident.
								</div>
							</div>
							<ButtonYellow text='Read More >' />
						</div>
					</div>
					<div className={styles.allPosts}>
						<div className={styles.header}>
							<div className={font.h2}>All Posts</div>
							<Link className={font.pb1} to='/allposts' onClick={scrollToTop}>
								View All
							</Link>
						</div>
						<div className={styles.postes}>{smallPostslist}</div>
					</div>
				</section>
				<section className={styles.description}>
					<div className={styles.help}>
						<div className={styles.lines}>
							<div className={styles.line1}></div>
							<div className={styles.line2}></div>
						</div>
						<div className={styles.content}>
							<div className={styles.contentBox}>
								<div className={font.c1}>about us</div>
								<div className={styles.text}>
									<div className={font.h2}>
										We are a community of content writers who share their
										learnings
									</div>
									<div className={font.gb1}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</div>
									<a className={font.pl1} href='/'>
										Read More {'>'}
									</a>
								</div>
							</div>
							<div className={styles.contentBox}>
								<div className={font.c1}>our mision</div>
								<div className={styles.text}>
									<div className={font.h3}>
										We are a community of content writers who share their
										learnings
									</div>
									<div className={font.gb1}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</div>
									<a className={font.pl1} href='/'>
										Read More {'>'}
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={styles.category}>
					<div className={font.h2}>Choose A Category</div>
					<div className={styles.help}>{catagoryBoxesList}</div>
				</section>
				<section className={styles.started}>
					<div className={styles.help}>
						<img
							className={styles.img}
							src={startedBackground}
							alt='background'
						/>
						<div className={styles.content}>
							<div className={font.c1}>Why we started</div>
							<div className={styles.textHelp}>
								<div className={styles.text}>
									<div className={font.h1}>
										It started out as a simple idea and evolved into our passion
									</div>
									<div className={font.gb1}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip.
									</div>
								</div>
								<ButtonYellow text='Discover our story >' />
							</div>
						</div>
					</div>
				</section>
				<section className={styles.authors}>
					<div className={font.h2}>List of Authors</div>
					<div className={styles.content}>{authorBoxesList}</div>
				</section>
				<section className={styles.featured}>
					<div>
						<div className={font.gb2}>We are</div>
						<div className={font.gh4}>Featured in</div>
					</div>
					<div className={styles.content}>
						<img className={styles.logo} src={feauterLogo1} alt='logo' />
						<img className={styles.logo} src={feauterLogo2} alt='logo' />
						<img className={styles.logo} src={feauterLogo3} alt='logo' />
						<img className={styles.logo} src={feauterLogo4} alt='logo' />
						<img className={styles.logo} src={feauterLogo5} alt='logo' />
					</div>
				</section>
				<section className={styles.testimonials}>
					<div className={styles.text}>
						<div className={font.c1}>TESTIMONIALs</div>
						<div className={font.h2}>What people say about our blog</div>
						<div className={font.b1}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor.
						</div>
					</div>
					<div className={styles.line}></div>
					<TestimonialBox
						text={sliderList[activeSlider].text}
						author={sliderList[activeSlider].author}
						name={sliderList[activeSlider].name}
						place={sliderList[activeSlider].place}
					/>
					<div className={styles.arrows}>
						<div className={styles.button} onClick={() => sliderBackward()}>
							<img
								className={styles.button1Img}
								src={testimonialArrow}
								alt='arrow'
							/>
						</div>
						<div className={styles.button} onClick={() => sliderForward()}>
							<img src={testimonialArrow} alt='arrow' />
						</div>
					</div>
				</section>
				<JoinTeam />
			</main>
		</>
	)
}

export default Homepage
