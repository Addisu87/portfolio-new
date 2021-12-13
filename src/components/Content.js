import React from 'react';
import styled from 'styled-components';
import profile from '../assets/images/profile-img.jpg';
import { FaChevronRight } from 'react-icons/fa';

function Content() {
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
					<div>
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
				</Contents>
			</Row>
		</Container>
	);
}

export default Content;

const Container = styled.div`
	overflow: hidden;
	background: #f5f8fd;
	margin-top: 2rem;
	margin-left: 2rem;
`;

const Row = styled.div`
	display: flex;
`;

const Image = styled.div`
	position: relative;
	border-radius: 50%;
	width: 100%;
	height: 100%;
	object-fit: cover;
	margin: 20px 20px; ;
`;

const Contents = styled.div`
	h3 {
		font-weight: 700;
		font-size: 26px;
		color: #173b6c;
		margin: 1rem 0;
	}
	.about-details {
		overflow: hidden;
		display: grid;
		width: 100%;
		grid-template-columns: 50% 2fr;
		column-gap: 2rem;
		row-gap: 1.5rem;
		.name-details {
			margin: 1rem 0;
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
