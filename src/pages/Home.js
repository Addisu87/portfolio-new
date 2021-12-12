import React from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';
import heroBg from '../assets/images/heroBg.jpg';

function Home() {
	return (
		<Container>
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
			<p>
				Knack of building websites with front and back end operations.
			</p>
		</Container>
	);
}

export default Home;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;
	width: 100;
	height: 100vh;
	position: relative;
	z-index: 2
	min-width: 100%;
	min-height: fit-content;
	padding: 60px 0;
	overflow: hidden;
	background: url(${heroBg});
	background-repeat: no-repeat;
	background-position: top center;
	background-size: cover;
	&:before {
		content: '';
		position: absolute;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1;
	}
	h1 {
		margin: 0 0 10px 0;
		font-size: 64px;
		font-weight: 700;
		line-height: 56px;
		color: #f5f8fd;
		padding-bottom: 30px;
	}
	p {
		color: #f5f8fd;
		margin-bottom: 50px;
		font-size: 26px;
		font-family: 'M Plus Rounded 1c', Times, serif;
		span {
			color: #f5f8fd;
			padding-bottom: 4px;
			letter-spacing: 1px;
			border-bottom: 2px solid #149ddd;
		}
	}
	@media (min-width: 1024px) {
		background-attachment: fixed;
	}
	@media (max-width: 768px) {
		h1 {
			font-size: 28px;
			line-height: 36px;
		}
		h2,
		p {
			font-size: 18px;
			line-height: 24px;
			margin-bottom: 30px;	
		}
	}
`;
