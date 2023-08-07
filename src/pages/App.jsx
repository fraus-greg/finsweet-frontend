import React from 'react'
import { Route, Routes } from 'react-router-dom'
// Components
import Footer from '../shared/common/Footer/Footer.jsx'
import Homepage from './Homepage/Homepage.jsx'
import AllPosts from './AllPosts/AllPosts.jsx'
import PostPage from './PostPage/PostPage.jsx'
import AboutUs from './AboutUs/AboutUs.jsx'
import Header from '../shared/common/Header/Header.jsx'

function Index() {
	return (
		<>
			<Header
				navListInformation={[
					{
						id: 0,
						name: 'Home',
						path: '/'
					},
					{
						id: 1,
						name: 'Blog',
						path: '/allposts'
					},
					{
						id: 2,
						name: 'About Us',
						path: '/aboutus'
					},
					{
						id: 3,
						name: 'Contact us',
						path: '/contactus'
					}
				]}
			/>
			<Routes>
				<Route
					path='/'
					element={
						<Homepage
							smallPostslist={[
								{
									id: 1,
									smallPostName: 'John Deo',
									smallPostDate: 'Aug 23, 2021',
									smallPostText:
										'8 Figma design systems that you can download for free today.'
								},
								{
									id: 2,
									smallPostName: 'John Deo',
									smallPostDate: 'Aug 23, 2021',
									smallPostText:
										'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed.'
								},
								{
									id: 3,
									smallPostName: 'John Deo',
									smallPostDate: 'Aug 23, 2021',
									smallPostText:
										'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel.'
								},
								{
									id: 4,
									smallPostName: 'John Deo',
									smallPostDate: 'Aug 23, 2021',
									smallPostText:
										'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non.'
								}
							]}
							featuredPostName=' John Doe'
							featuredPostDate=' May 23, 2022'
							authorBoxesList={[
								{
									id: 1,
									authorBoxName: 'Floyd Miles',
									authorBoxDescription: 'Content Writer @Company',
									authorBoxImg: 'author1'
								},
								{
									id: 2,
									authorBoxName: 'Dianne Russell',
									authorBoxDescription: 'Content Writer @Company',
									authorBoxImg: 'author2'
								},
								{
									id: 3,
									authorBoxName: 'Jenny Wilson',
									authorBoxDescription: 'Content Writer @Company',
									authorBoxImg: 'author3'
								},
								{
									id: 4,
									authorBoxName: 'Leslie Alexander',
									authorBoxDescription: 'Content Writer @Company',
									authorBoxImg: 'author4'
								}
							]}
							catagoryBoxesList={[
								{
									id: 0,
									icon: 'icon1',
									title: 'Business',
									text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
								},
								{
									id: 1,
									icon: 'icon2',
									title: 'Startup',
									text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
								},
								{
									id: 2,
									icon: 'icon3',
									title: 'Economy',
									text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
								},
								{
									id: 3,
									icon: 'icon4',
									title: 'Technology',
									text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
								}
							]}
						/>
					}
				/>
				<Route
					path='/allposts'
					element={
						<AllPosts
							catagoryBoxesList={[
								{
									id: 0,
									icon: 'icon1',
									title: 'Business',
									text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
								},
								{
									id: 1,
									icon: 'icon2',
									title: 'Startup',
									text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
								},
								{
									id: 2,
									icon: 'icon3',
									title: 'Economy',
									text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
								},
								{
									id: 3,
									icon: 'icon4',
									title: 'Technology',
									text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
								}
							]}
							bigPostsList={[
								{
									id: 0,
									img: 'intro1',
									name: 'Startup',
									title:
										'Design tips for designers that cover everything you need',
									subtitle:
										'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
								},
								{
									id: 1,
									img: 'intro2',
									name: 'BUSINESS',
									title: 'How to build rapport with your web design clients',
									subtitle:
										'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
								},
								{
									id: 2,
									img: 'intro3',
									name: 'Startup',
									title: 'Logo design trends to avoid in 2022',
									subtitle:
										'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
								},
								{
									id: 3,
									img: 'intro4',
									name: 'TECHNOLOGY',
									title:
										'8 Figma design systems you can download for free today',
									subtitle:
										'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
								},
								{
									id: 4,
									img: 'intro1',
									name: 'ECONOMY',
									title:
										'Font sizes in UI design: The complete guide to follow',
									subtitle:
										'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
								}
							]}
						/>
					}
				/>
				<Route
					path='/postpage'
					element={
						<PostPage
							authorImg='author1'
							authorName='Andrew Jonson'
							authorDate='27th January 2022'
							headingText='Step-by-step guide to choosing great font pairs'
							postTagImg='postTag1'
							postTag='Startup'
							postImg='post1'
							mediumPostsListInformation={[
								{
									id: 0,
									img: 'post1',
									name: 'John Doe',
									date: 'Aug 23, 2021',
									title:
										'A UX Case Study Creating a Studious Environment for Students:',
									text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
								},
								{
									id: 1,
									img: 'post2',
									name: 'John Doe',
									date: 'Aug 23, 2021',
									title:
										'A UX Case Study Creating a Studious Environment for Students:',
									text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
								},
								{
									id: 2,
									img: 'post3',
									name: 'John Doe',
									date: 'Aug 23, 2021',
									title:
										'A UX Case Study Creating a Studious Environment for Students:',
									text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
								}
							]}
						/>
					}
				/>
				<Route
					path='aboutus'
					element={
						<AboutUs
							authorBoxesList={[
								{
									id: 1,
									authorBoxName: 'Floyd Miles',
									authorBoxDescription: 'Content Writer @Company',
									authorBoxImg: 'author1'
								},
								{
									id: 2,
									authorBoxName: 'Dianne Russell',
									authorBoxDescription: 'Content Writer @Company',
									authorBoxImg: 'author2'
								},
								{
									id: 3,
									authorBoxName: 'Jenny Wilson',
									authorBoxDescription: 'Content Writer @Company',
									authorBoxImg: 'author3'
								},
								{
									id: 4,
									authorBoxName: 'Leslie Alexander',
									authorBoxDescription: 'Content Writer @Company',
									authorBoxImg: 'author4'
								},
								{
									id: 5,
									authorBoxName: 'Guy Hawkins',
									authorBoxDescription: 'Content Writer @Company',
									authorBoxImg: 'author5'
								},
								{
									id: 6,
									authorBoxName: 'Eleanor Pena',
									authorBoxDescription: 'Content Writer @Company',
									authorBoxImg: 'author6'
								},
								{
									id: 7,
									authorBoxName: 'Robert Fox',
									authorBoxDescription: 'Content Writer @Company',
									authorBoxImg: 'author7'
								},
								{
									id: 7,
									authorBoxName: 'Jacob Jones',
									authorBoxDescription: 'Content Writer @Company',
									authorBoxImg: 'author8'
								}
							]}
						/>
					}
				/>
			</Routes>
			<Footer
				navListInformation={[
					{
						id: 0,
						name: 'Home',
						path: '/'
					},
					{
						id: 1,
						name: 'Blog',
						path: '/allposts'
					},
					{
						id: 2,
						name: 'About Us',
						path: '/aboutus'
					},
					{
						id: 3,
						name: 'Contact us',
						path: '/contactus'
					},
					{
						id: 4,
						name: 'Privacy Policy',
						path: '*'
					}
				]}
			/>
		</>
	)
}

export default Index
