import React from 'react';
import { FaLocationArrow, FaMailBulk, FaPhone } from 'react-icons/fa';
import styled from 'styled-components';
import Title from '../components/Title';
import Card from '../components/Card';

function Contact() {
	return (
		<Section>
			<Title title={'Contact'} span={'Contact'} />

			<div className="text">
				<p>
					I'm interested in freelance opportunities - especially
					ambitious or large projects. However, if you have other
					request or question, don't hesitate to use the form.
				</p>
			</div>

			<Container>
				<div className="sides">
					<Row>
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
								<FaMailBulk
									width={12}
									height={12}
									color={'#000'}
								/>
							}
							title={'Email:'}
							text={
								'addisuhaile87@gmail.com & addisu.haile@yahoo.com'
							}
						/>
						<Card
							icon={
								<FaPhone
									width={12}
									height={12}
									color={'#000'}
								/>
							}
							title={'Phone:'}
							text={'+251 912 912 144'}
						></Card>

						<div className="map-section">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17783.63509004089!2d37.993049043930355!3d11.860116659256622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16447de8d1cb7d57%3A0x8e1445393ee72527!2z4Yiw4Y2I4YioIOGMiOGKkOGJtSDvvIjhiJjhiI7vvIksIOGLsOGJpeGIqCDhibPhiabhiK0!5e1!3m2!1sam!2set!4v1637838405049!5m2!1sam!2set"
								frameborder="0"
								border="0"
								width="500"
								height="450"
								allowfullscreen
								tabIndex="0"
								aria-hidden="false"
							></iframe>
						</div>
					</Row>
				</div>

				<div className="sides">
					<FormData>
						<form className="email-form">
							<fieldset>
								<legend>Contact details</legend>
								<div>
									<label for="name">
										Your Name:
										<input
											type="text"
											name="name"
											className="form-control"
											id="name"
											required
										/>
									</label>
								</div>
								<div>
									<label for="name">
										Your Email:
										<input
											type="email"
											class="form-control"
											name="email"
											id="email"
											required
										/>
									</label>
								</div>
								<div>
									<label for="name">
										Subject:
										<input
											type="text"
											className="form-control"
											name="subject"
											id="subject"
											required
										/>
									</label>
								</div>
								<div>
									<label for="name">
										Message
										<textarea
											className="form-control"
											name="message"
											cols="50"
											rows="12"
											required
										></textarea>
									</label>
								</div>

								<div className="my-3">
									<div className="loading">Loading</div>
									<div className="error-message"></div>
									<div className="sent-message">
										Your message has been sent. Thank you!
									</div>
								</div>
								<br />
								<div className="text-center">
									<button type="submit">Send Message</button>
								</div>
							</fieldset>
						</form>
					</FormData>
				</div>
			</Container>
		</Section>
	);
}

export default Contact;

const Section = styled.div`
	padding: 40px 0;
	overflow: hidden;
	background: #f5f8fd;
	.item {
		padding: 1.5rem 1rem;
	}
`;

const Container = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 3rem;
	row-gap: 2rem;
	margin: 0;
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

const Row = styled.div`
	display: flex;
	flex-direction: column;
`;

const FormData = styled.div`
	form {
		display: inline-block;
		.validate {
			display: none;
			color: red;
			margin: 0 0 15px 0;
			font-weight: 400;
			font-size: 13px;
		}
		.error-message {
			display: none;
			color: #fff;
			background: #ed3c0d;
			text-align: left;
			padding: 15px;
			font-weight: 600;
		}
		.error-message br + br {
			margin-top: 25px;
		}
		.sent-message {
			display: none;
			color: #fff;
			background: #18d26e;
			text-align: center;
			padding: 15px;
			font-weight: 600;
		}
		.loading {
			display: none;
			background: #fff;
			text-align: center;
			padding: 15px;
		}
		.loading:before {
			content: '';
			display: inline-block;
			border-radius: 50%;
			width: 24px;
			height: 24px;
			margin: 0 10px -6px 0;
			border: 3px solid #18d26e;
			border-top-color: #eee;
			-webkit-animation: animate-loading 1s linear infinite;
			animation: animate-loading 1s linear infinite;
		}

		label {
			margin-bottom: 50px;
			padding: 0 0 0 16px;
			input,
			textarea {
				border-radius: 0;
				box-shadow: none;
				font-size: 14px;
			}
			input {
				height: 30px;
				width: 90%;
			}
			textarea {
				padding: 15px 15px;
		}
		button {
			background: #149ddd;
			border: 0;
			padding: 10px 24px;
			color: #fff;
			transition: 0.4s;
			border-radius: 4px;
			&:hover {
				background: #37b3ed;
			}
		}
		
	}
`;
