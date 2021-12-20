import React from 'react';
import styled from 'styled-components';

function Catagories({ filter, categories }) {
	return (
		<Container>
			{categories?.map((cat, index) => {
				return (
					<button
						type="button"
						onClick={() => filter(cat)}
						key={index}
					>
						{cat}
					</button>
				);
			})}
		</Container>
	);
}

export default Catagories;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 4rem;
	flex-wrap: wrap;
	@media screen and (max-width: 768px) {
		margin: 0.5rem 0.5rem;
		grid-template-columns: repeat(1, 1fr);
	}
	button {
		padding: 0.6rem 1rem;
		background-color: #037fff5b;
		border: none;
		outline: none;
		cursor: pointer;
		font-size: inherit;
		font-family: inherit;
		color: #000;
		border-radius: 50%;
		margin-bottom: 0.5rem;
		transition: all 0.3s ease-in-out;
		&:not(:last-child) {
			margin-right: 1rem;
		}
		&:hover {
			background-color: #149ddd;
		}
		&:active {
			background-color: #149ddd;
		}
		&:focus {
			background-color: #149ddd;
		}
	}
`;
