import React from 'react'
// Components
import BigPost from '../../shared/allPosts/BigPost/BigPost'
import CategoryBox from '../../shared/common/CategoryBox/CategoryBox'
import JoinTeam from '../../shared/common/JoinTeam/JoinTeam'
import ButtonYellow from '../../shared/common/ButtonYellow/ButtonYellow'
// Styles
import styles from './AllPosts.module.scss'
import font from '../../assets/Font.module.scss'
// Images
import stepImg from './assets/step.png'

function AllPosts(props) {
	const bigPostsList = props.bigPostsList.map((item) => {
		return <BigPost key={item.id} {...item} />
	})
	const catagoryBoxesList = props.catagoryBoxesList.map((item) => {
		return <CategoryBox key={item.id} {...item} />
	})

	return (
		<main>
			<section className={styles.step}>
				<div className={styles.content}>
					<div className={font.c4}>Featured Post</div>
					<div className={styles.help}>
						<div className={styles.text}>
							<div className={font.h2}>
								Step-by-step guide to choosing great font pairs
							</div>
							<div className={font.l1}>
								By
								<span className={font.pl1}>John Doe</span>May 23, 2022
							</div>
							<div className={font.gb1}>
								Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident.
							</div>
						</div>
						<ButtonYellow text='Read More >' />
					</div>
				</div>
				<img src={stepImg} alt='man in a white shirt' />
			</section>
			<section className={styles.allPosts}>
				<div className={styles.help}>
					<div className={styles.heading}>
						<div className={font.h1}>All posts</div>
						<div className={styles.line}></div>
					</div>
					{bigPostsList}
				</div>
			</section>
			<section className={styles.category}>
				<div className={font.h2}> All Categories</div>
				<div className={styles.help}>{catagoryBoxesList}</div>
			</section>
			<JoinTeam />
		</main>
	)
}

export default AllPosts
