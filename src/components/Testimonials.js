import React from 'react';
import styled from 'styled-components';
import Slides from './Slides';

function Testimonials() {
	return (
		<Container>
			<Slides
				opinion="Not only was Addisu’s work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It’s obvious he takes tremendous pride in his work, and I wouldn’t hesitate to recommend or work with him again."
				photo="testimonials-1.jpg"
				name="Yonas Fissha"
				job="Front-end Enginner"
			/>

			<Slides
				opinion="Working with Addisu was better than expected and we had really high expectations. He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach. Time after time, and without us asking, he added enhancements and improvements that resulted in a better end product for us and our clients."
				photo="testimonials-2.jpg"
				name="Tewodros Abebaw"
				job="Application developer"
			/>

			<Slides
				opinion="Addisu's a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work."
				photo="testimonials-3.jpg"
				name="Gezahegn Demas"
				job="Sr. Network Architect"
			/>

			<Slides
				opinion="I have the fortune of working with Addisu on a very regular basis. Every single project is done in a timely fashion and is delivered exactly as is outlined. Beyond that, his development skills and expertise make him an invaluable part of my process. I absolutely offer my highest possible recommendation."
				photo="testimonials-4.jpg"
				name="Berhanu Tarekegn"
				job="Freelancer"
			/>
		</Container>
	);
}

export default Testimonials;

const Container = styled.div``;

const Section = styled.div``;
