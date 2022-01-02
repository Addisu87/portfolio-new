import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';

function Resume() {
	return (
		<Section id="resume">
			<Title title={'Resume'} />
			<p>
				More than a year of experience in front-end web development.
				Ambitious and communicative. Good mentor and tech lead.
			</p>

			<Row>
				<div>
					<h3>Summary</h3>
					<ResumeItem>
						<h4>Addisu Haile</h4>
						<p>
							<em>
								Innovative and deadline-driven front-end web
								developer with over a year of experience
								designing and developing user-centered dynamic
								websites from initial concept to final, polished
								deliverable.
							</em>
						</p>
						<ul>
							<li>Mello, Debre Tabor, Ethiopia</li>
							<li>(+251) 912 912 144</li>
							<li>addisuhaile87@gmail.com</li>
						</ul>
					</ResumeItem>

					<h3>Education</h3>
					<ResumeItem>
						<h4>Master of Geophysics</h4>
						<h5>2011 - 2014</h5>
						<p>
							<em>
								Addis Ababa University, Addis Ababa, Ethiopia
							</em>
						</p>
					</ResumeItem>
					<ResumeItem>
						<h4>Bachelor of Science (in Applied Physics)</h4>
						<h5>2007 - 2009</h5>
						<p>
							<em>University of Gondar, Gondar, Ethiopia</em>
						</p>
					</ResumeItem>
					<ResumeItem>
						<h4>Preparatory School Leaving Certificate</h4>
						<h5>2005 - 2006</h5>
						<p>
							<em>
								Fasiledes Preparatory School, Gondar, Ethiopia
							</em>
						</p>
					</ResumeItem>
				</div>
				<div>
					<h3>Professional Experience</h3>
					<ResumeItem>
						<h4>Junior Front-end web developer</h4>
						<h5>2020 - Present</h5>
						<p>
							<em> Freelance, Debre Tabor, Ethiopia </em>
						</p>
						<ul>
							<li>
								Cloned and maintained multiple social platform,
								that lets users easily communicate each other.
							</li>
							<li>
								Build a restaurant management system,
								Tic-tac-toe game and a calculator using python
								language.
							</li>
							<li>
								cloned and launched a large single page
								application (in React and Redux) that allows
								partners to manage their offers, prices, orders,
								customers and agents.
							</li>
						</ul>
					</ResumeItem>
					<ResumeItem>
						<h4>Graphic design specialist</h4>
						<h5>2016 - 2019</h5>
						<p>
							<em>Gafat Advertising, Debre Tabor, Ethiopia</em>
						</p>
						<ul>
							<li>
								Developed numerous marketing programs (logos,
								brochures,info-graphics, presentations, and
								advertisements).
							</li>
							<li>
								Managed up to 3 projects or tasks at a given
								time while under pressure
							</li>
						</ul>
					</ResumeItem>
					<ResumeItem>
						<h4>Lecturer</h4>
						<h5>2009 - Present</h5>
						<p>
							<em>
								Samara university and Debre Tabor University,
								Ethiopia
							</em>
						</p>
						<ul>
							<li>
								Teaching and advising Physics undergraduate
								students.
							</li>
							<li>
								Conducting community services and research
								works.
							</li>
						</ul>
					</ResumeItem>
				</div>
			</Row>
		</Section>
	);
}

export default Resume;

const Section = styled.div`
	padding: 20px 12px;
	overflow: hidden;
	background: #f5f8fd;
	p {
		padding: 8px;
	}
`;

const Row = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 3rem;
	row-gap: 2rem;
	margin: 0;
	p {
		padding-top: 0.5rem;
	}
	h3 {
		font-weight: 700;
		font-size: 24px;
		margin-top: 20px;
		margin-bottom: 20px;
		color: #050d18;
	}
`;

const ResumeItem = styled.div`
	padding: 0 0 20px 20px;
	margin-top: -2px;
	border-left: 2px solid #1f5297;
	position: relative;
	h4 {
		line-height: 14px;
		font-size: 16px;
		font-weight: 600;
		text-transform: uppercase;
		font-family: 'M Plus Rounded 1c', Times, serif;
		color: #050d18;
		margin-bottom: 10px;
	}
	h5 {
		font-size: 14px;
		background: #e4edf9;
		padding: 5px 15px;
		display: inline-block;
		font-weight: 600;
		margin-bottom: 8px;
	}
	p {
		em {
			padding-bottom: 8px;
		}
	}
	ul {
		padding-left: 20px;
		li {
			padding-bottom: 10px;
		}
	}
	&:last-child {
		padding-bottom: 0;
	}
	&::before {
		content: '';
		position: absolute;
		width: 16px;
		height: 16px;
		border-radius: 50px;
		left: -9px;
		top: 0;
		background: #fff;
		border: 2px solid #1f5297;
	}
`;
