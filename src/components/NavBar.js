import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import '../GlobalStyle.css';
import image from '../assets/images/profile-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBook,
	faEnvelope,
	faFile,
	faHome,
	faServer,
	faUser
} from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faGithub,
	faInstagram,
	faLinkedin,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';

function NavBar() {
	return (
		<SideBar>
			<Profile>
				<img src={image} alt="profile-Img" />
				<h1>Addisu Haile</h1>
				<SocialLinks>
					<a
						href="https://www.facebook.com/addisuhaile87/"
						target="_blank"
						rel="no-referrer"
						className="facebook social"
					>
						<FontAwesomeIcon icon={faFacebook} size="1x" />
					</a>
					<a
						href="https://twitter.com/AddisuTedla"
						target="_blank"
						rel="no-referrer"
						className="twitter social"
					>
						<FontAwesomeIcon icon={faTwitter} size="1x" />
					</a>
					<a
						href="https://www.instagram.com/addisu_haile/"
						target="_blank"
						rel="no-referrer"
						className="instagram social"
					>
						<FontAwesomeIcon icon={faInstagram} size="1x" />
					</a>
					<a
						href="https://www.linkedin.com/in/addisu-tedla-8b4a10143/"
						target="_blank"
						rel="no-referrer"
						class="linkedin social"
					>
						<FontAwesomeIcon icon={faLinkedin} size="1x" />
					</a>
					<a
						href="https://github.com/Addisu87"
						target="_blank"
						rel="no-referrer"
						class="github social"
					>
						<FontAwesomeIcon icon={faGithub} size="1x" />
					</a>
				</SocialLinks>
			</Profile>

			<Nav>
				<ul>
					<li>
						<NavLink to="/">
							<FontAwesomeIcon icon={faHome} size="1x" />
							<span>Home</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/about">
							<FontAwesomeIcon icon={faUser} size="1x" />
							<span>About</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/resume">
							<FontAwesomeIcon icon={faFile} size="1x" />
							<span>Resume</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/projects">
							<FontAwesomeIcon icon={faBook} size="1x" />
							<span>Projects</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/services">
							<FontAwesomeIcon icon={faServer} size="1x" />
							<span>Services</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact">
							<FontAwesomeIcon icon={faEnvelope} size="1x" />
							<span>Contact</span>
						</NavLink>
					</li>
				</ul>
			</Nav>
			<Footer>
				<p> Addisu Haile @2021</p>
			</Footer>
		</SideBar>
	);
}

export default NavBar;

const SideBar = styled.div`
	height: 100vh;
	overflow-y: none;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	/* @media (max-width: 768px) {
		display: hidden;
	} */
`;

const SocialLinks = styled.div`
	a {
		display: inline-block;
		padding: 0.25rem;
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
			color: white;
		}
	}
`;
const Profile = styled.div`
	width: 100%;
	text-align: center;
	margin-top: 1rem;
	border-bottom: 1px solid #2e344e;
	margin-bottom: 1rem;
	img {
		width: 70%;
		border-radius: 100%;
		border: 5px solid #2e344e;
		margin-bottom: 1rem;
	}
	h1 {
		font-size: 14px;
		text-align: center;
		color: #fff;
	}
`;

const Nav = styled.div`
	ul {
		width: 100%;
		li {
			list-style: none;
			a {
				text-decoration: none;
				font-size: 20px;
				display: block;
				padding: 1rem 0;
				position: relative;
				&::before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 0.4rem;
					height: 100%;
					overflow-x: hidden;
					transform-origin: bottom;
					transform: scale(0);
					transition: transform 0.6s,
						0.2s width 0.5s cubic-bezier(1, -0.16, 0, 1.32);
				}
				svg {
					min-width: 60px;
				}
				span {
					margin-left: 2px;
				}
			}
		}
	}
`;

const Footer = styled.div`
	width: 100%;
	border-top: 1px solid #2e344e;
	padding: 15px;
	font-size: 14px;
	color: #f4f6fd;
	text-align: center;
	padding: 1rem 0.5rem;
	@media (max-width: 1199px) {
		position: static;
		width: auto;
		padding-right: 15px 10px;
	}
`;
