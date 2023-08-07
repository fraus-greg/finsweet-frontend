import React from 'react'
// Components
import MediumPost from '../../shared/bigPost/MediumPost/MediumPost.jsx'
import JoinTeam from './../../shared/common/JoinTeam/JoinTeam'
// Styles
import styles from './PostPage.module.scss'
import font from './../../assets/Font.module.scss'
// Images
import pointer from './assets/pointer.svg'

function PostPage(props) {
	const mediumPostList = props.mediumPostsListInformation.map((item) => {
		return <MediumPost key={item.id} {...item} />
	})

	const authorImg = require(`./assets/${props.authorImg}.png`)
	const postTagImg = require(`./assets/${props.postTagImg}.svg`)
	const postImg = require(`./assets/${props.postImg}.png`)

	return (
		<main>
			<section className={styles.post}>
				<div className={styles.heading}>
					<div className={styles.author}>
						<img src={authorImg} alt='author' />
						<div>
							<div className={font.ph3}>{props.authorName}</div>
							<div className={font.gb1}>Posted on {props.authorDate}</div>
						</div>
					</div>
					<div className={styles.help}>
						<div className={font.h1}>{props.headingText}</div>
						<div className={styles.postTag}>
							<img src={postTagImg} alt='img' />
							<div className={font.h4}>{props.postTag}</div>
						</div>
					</div>
				</div>
				<img className={styles.postImg} src={postImg} alt='postTagImg' />
				<div className={styles.content}>
					<div className={styles.textBox}>
						<div className={font.h2}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod.
						</div>
						<div className={styles.text}>
							<div className={font.gb1}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
								blandit massa enim nec. Scelerisque viverra mauris in aliquam
								sem. At risus viverra adipiscing at in tellus. Sociis natoque
								penatibus et magnis dis parturient montes. Ridiculus mus mauris
								vitae ultricies leo. Neque egestas congue quisque egestas diam.
								Risus in hendrerit gravida rutrum quisque non.
							</div>
						</div>
					</div>
					<div className={styles.textBox}>
						<div className={font.h2}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod.
						</div>
						<div className={styles.text}>
							<div className={font.gb1}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
								blandit massa enim nec. Scelerisque viverra mauris in aliquam
								sem. At risus viverra adipiscing at in tellus. Sociis natoque
								penatibus et magnis dis parturient montes. Ridiculus mus mauris
								vitae ultricies leo. Neque egestas congue quisque egestas diam.
								Risus in hendrerit gravida rutrum quisque non.
							</div>
							<div className={font.gb1}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
								blandit massa enim nec. Scelerisque viverra mauris in aliquam
								sem. At risus viverra adipiscing at in tellus. Sociis natoque
								penatibus et magnis dis parturient montes. Ridiculus mus mauris
								vitae ultricies leo. Neque egestas congue quisque egestas diam.
								Risus in hendrerit gravida rutrum quisque non.
							</div>
							<ul className={styles.list}>
								<li className={font.h4o}>
									<img src={pointer} alt='pointer' /> Lorem ipsum dolor sit amet
								</li>
								<li className={font.h4o}>
									<img src={pointer} alt='pointer' /> Non blandit massa enim nec
									scelerisque
								</li>
								<li className={font.h4o}>
									<img src={pointer} alt='pointer' /> Neque egestas congue
									quisque egestas
								</li>
							</ul>
							<div className={font.gb1}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
								blandit massa enim nec. Scelerisque viverra mauris in aliquam
								sem. At risus viverra adipiscing at in tellus. Sociis natoque
								penatibus et magnis dis parturient montes. Ridiculus mus mauris
								vitae ultricies leo. Neque egestas congue quisque egestas diam.
								Risus in hendrerit gravida rutrum quisque non.
							</div>
						</div>
						<div className={styles.textBox}>
							<div className={font.h2}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod.
							</div>
							<div className={styles.text}>
								<div className={font.gb1}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Non blandit massa enim nec. Scelerisque viverra mauris in
									aliquam sem. At risus viverra adipiscing at in tellus. Sociis
									natoque penatibus et magnis dis parturient montes. Ridiculus
									mus mauris vitae ultricies leo. Neque egestas congue quisque
									egestas diam. Risus in hendrerit gravida rutrum quisque non.
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.mediumPosts}>
				<div className={styles.help}>
					<div className={font.h2}>What to read next</div>
					<div className={styles.list}>{mediumPostList}</div>
				</div>
			</section>
			<JoinTeam />
		</main>
	)
}

export default PostPage
