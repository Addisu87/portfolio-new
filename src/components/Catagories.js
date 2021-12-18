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
	margin: 2rem 6rem;
	flex-wrap: wrap;
	button {
		padding: 0.6rem 2rem;
		background-color: #037fff5b;
		border: none;
		outline: none;
		cursor: pointer;
		font-size: inherit;
		font-family: inherit;
		color: white;
		border-radius: 50%;
		margin-bottom: 1rem;
		transition: all 0.3s ease-in-out;
		&:not(:last-child) {
			margin-right: 1rem;
		}
		&:hover {
			background-color: #037fff;
		}
		&:active {
			background-color: #037fff;
		}
		&:focus {
			background-color: #037fff;
		}
	}
`;
