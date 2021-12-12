import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import '../GlobalStyle.css';
import image from '../assets/images/profile-img.jpg';
import {
	FaBook,
	FaEnvelope,
	FaFacebook,
	FaFile,
	FaGithub,
	FaHome,
	FaInstagram,
	FaLinkedin,
	FaServer,
	FaTwitter,
	FaUser
} from 'react-icons/fa';

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
						rel="noreferrer"
						className="facebook social"
					>
						<FaFacebook />
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
						href="https://www.linkedin.com/in/addisu-tedla-8b4a10143/"
						target="_blank"
						rel="noreferrer"
						class="linkedin social"
					>
						<FaLinkedin />
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
			</Profile>

			<Nav>
				<ul>
					<li>
						<NavLink to="/">
							<FaHome />
							<span>Home</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/about">
							<FaUser />
							<span>About</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/resume">
							<FaFile />
							<span>Resume</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/projects">
							<FaBook />
							<span>Projects</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/services">
							<FaServer />
							<span>Services</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact">
							<FaEnvelope />
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
