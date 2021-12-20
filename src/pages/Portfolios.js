import React, { useState } from 'react';
import Catagories from '../components/Catagories';
import Title from '../components/Title';
import PortfoliosData from '../components/PortfoliosData';
import MenuItems from '../components/MenuItems';
import styled from 'styled-components';

const allCategories = [
	'All',
	...new Set(PortfoliosData.map((item) => item.category))
];
console.log(allCategories);

function Portfolios() {
	const [categories, setCategories] = useState(allCategories);
	const [menuItems, setMenuItems] = useState(PortfoliosData);

	const filter = (category) => {
		if (category === 'All') {
			setMenuItems(PortfoliosData);
			return;
		}
		const filteredData = PortfoliosData.filter((item) => {
			return item.category === category;
		});
		setMenuItems(filteredData);
	};
	return (
		<PortfolioPage>
			<div class="title">
				<Title title={'Portfolios'} span={'Portfolios'} />
				<p>
					This is a selection of projects I have worked in the past
					year. As a self-employed developer I had a chance to meet
					and work aside with some of the most talented people across
					the world.
				</p>
			</div>
			<div className="portfolios-data">
				<Catagories filter={filter} categories={categories} />
				<MenuItems menuItem={menuItems} />
			</div>
		</PortfolioPage>
	);
}

export default Portfolios;

const PortfolioPage = styled.div`
	padding: 20px 12px;
	overflow: hidden;
	background: #f5f8fd;
	p {
		padding: 8px;
	}
`;
