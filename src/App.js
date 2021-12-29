import React, { useState } from 'react';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolios from './pages/Portfolios';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ScrollTopArrow from './components/ScrollTopArrow';

function App() {
	const [navToggle, setNavToggle] = useState(false);

	const navClick = () => {
		setNavToggle(!navToggle);
	};

	return (
		<Router>
			<Main className="app">
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
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/resume" element={<Resume />} />
							<Route
								path="/portfolios"
								element={<Portfolios />}
							/>
							<Route path="/services" element={<Services />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</div>
				</div>
				<div>
					<ScrollTopArrow />
				</div>
			</Main>
		</Router>
	);
}

export default App;

const Main = styled.div`
	.side-bar {
		width: 16%;
		height: 100vh;
		background-color: #191d2b;
		position: fixed;
		z-index: 11;
		border-right: 1px solid #2e344e;
		transform-origin: left;
		@media screen and (max-width: 1024px) {
			transform: translateX(-250px);
			transition: all 0.4s ease-in-out;
			width: 30%;
		}
		@media screen and (max-width: 768px) {
			width: 20%;
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
		.content {
			margin: 0.5rem 0.5rem;
			@media screen and (max-width: 1024px) {
				margin: 0.5rem 0.5rem;
			}
			@media screen and (max-width: 768px) {
				margin: 0;
			}
		}
		@media screen and (max-width: 1024px) {
			margin-left: 0;
			width: 100%;
		}
	}
	@media screen and (max-width: 768px) {
		svg {
			height: 10px;
		}
		h2 {
			font-size: 18px;
		}
		h3 {
			font-size: 14px;
		}
		h4 {
			font-size: 12px;
		}
		h5 {
			font-size: 10px;
		}
	}
	.nav-btn {
		position: absolute;
		z-index: 10;
		right: 10%;
		top: 5%;
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		.line-1,
		.line-2,
		.line-3 {
			height: 0.3rem;
			width: 100%;
			background-color: #149ddd;
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
`;
