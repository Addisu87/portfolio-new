import React from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';
import heroBg from '../assets/images/heroBg.jpg';
import {
	FaFacebookF,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter
} from 'react-icons/fa';

function Home() {
	return (
		<Section id="home">
			<div className="typical-items">
				<h1>Addisu Haile</h1>
				<p>
					Hello, I'm {''}
					<span>
						<Typical
							steps={[
								'an Enthusiastic Developer',
								1000,
								'a Front-end Developer',
								1000,
								'a MERN Stack developer',
								1000,
								'a React/React Native Developer',
								1000,
								'a Python/Django Developer',
								1000,
								' a Freelancer',
								1000
							]}
							loop={Infinity}
						/>
					</span>
				</p>
				<div>
					<h6>
						Knack of building websites with front and back end
						operations.
					</h6>
				</div>
			</div>
			<div>
				<SocialLinks>
					<a
						href="https://www.facebook.com/addisuhaile87/"
						target="_blank"
						rel="noreferrer"
						className="facebook social"
					>
						<FaFacebookF />
					</a>
					<a
						href="https://www.linkedin.com/in/addisu-tedla-8b4a10143/"
						target="_blank"
						rel="noreferrer"
						class="linkedin social"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://twitter.com/AddisuTedla"
						target="_blank"
						rel="noreferrer"
						className="twitter social"
					>
						<FaTwitter />
					</a>
					<a
						href="https://www.instagram.com/addisu_haile/"
						target="_blank"
						rel="noreferrer"
						className="instagram social"
					>
						<FaInstagram />
					</a>
					<a
						href="https://github.com/Addisu87"
						target="_blank"
						rel="noreferrer"
						class="github social"
					>
						<FaGithub />
					</a>
				</SocialLinks>
			</div>
		</Section>
	);
}

export default Home;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden;
	background: url(${heroBg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	&:before {
		content: '';
		background: rgba(5, 13, 24, 0.03);
		position: absolute;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1;
	}
	.typical-items {
		position: relative;
		z-index: 2;
		min-width: 300px;
		h1 {
			margin: 0 0 10px 0;
			font-size: 64px;
			font-weight: 700;
			line-height: 56px;
			color: #fff;
		}
		p {
			color: #fff;
			margin-bottom: 50px;
			font-size: 26px;
			font-family: 'Rubix', sans-serif;
			span {
				color: #fff;
				padding-bottom: 2px;
				letter-spacing: 1px;
				border-bottom: 2px solid #149ddd;
			}
		}

		h6 {
			margin: 0 0 10px 0;
			font-size: 24px;
			font-weight: 200;
			line-height: 22px;
			color: #fff;
		}

		@media (min-width: 1024px) {
			background-attachment: fixed;
		}
		@media (max-width: 768px) {
			h1 {
				font-size: 30px;
				line-height: 30px;
			}
			h2,
			p {
				font-size: 18px;
				line-height: 12px;
				margin-bottom: 10px;
			}
		}
	}
`;

const SocialLinks = styled.div`
	a {
		font-size: 40px;
		display: inline-block;
		background: #f5f8fd;
		line-height: 1;
		padding: 8px 0;
		border-radius: 50%;
		text-align: center;
		width: 36px;
		height: 36px;
		transition: 0.3s;
		margin: 56px 10px;
		svg {
			width: 1.5rem;
			height: 1.5rem;
		}
		&:hover {
			background: #fff;
		}
		&.facebook {
			color: #4968ad;
		}
		&.twitter {
			color: #49a1eb;
		}
		&.instagram {
			color: #c13584;
		}
		&.linkedin {
			color: #00a0dc;
		}
		&.github {
			color: #000;
		}
		@media (min-width: 768px) {
			font-size: 14px;
		}
	}
`;
