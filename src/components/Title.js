import React from 'react';
import styled from 'styled-components';

function Title({ title, span }) {
	return (
		<Header>
			<h2>
				{title}
				<span>{span}</span>
			</h2>
		</Header>
	);
}

export default Title;

const Header = styled.div`
	text-transform: uppercase;
	font-size: 1.5rem;
	position: relative;
	color: #173b6c;
	padding-bottom: 1rem;
	letter-spacing: 3px;
	&::before {
		content: '';
		position: absolute;
		width: 6rem;
		height: 0.3px;
		background-color: #037fff38;
		bottom: 0;
		left: 0;
		border-radius: 50px;
	}
	&::after {
		content: '';
		position: absolute;
		width: 3rem;
		height: 0.3px;
		background-color: #037fff;
		bottom: 0;
		left: 0;
		border-radius: 50px;
	}
	span {
		position: absolute;
		top: 15%;
		left: 0;
		font-size: 5rem;
		opacity: 0.07;
	}
`;
