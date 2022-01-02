import React from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';
import heroBg from '../assets/images/heroBg.jpg';
import SocialLinks from '../components/SocialLinks';

function Home() {
	return (
		<Section id="home">
			<div className="home-container">
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
								wrapper="p"
							/>
						</span>
					</p>
				</div>
			</div>

			<SocialLinksWrap>
				{SocialLinks.map((item) => {
					return (
						<ul key={item.id}>
							<li>
								<a href={item.link}>{item.icon}</a>
							</li>
						</ul>
					);
				})}
			</SocialLinksWrap>
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
	.home-container {
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
				font-size: 26px;
				font-family: 'Rubix', sans-serif;
				margin-bottom: 50px;

				span {
					color: #fff;
					padding-bottom: 2px;
					letter-spacing: 1px;
					border-bottom: 2px solid #149ddd;
				}
			}
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

const SocialLinksWrap = styled.div`
	ul {
		list-style: none;
		display: inline-block;
		margin: 8px 8px;
		li {
			a {
				svg {
					width: 1.5rem;
					height: 1.5rem;
				}
			}
		}
	}
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;
