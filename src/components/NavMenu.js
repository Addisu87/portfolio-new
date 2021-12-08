import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import '../GlobalStyle.css';
import image from '../images/profile-img.jpg';
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

function NavMenu() {
	return (
		<div>
			<Nav className="navbar">
				<div>
					<img src={image} alt="" />
					<h1>Addisu Haile</h1>
				</div>
				<div class="social-container">
					<a
						href="https://www.facebook.com/addisuhaile87/"
						className="facebook social"
					>
						<FontAwesomeIcon icon={faFacebook} size="1x" />
					</a>
					<a
						href="https://twitter.com/AddisuTedla"
						className="twitter social"
					>
						<FontAwesomeIcon icon={faTwitter} size="1x" />
					</a>
					<a
						href="https://www.instagram.com/addisu_haile/"
						className="instagram social"
					>
						<FontAwesomeIcon icon={faInstagram} size="1x" />
					</a>
					<a
						href="https://www.linkedin.com/in/addisu-tedla-8b4a10143/"
						class="linkedin social"
					>
						<FontAwesomeIcon icon={faLinkedin} size="1x" />
					</a>
					<a href="https://github.com/Addisu87" class="github social">
						<FontAwesomeIcon icon={faGithub} size="1x" />
					</a>
				</div>
				<div>
					<ul>
						<li>
							<NavLink to="/home">
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
				</div>
			</Nav>
		</div>
	);
}

export default NavMenu;

const Nav = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 300px;
	transition: all ease-in-out 0.5s;
	background: gray;
	color: white;
	z-index: 9997;
	transition: all 0.5s;
	overflow-y: none;
	img {
		border-radius: 50%;
		height: 50%;
		width: 50%;
		padding: 5px 10px;
	}
	h1 {
		padding: 0 10px;
	}
	a {
		display: inline-block;
		margin: 0 0.5rem;
		transition: transform 250ms;
		color: red;
	}
	a:hover {
		transform: translateY(-2px);
		color: #00a0dc;
	}
	a.facebook {
		color: #4968ad;
	}
	a.twitter {
		color: #49a1eb;
	}

	a.instagram {
		color: #c13584;
	}
	a.linkedin {
		color: #00a0dc;
	}

	a.github {
		color: black;
	}
	ul {
		position: relative;
		max-width: 300px;
		margin: 0;
		width: 100%;
		padding: 25px 0px;
		li {
			margin-bottom: 15px;
			color: white;
			svg {
				min-width: 50px;
			}
			span {
				margin-left: 5px;
			}
		}
	}
`;
