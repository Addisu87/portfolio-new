import React from 'react';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';
import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Slides({ opinion, name, job, photo }) {
	return (
		<Container>
			<Swiper
				className="mySwiper"
				modules={[Navigation, Pagination]}
				spaceBetween={50}
				slidesPerView={3}
				pagination={{
					type: 'progressbar'
				}}
				navigation={true}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide className="swiper-slide">
					<div>
						<p>
							<FaQuoteLeft />
							{opinion}
							<FaQuoteRight />
						</p>
						<h3>{name}</h3>
						<h4>{job}</h4>
						<img src={photo} alt="" />
					</div>
				</SwiperSlide>
			</Swiper>
		</Container>
	);
}

export default Slides;

const Container = styled.div`
	width: 100%;
	height: 100%;
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;

		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
`;
