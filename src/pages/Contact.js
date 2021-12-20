import React from 'react';
import { FaLocationArrow, FaMailBulk, FaPhone } from 'react-icons/fa';
import styled from 'styled-components';
import Title from '../components/Title';
import Card from '../components/Card';

function Contact() {
	return (
		<Section>
			<div className="text">
				<Title title={'Contact'} span={'Contact'} />
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
								width="450"
								height="350"
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
								<div className="form-group">
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
								<div className="form-group">
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
								<div className="form-group">
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
								<div className="form-group">
									<label for="name">
										Message
										<textarea
											className="form-control"
											name="message"
											cols="30"
											rows="10"
											required
										></textarea>
									</label>
								</div>

								<br />
								<div className="text-button">
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
	padding: 24px 10px;
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

const Row = styled.div`
	display: flex;
	flex-direction: column;
`;

const FormData = styled.div`
	form {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: #f5f8fd;
		fieldset {
			width: 100%;
			max-width: 500vh;
			margin: 0 auto;
			padding: 20px;
			box-shadow: 0px 0px 20px #000000010;
			background-color: white;
			border-radius: 8px;
			margin-bottom: 20px;
			label {
				width: 100%;
				margin-top: 20px;
				font-size: 16px;
				input,
				textarea {
					width: 100%;
					padding: 5px;
					font-size: 18px;
					border: 1px solid rgba(128, 128, 128, 0.199);
					margin-bottom: 5px;
				}
				input {
					height: 30px;
					width: 90%;
				}
				textarea {
					resize: vertical;
				}
			}
			button[type='submit'] {
				width: 50%;
				border: none;
				outline: none;
				padding: 16px;
				font-size: 18px;
				border-radius: 8px;
				text-align: center;
				color: rgb(27, 166, 247);
				cursor: pointer;
				margin-top: 10px;
				transition: 0.3s ease background-color;
				&:hover {
					background-color: rgb(214, 266, 236);
				}
			}
		}
	}
`;
