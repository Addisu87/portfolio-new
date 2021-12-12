import React from 'react';
import {
	FaBinoculars,
	FaBrush,
	FaCode,
	FaCreditCard,
	FaMobileAlt
} from 'react-icons/fa';
import styled from 'styled-components';

function Services() {
	return (
		<Container>
			<Title>
				<h2>Services</h2>
				<p>
					Freelance Web Designer & Developer based in Debre Tabor,
					Ethiopia. Highly experienced in designing & developing
					custom Wordpress websites.
				</p>
			</Title>

			<Row>
				<IconBox>
					<div className="icon">
						<FaBrush />
					</div>
					<h4>
						<a href="#">Responsive Website Design</a>
					</h4>
					<p>
						Having a responsive layout means that your website
						fluidly resizes for optimal viewing regardless of the
						screen size or device (e.g. iPhone, iPad).
					</p>
				</IconBox>
				<IconBox>
					<div className="icon">
						<FaCode />
					</div>
					<h4>
						<a href="#">Website Development</a>
					</h4>
					<p>
						The web development process involves taking the
						graphical elements defined in the design process and
						coding them into a custom Wordpress theme.
					</p>
				</IconBox>
				<IconBox>
					<div className="icon">
						<FaCreditCard />
					</div>
					<h4>
						<a href="#">App Design</a>
					</h4>
					<p>
						Our approach is to create an app design that strengthens
						your company’s brand while ensuring ease of use and
						simplicity for your audience.
					</p>
				</IconBox>
				<IconBox>
					<div className="icon">
						<FaBinoculars />
					</div>
					<h4>
						<a href="#">Logo Design</a>
					</h4>
					<p>
						Our goal is to design a professional yet creative logo
						that reflects your company’s spirit and leaves a
						lasting, memorable effect.
					</p>
				</IconBox>
				<IconBox>
					<div className="icon">
						<FaMobileAlt />
					</div>
					<h4>
						<a href="#">Social Media Integration</a>
					</h4>
					<p>
						Social media integration enables your website to post
						updates to Facebook, displays a Twitter feed, and links
						to your social media accounts.
					</p>
				</IconBox>
			</Row>
		</Container>
	);
}

export default Services;

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

const Row = styled.div`
	h4 {
		margin-left: 80px;
		font-weight: 700;
		margin-bottom: 15px;
		font-size: 18px;
		a {
			color: #343a40;
			&:hover {
				color: #149ddd;
			}
		}
	}
	p {
		margin-left: 80px;
		line-height: 24px;
		font-size: 14px;
	}
`;

const IconBox = styled.div`
	margin-bottom: 20px;
	.icon {
		float: left;
		display: flex;
		align-items: center;
		width: 54px;
		height: 54px;
		background: #149ddd;
		border-radius: 50%;
		transition: 0.5s;
		border: 1px solid #149ddd;
		svg {
			color: #fff;
			font-size: 24px;
			line-height: 0;
			&:hover {
				background: #fff;
				color: #149ddd;
			}
		}
	}
`;
