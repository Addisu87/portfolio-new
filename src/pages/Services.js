import React from 'react';
import ServiceContent from '../components/ServiceContent';
import Title from '../components/Title';
import styled from 'styled-components';

import Slides from '../components/Slides';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Services() {
	return (
		<Container>
			<Title title={'Services'} span={'Services'} />
			<ServiceContent />
			<Title title={'Testimonials'} span={'Testimonials'} />
			<div>
				<p>People I've worked with have said some nice things...</p>
			</div>
			<Slides />
		</Container>
	);
}

export default Services;

const Container = styled.div`
	padding: 20px 12px;
	overflow: hidden;
	background: #f5f8fd;
	p {
		padding: 8px;
	}
`;
