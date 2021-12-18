import React from 'react';
import styled from 'styled-components';

function MenuItems({ menuItem }) {
	return (
		<Container>
			{menuItem.map((item) => {
				return (
					<div className="portfolio" key={item.id}>
						<div className="image-data">
							<img src={item.image} alt="" />
							<ul className="hover-items">
								<li>
									<a href={item.link}>{item.icon}</a>
								</li>
							</ul>
						</div>
						<h4>{item.title}</h4>
						<p>Placeholder paragraph</p>
					</div>
				);
			})}
		</Container>
	);
}

export default MenuItems;

const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	row-gap: 2rem;
	column-gap: 1rem;
	.portfolio {
		.image-data {
			position: relative;
			&::before {
				content: '';
				position: absolute;
				top: 12px;
				left: 15px;
				height: calc(100% - 30px);
				width: calc(100% - 30px);
				background-color: white;
				transform-origin: center;
				transform: scale(0);
				transition: all 0.4s ease-in-out;
				opacity: 0.9;
			}
			&:hover::before {
				transform: scale(1);
			}
			img {
				width: 100%;
				height: 30vh;
				object-fit: cover;
			}

			.hover-items {
				list-style: none;
				position: absolute;
				top: 70%;
				left: 50%;
				transform: translate(-50%, -50%);
				padding: 1rem 2rem;
				visibility: hidden;
				li {
					a {
						padding: 1rem;
						text-decoration: none;
						font-family: inherit;
						border-radius: 100%;
						size: 100px;
						color: black;
						background-color: white;
						&:not(:last-child) {
							margin-right: 0.5rem;
						}
					}
				}
			}
			&:hover {
				.hover-items {
					transition: all 0.5s ease-in-out 0.2s;
					visibility: visible;
					top: 50%;
				}
			}
		}

		h4 {
			font-size: 1.2rem;
			font-weight: 400;
			color: #000;
			transition: all 0.3s ease-in-out;
			&:hover {
				color: #037fff;
				cursor: pointer;
			}
		}
	}
`;
