import React from 'react';
import {
	FaBinoculars,
	FaBrush,
	FaCode,
	FaCreditCard,
	FaMobileAlt
} from 'react-icons/fa';

import styled from 'styled-components';

function ServiceContent() {
	return (
		<div>
			<p>
				Freelance Web Designer & Developer based in Debre Tabor,
				Ethiopia. Highly experienced in designing & developing custom
				Wordpress websites.
			</p>

			<Row>
				<div>
					<i>
						<FaBrush />
					</i>
					<h4>
						<a href="#">Responsive Website Design</a>
					</h4>
					<p>
						Having a responsive layout means that your website
						fluidly resizes for optimal viewing regardless of the
						screen size or device (e.g. iPhone, iPad).
					</p>
				</div>
				<div>
					<i>
						<FaCode />
					</i>
					<h4>
						<a href="#">Website Development</a>
					</h4>
					<p>
						The web development process involves taking the
						graphical elements defined in the design process and
						coding them into a custom Wordpress theme.
					</p>
				</div>
				<div>
					<i>
						<FaCreditCard />
					</i>
					<h4>
						<a href="#">App Design</a>
					</h4>
					<p>
						Our approach is to create an app design that strengthens
						your company’s brand while ensuring ease of use and
						simplicity for your audience.
					</p>
				</div>
				<div>
					<i>
						<FaBinoculars />
					</i>
					<h4>
						<a href="#">Logo Design</a>
					</h4>
					<p>
						Our goal is to design a professional yet creative logo
						that reflects your company’s spirit and leaves a
						lasting, memorable effect.
					</p>
				</div>
				<div>
					<i>
						<FaMobileAlt />
					</i>
					<h4>
						<a href="#">Social Media Integration</a>
					</h4>
					<p>
						Social media integration enables your website to post
						updates to Facebook, displays a Twitter feed, and links
						to your social media accounts.
					</p>
				</div>
			</Row>
		</div>
	);
}

export default ServiceContent;

const Row = styled.div`
	display: grid;
	width: 95%;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 3rem;
	row-gap: 2rem;
	margin: 0;
	padding: 16px;
	i {
		font-size: 20px;
		color: #149ddd;
		float: left;
		width: 44px;
		height: 44px;
		background: #dff3fc;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50px;
		transition: all 0.3s ease-in-out;
		&:hover {
			background: #149ddd;
			color: #fff;
		}
	}
	h4 {
		font-weight: 700;
		margin: 10px;
		font-size: 18px;
		a {
			margin-left: 10px;
			color: #343a40;
			&:hover {
				color: #149ddd;
			}
		}
	}
	p {
		padding-top: 16px;
		line-height: 20px;
		font-size: 16px;
	}
	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(1, 1fr);
		flex-direction: column;
		grid-gap: 0;
		width: 100%;
		&:not(:last-child) {
			margin-bottom: 1.2rem;
		}
	}
`;
