import React from 'react';
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
	return (
		<Wrap>
			<div className="side-bar">
				<NavBar />
			</div>
			<div className="main-content">
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route path="/resume" element={<Resume />}></Route>
						<Route
							path="/portfolios"
							element={<Portfolios />}
						></Route>
						<Route path="/services" element={<Services />}></Route>
						<Route path="/contact" element={<Contact />}></Route>
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
		border-right: 5px solid #2e344e;
	}
	.main-content {
		width: 84%;
		margin-left: 16%;
		background-color: #fff;
		min-height: 100vh;
		position: relative;
	}
	.back-to-top {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		width: 40px;
		height: 40px;
		/* color: #050d18; */
		/* visibility: hidden; */
		/* opacity: 0;
		right: 15px;
		bottom: 20px; */
		/* z-index: 996; */
		/* background: #fff; */
		/* border-radius: 50px;
		transition: all 0.4s; */
		/* i {
			font-size: 28px;
			color: #fff;
			line-height: 0;
		}
		&:hover {
			background: #2eafec;
			color: #fff;
		}
		&.active {
			visibility: visible;
			opacity: 1;
		} */
	}
`;
