import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

function ScrollTopArrow() {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	window.addEventListener('scroll', checkScrollTop);

	return (
		<Button>
			<FaArrowCircleUp
				className="scrollTop"
				onClick={scrollTop}
				style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
			/>
		</Button>
	);
}

export default ScrollTopArrow;

const Button = styled.div`
	.scrollTop {
		position: fixed;
		width: 40px;
		height: 40px;
		bottom: 15px;
		left: 50%;
		right: 15px;
		bottom: 15px;
		z-index: 996;
		color: #2eafec;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		animation: fadeIn 0.3s;
		transition: all 0.4s;
		opacity: 0.5;
		&:hover {
			visibility: visible;
			opacity: 1;
		}
		@keyframes fadeIn {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 0.5;
			}
		}
	}
`;
