import React from 'react';
import NavBar from './components/NavBar.js';
import styled from 'styled-components';
import Home from './pages/Home.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
// import Contact from './pages/Contact.js';

function App() {
	return (
		<Wrap>
			<div className="side-bar">
				<NavBar />
			</div>
			<div className="main-content">
				<div className="content">
					<Home />
				</div>
				{/* <Contact /> */}
			</div>
			<a href="#" className="back-to-top">
				<FontAwesomeIcon icon={faCircleUp} />
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
