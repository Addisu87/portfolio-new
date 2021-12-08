import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
	return (
		<>
			<Router>
				<NavMenu />
				<Routes>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/resume" element={<Resume />}></Route>
					<Route path="/projects" element={<Projects />}></Route>
					<Route path="/services" element={<Services />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
