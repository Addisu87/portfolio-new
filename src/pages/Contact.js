import React from 'react';
import { FaLocationArrow, FaMailBulk, FaPhone } from 'react-icons/fa';
import styled from 'styled-components';
import Title from '../components/Title';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';

function Contact() {
	return (
		<Section id="contact">
			<div className="text">
				<Title title={'Contact'} />
				<p>
					I'm interested in freelance opportunities - especially
					ambitious or large projects. However, if you have other
					request or question, don't hesitate to use the form.
				</p>
			</div>

			<Container>
				<div className="sides">
					<Card
						icon={
							<FaLocationArrow
								width={12}
								height={12}
								color={'#000'}
							/>
						}
						title={'Location:'}
						text={'Local 04 Mello, Debre Tabor, Ethiopia'}
					/>
					<Card
						icon={
							<FaMailBulk width={12} height={12} color={'#000'} />
						}
						title={'Email:'}
						text={'addisuhaile87@gmail.com'}
					/>
					<Card
						icon={<FaPhone width={12} height={12} color={'#000'} />}
						title={'Phone:'}
						text={'+251 912 912 144'}
					></Card>

					<div className="map-section">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17783.63509004089!2d37.993049043930355!3d11.860116659256622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16447de8d1cb7d57%3A0x8e1445393ee72527!2z4Yiw4Y2I4YioIOGMiOGKkOGJtSDvvIjhiJjhiI7vvIksIOGLsOGJpeGIqCDhibPhiabhiK0!5e1!3m2!1sam!2set!4v1637838405049!5m2!1sam!2set"
							frameborder="0"
							border="0"
							width="450"
							height="350"
							allowfullscreen
							tabIndex="0"
							aria-hidden="false"
						></iframe>
					</div>
				</div>

				<div className="sides">
					<ContactForm />
				</div>
			</Container>
		</Section>
	);
}

export default Contact;

const Section = styled.div`
	padding: 24px 10px;
	overflow: hidden;
	background: #f5f8fd;
	flex: 1;
	p {
		padding: 1.5rem 1rem;
	}
`;

const Container = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 3rem;
	row-gap: 2rem;
	margin: 0;
	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
		.map-section {
			width: 100%;
			height: 50vh;
		}
	}
	.sides {
		width: 100%;
		padding: 30px;
		background: #fff;
		box-shadow: 0 0 24px 0 rgba(51, 34, 34, 0.12);
		@-webkit-keyframes animate-loading {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
`;
