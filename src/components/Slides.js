import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Slider from 'react-slick';
import image1 from '../assets/images/testimonials/testimonials-1.jpg';
import image2 from '../assets/images/testimonials/testimonials-2.jpg';
import image3 from '../assets/images/testimonials/testimonials-3.jpg';
import image4 from '../assets/images/testimonials/testimonials-4.jpg';

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
		autoplaySpeed: 2000,
		pauseOnHover: true,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
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
		<Container className="main-slider-container">
			<Slider {...settings} className="slider">
				<div className="slider-items">
					<p>
						<em>
							<FaQuoteLeft />
							Not only was Addisu’s work on-time and to spec, he
							pays attention to improve the aesthetics of the site
							as well as the functionality. Throughout the entire
							process he is responsive, and willing to work
							through issues as they arise. It’s obvious he takes
							tremendous pride in his work, and I wouldn’t
							hesitate to recommend or work with him again.
							<FaQuoteRight />
						</em>
					</p>
					<img src={image1} alt="" />
					<h3>Yonas Fissha</h3>
					<h4>Front-end Enginner</h4>
				</div>

				<div className="slider-items">
					<p>
						<em>
							<FaQuoteLeft />
							Working with Addisu was better than expected and we
							had really high expectations. He is an incredibly
							talented developer but what really makes him stand
							out is his work ethic and steady approach. Time
							after time, and without us asking, he added
							enhancements and improvements that resulted in a
							better end product for us and our clients.
							<FaQuoteRight />
						</em>
					</p>
					<img src={image2} alt="" />
					<h3>Berhanu Tarekegn</h3>
					<h4>"Freelancer"</h4>
				</div>

				<div className="slider-items">
					<p>
						<em>
							<FaQuoteLeft />
							Addisu's a clear communicator with the tenacity and
							confidence to really dig in to tricky design
							scenarios and the collaborative friction that's
							needed to produce excellent work.
							<FaQuoteRight />
						</em>
					</p>
					<img src={image3} alt="" />
					<h3>Gezahegn Demas</h3>
					<h4>Sr. Network Architect</h4>
				</div>

				<div className="slider-items">
					<p>
						<em>
							<FaQuoteLeft />
							I have the fortune of working with Addisu on a very
							regular basis. Every single project is done in a
							timely fashion and is delivered exactly as is
							outlined. Beyond that, his development skills and
							expertise make him an invaluable part of my process.
							I absolutely offer my highest possible
							recommendation.
							<FaQuoteRight />
						</em>
					</p>
					<img src={image4} alt="" />
					<h3>Tewodros Abebaw</h3>
					<h4>Application developer</h4>
				</div>
			</Slider>
		</Container>
	);
}

export default Slides;

const Container = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	justify-content: center;
	position: relative;
	align-items: center;
	padding: 0 16px;
	margin-bottom: 5px;
	.slider {
		width: 95%;
		height: 100%;
		padding: 0 24px;
		.slider-items {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			img {
				width: 120px;
				height: 120px;
				display: block;
				margin: 7px auto;	
				border: 1px solid 'lightgray';
				border-radius: 50%;
				border: 2px solid #fff;
				
			
			}
		}
	}

	.slick-arrow.slick-prev, .slick-arrow.slick-next{
	color:  #f5f8fd;
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
