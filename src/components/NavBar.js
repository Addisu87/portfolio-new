import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import '../GlobalStyle.css';
import image from '../assets/images/profile-img.jpg';
import {
	FaBook,
	FaEnvelope,
	FaFile,
	FaHome,
	FaServer,
	FaUser
} from 'react-icons/fa';

function NavBar() {
	return (
		<SideBar>
			<Profile>
				<img src={image} alt="profile-Img" />
				<h1>Addisu Haile</h1>
			</Profile>

			<Nav>
				<ul>
					<li>
						<NavLink to="/" exact className="active">
							<FaHome />
							<span>Home</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" exact>
							<FaUser />
							<span>About</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/resume" exact>
							<FaFile />
							<span>Resume</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/portfolios" exact>
							<FaBook />
							<span>Portfolios</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/services" exact>
							<FaServer />
							<span>Services</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" exact>
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
	margin-left: 0;
	}
	@media (max-width: 768px) {
		display: hidden;
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
		margin-bottom: 14px;
	}
`;

const Nav = styled.div`
	margin: 0;
	padding: 0;
	
	ul {
		width: 100%;
		list-style: none;
		li {
			position: relative;
			white-space: nowrap;
			
			a,
			&:focus {
				display: flex;
				align-items: center;
				color: #a8a0b4;
				padding: 12px 15px;
				margin-bottom: 8px;
				transition: 0.3s;
				font-size: 15px;
				}
				svg,
				svg:focus {
					font-size: 24px;
					padding-right: 8px;
					color: #6f7180;
				}
				span {
					margin-left: 2px;
				}
			}
			&:hover,
			.active,
			.active:focus,
			li:hover > a {
				text-decoration: none;
				color: #149ddd;
			}
			&:hover,
			.active,
			.active:focus,
			li:hover > a i {
				text-decoration: none;
				color: #fff;
			}
		}
	}
	@media screen and (max-width: 786px) {
		overflow: hidden;
		outline: none !important;
		left: 0;
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
