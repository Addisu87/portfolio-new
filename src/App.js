import React, { useState } from 'react';
import NavBar from './components/NavBar.js';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { FaArrowCircleUp } from 'react-icons/fa';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Resume from './pages/Resume.js';
import Portfolios from './pages/Portfolios';
import Services from './pages/Services.js';
import Contact from './pages/Contact.js';

function App() {
	const [navToggle, setNavToggle] = useState(false);

	const navClick = () => {
		setNavToggle(!navToggle);
	};
	return (
		<Wrap>
			<div className={`side-bar ${navToggle ? 'navToggle' : ' '}`}>
				<NavBar />
			</div>
			<div className="nav-btn" onClick={navClick}>
				<div className="line-1"></div>
				<div className="line-2"></div>
				<div className="line-3"></div>
			</div>
			<div className="main-content">
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} exact></Route>
						<Route path="/about" element={<About />} exact></Route>
						<Route
							path="/resume"
							element={<Resume />}
							exact
						></Route>
						<Route
							path="/portfolios"
							element={<Portfolios />}
							exact
						></Route>
						<Route
							path="/services"
							element={<Services />}
							exact
						></Route>
						<Route
							path="/contact"
							element={<Contact />}
							exact
						></Route>
					</Routes>
				</div>
			</div>
			<div className="back-to-top">
				<a href="#">
					<FaArrowCircleUp />
				</a>
			</div>
		</Wrap>
	);
}

export default App;

const Wrap = styled.div`
	.side-bar {
		width: 16%;
		height: 100vh;
		background-color: #191d2b;
		position: fixed;
		z-index: 11;
		border-right: 1px solid #2e344e;
		transform-origin: left;
		@media screen and (max-width: 1024px) {
			transform: translateX(-100px);
			transition: all 0.4s ease-in-out;
			width: 20%;
		}
		@media screen and (max-width: 768px) {
			width: 30%;
		}
	}
	.navToggle {
		@media screen and (max-width: 1024px) {
			transition: all 0.4s ease-in-out;
			transform: translateX(0);
		}
	}
	.main-content {
		width: 84%;
		margin-left: 16%;
		background-color: #fff;
		min-height: 100vh;
		position: relative;
		display: grid;
		.content {
			margin: 0.5rem 0.5rem;
			@media screen and (max-width: 1024px) {
				margin: 0.8rem 0.5rem;
			}
			@media screen and (max-width: 1400px) {
				margin: 0.5rem 0.5rem;
			}
			@media screen and (max-width: 768px) {
				margin: 0.2rem 0.5rem;
			}
		}
	}
	@media screen and (max-width: 1024px) {
		margin-left: 0;
		width: 100%;
	}
	.nav-btn {
		position: absolute;
		z-index: 10;
		right: 10%;
		top: 5%;
		width: 2rem;
		height: 2rem;
		display: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		.line-1,
		.line-2,
		.line-3 {
			height: 0.3rem;
			width: 100%;
			background-color: #037fff;
			pointer-events: none;
			display: none;
			border-radius: 30px;
			&:not(:last-child) {
				margin-bottom: 0.5rem;
			}
		}
		@media screen and (max-width: 1000px) {
			display: block;
			.line-1,
			.line-2,
			.line-3 {
				display: block;
			}
		}
	}
	.back-to-top {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		width: 40px;
		height: 40px;
	}
`;
