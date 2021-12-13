import React from 'react';
import NavBar from './components/NavBar.js';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { FaArrowCircleUp } from 'react-icons/fa';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Resume from './pages/Resume.js';
import Services from './pages/Services.js';

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
						<Route path="/services" element={<Services />}></Route>
					</Routes>
				</div>
			</div>
			<a href="#" className="back-to-top">
				<FaArrowCircleUp />
			</a>
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
		justify-content: right;
		color: #000;
	}
`;
