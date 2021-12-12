import { FaChevronRight } from 'react-icons/fa';
import React from 'react';
import styled from 'styled-components';
import profile from '../assets/images/profile-img.jpg';

function About() {
	return (
		<Container>
			<Title>
				<h2>About</h2>
				<p>
					I'm a freelancer front-end developer located in Debre Tabor,
					Ethiopia. I don’t like to define myself by the work I’ve
					done. I define myself by the work I want to do. Skills can
					be taught, personality is inherent. I prefer to keep
					learning, continue challenging myself, and do interesting
					things that matter.
				</p>
			</Title>

			<Row>
				<Image>
					<img src={profile} alt="profile-Img" />
				</Image>
				<Content>
					<div>
						<h3>UI/UX Designer &amp; Web Developer.</h3>
						<p>
							I have a serious passion for UI effects, animations
							and creating intuitive, dynamic user experiences.
						</p>
						<div>
							<div>
								<ul>
									<li>
										<FaChevronRight />
										<strong>Birthday:</strong>
										<span>29 March 1987</span>
									</li>
									<li>
										<FaChevronRight />
										<strong>Website:</strong>
										<span>www.example.com</span>
									</li>
									<li>
										<FaChevronRight />
										<strong>Phone:</strong>
										<span>+251-912 912 144</span>
									</li>
									<li>
										<FaChevronRight />
										<strong>City:</strong>
										<span>Debre Tabor, Ethiopia</span>
									</li>
								</ul>
							</div>
							<div>
								<ul>
									<li>
										<FaChevronRight />
										<strong>Age:</strong>
										<span>35</span>
									</li>
									<li>
										<FaChevronRight />
										<strong>Degree:</strong>
										<span>Master</span>
									</li>
									<li>
										<FaChevronRight />
										<strong>Email:</strong>
										<span>
											addisuhaile87@gmail.com &amp;
											addisu.haile@yahoo.com
										</span>
									</li>
									<li>
										<FaChevronRight />
										<strong>Freelance:</strong>
										<span>Available</span>
									</li>
								</ul>
							</div>
						</div>
						<p>
							My abundant energy fuels me in the pursuit of many
							interests, hobbies, areas of study and teaching
							endeavors. I’m a fast learner, able to pick up new
							skills and juggle different projects and roles with
							relative ease. I like to develop expertise in a
							number of areas over the course of my life and
							career. I’m a people-person with deep emotions and
							empathy, a natural storyteller. I’m able to inspire
							and am at my best when I’m sharing my creative
							expressions with others.
						</p>
					</div>
				</Content>
			</Row>
		</Container>
	);
}

export default About;

const Container = styled.div`
	padding: 60px 0;
	overflow: hidden;
	background: #f5f8fd;
`;

const Title = styled.div`
	padding-bottom: 30px;
	h2 {
		font-size: 32px;
		font-weight: bold;
		margin-bottom: 20px;
		padding-bottom: 20px;
		position: relative;
		color: #173b6c;
		h2::after {
			content: '';
			position: absolute;
			display: block;
			width: 50px;
			height: 3px;
			background: #149ddd;
			bottom: 0;
			left: 0;
		}
		p {
			margin-bottom: 0;
		}
	}
`;

const Row = styled.div``;

const Image = styled.div`
	position: relative;
`;

const Content = styled.div`
	h3 {
		font-weight: 700;
		font-size: 26px;
		color: #173b6c;
	}
	ul {
		list-style: none;
		padding: 0;
		li {
			margin-bottom: 20px;
			display: flex;
			align-items: center;
		}
		strong {
			margin-right: 10px;
		}
		svg {
			font-size: 16px;
			margin-right: 5px;
			color: #149ddd;
			line-height: 0;
		}
	}
	p:last-child {
		margin-bottom: 0;
	}
`;
