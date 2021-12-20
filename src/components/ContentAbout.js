import React from 'react';
import styled from 'styled-components';
import profile from '../assets/images/profile-img.jpg';
import { FaChevronRight } from 'react-icons/fa';

function ContentAbout() {
	return (
		<Container>
			<div>
				<p>
					I'm a freelancer front-end developer located in Debre Tabor,
					Ethiopia. I don’t like to define myself by the work I’ve
					done. I define myself by the work I want to do. Skills can
					be taught, personality is inherent. I prefer to keep
					learning, continue challenging myself, and do interesting
					things that matter.
				</p>
			</div>

			<Row>
				<Image>
					<img src={profile} alt="profile-Img" />
				</Image>
				<Contents>
					<div className="about-info">
						<h3>UI/UX Designer &amp; Web Developer.</h3>
						<p>
							I have a serious passion for UI effects, animations
							and creating intuitive, dynamic user experiences.
						</p>
						<div className="about-details">
							<div className="name-details">
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
							<div className="name-details">
								<ul>
									<li>
										<FaChevronRight />
										<strong>Age:</strong>
										<span>34</span>
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
					</div>
					<div>
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
				</Contents>
			</Row>
		</Container>
	);
}

export default ContentAbout;

const Container = styled.div`
	padding: 20px 12px;
	overflow: hidden;
	background: #f5f8fd;
	p {
		padding: 8px;
	}
	@media screen and (max-width: 1400px) {
		flex-direction: column;
		.about-info {
			margin-left: 0;
			margin-top: 1rem;
		}
	}
`;

const Row = styled.div`
	display: flex;
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const Image = styled.div`
	position: relative;
	border-radius: 50%;
	width: 100%;
	height: 100%;
	object-fit: cover;
	margin: 20px 20px;
`;

const Contents = styled.div`
	margin: 0.5rem;
	h3 {
		font-weight: 700;
		font-size: 26px;
		color: #173b6c;
		margin: 0.5rem 0;
	}
	.about-details {
		overflow: hidden;
		display: grid;
		width: 100%;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
		row-gap: 1.5rem;
		@media screen and (max-width: 1100px) {
			grid-template-columns: repeat(1, 1fr);
			grid-gap: 0;
		}
		.name-details {
			margin: 0.2rem 0;
			ul {
				list-style: none;
				padding: 0;
				li {
					margin-bottom: 20px;
					display: flex;
					align-items: center;
					svg {
						font-size: 16px;
						margin-right: 5px;
						color: #149ddd;
						line-height: 0;
					}
					strong {
						margin-right: 10px;
					}
					span {
						padding: 0.1rem 0;
					}
				}
			}
		}
	}
	p:last-child {
		margin-bottom: 0;
	}
`;
