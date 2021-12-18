import { FaGithub } from 'react-icons/fa';
import portfolio1 from '../assets/images/portfolio/portfolio-1.jpg';
import portfolio2 from '../assets/images/portfolio/portfolio-2.jpg';
import portfolio3 from '../assets/images/portfolio/portfolio-3.jpg';
import portfolio4 from '../assets/images/portfolio/portfolio-4.jpg';
import portfolio5 from '../assets/images/portfolio/portfolio-5.jpg';
import portfolio6 from '../assets/images/portfolio/portfolio-6.jpg';

const PortfoliosData = [
	{
		id: 1,
		category: 'App',
		link: 'https://github.com/Addisu87/Python-projects/blob/main/Resturant%20Mangement%20System.py',
		icon: <FaGithub />,
		image: portfolio1,
		title: 'ManagementSystem'
	},
	{
		id: 2,
		category: 'Web',
		link: 'https://github.com/Addisu87/linkedin-clone',
		icon: <FaGithub />,
		image: portfolio2,
		title: 'LinkedinClone'
	},
	{
		id: 3,
		category: 'App',
		link: 'https://github.com/Addisu87/Piano',
		icon: <FaGithub />,
		image: portfolio3,
		title: 'PianoApp'
	},
	{
		id: 4,
		category: 'Web',
		link: 'https://github.com/Addisu87/netflix-clone',
		icon: <FaGithub />,
		image: portfolio4,
		title: 'NetflixClone'
	},
	{
		id: 5,
		category: 'App',
		link: 'https://github.com/Addisu87/Weather-App',
		icon: <FaGithub />,
		image: portfolio5,
		title: 'WeatherApp'
	},
	{
		id: 6,
		category: 'Web',
		link: 'https://github.com/Addisu87/Tesla-Clone',
		icon: <FaGithub />,
		image: portfolio6,
		title: 'TeslaClone'
	}
];

export default PortfoliosData;
