import React from 'react';
import styled from 'styled-components';

function Card({ icon, title, text }) {
	return (
		<Address>
			<div className="info-items">
				<i>{icon}</i>
				<h4>{title}</h4>
				<p>{text}</p>
			</div>
		</Address>
	);
}

export default Card;

const Address = styled.div`
	i {
		font-size: 20px;
		color: #149ddd;
		float: left;
		width: 44px;
		height: 44px;
		background: #dff3fc;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50px;
		transition: all 0.3s ease-in-out;
		&:hover {
			background: #149ddd;
			color: #fff;
		}
	}
	h4 {
		padding: 0 0 0 60px;
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 3px;
		color: #050d18;
	}
	p {
		padding: 0 0 10px 60px;
		margin-bottom: 20px;
		font-size: 14px;
		color: #173b6c;
	}
`;
