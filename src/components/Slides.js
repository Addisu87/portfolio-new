import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlideData from './SlideData';

function Slides() {
	const PrevBtn = (props) => {
		console.log(props);
		const { className, onClick } = props;
		return <div className={className} onClick={onClick} />;
	};

	const NextBtn = (props) => {
		const { className, onClick } = props;
		return <div className={className} onClick={onClick} />;
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: <PrevBtn />,
		nextArrow: <NextBtn />,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<Container>
			<div className="slide-container">
				<Slider {...settings}>
					{SlideData.map((item) => {
						return (
							<div key={item.id}>
								<p>
									<em>
										<FaQuoteLeft />
										{item.testimonial}
										<FaQuoteRight />
									</em>
								</p>
								<img src={item.image} alt="image" />
								<h3>{item.name}</h3>
								<h5>
									<em>{item.job}</em>
								</h5>
							</div>
						);
					})}
				</Slider>
			</div>
		</Container>
	);
}

export default Slides;

const Container = styled.div`
	width: 90%;
	height: 300px;
	justify-content: center;
	position: relative;
	align-items: center;
	margin-bottom: 12px;
	.slide-container{
		width: 100%;
		height: 50vh;
		display: center;
		margin-left: 2.5rem;
		align-items: center;
		text-align: center;
		p{
			
			svg{
				color: #6ea9c4;
				border-radius: 50%;
			}
		}
		img {
			width: 120px !important;
			height: 120px;
			display: block;
			margin: 7px auto;	
			border: 1px solid 'lightgray';
			border-radius: 50%;
			border: 2px solid #fff;
		}
		h3 {
			font-size: 16px;
			font-weight: 600;
			color: #000;
			margin-left: 0.5rem;
			transition: all 0.3s ease-in-out;
			&:hover {
				color: #037fff;
				cursor: pointer;
			}
		}
	}

	.slick-arrow.slick-prev, .slick-arrow.slick-next{
	color: #f5f8fd;
	background: #149ddd;
	width: 20px;
	height: 20px;
	size: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
	border-radius: 50%;
	&:hover {
			background: #149ddd;
			color: #fff;
	} 
	.slick.prev::before,
	.slick.next::before {
		display: none;
	}
	.slick.prev:hover,
	.slick.next:hover {
		background: #149ddd;
		color: #fff;
	}

	.slick-arrow.slick-next{
		right: 0;
	}
	.slick-arrow.slick-prev{
		left: 0;
	}
`;
