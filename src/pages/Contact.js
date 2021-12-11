import {
	faMapLocation,
	faSquarePhone,
	faVoicemail
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import ContactItem from '../components/ContactItem';

function Contact() {
	return (
		<Container>
			<div className="map-section">
				<iframe
					src="https://www.google.com/maps/emb   ed?pb=!1m18!1m12!1m3!1d17783.63509004089!2d37.993049043930355!3d11.860116659256622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16447de8d1cb7d57%3A0x8e1445393ee72527!2z4Yiw4Y2I4YioIOGMiOGKkOGJtSDvvIjhiJjhiI7vvIksIOGLsOGJpeGIqCDhibPhiabhiK0!5e1!3m2!1sam!2set!4v1637838405049!5m2!1sam!2set"
					frameborder="0"
					border="0"
					width="600"
					height="450"
					allowfullscreen
					tabIndex="0"
					aria-hidden="false"
				></iframe>
			</div>
			<div className="contact-info">
				<ContactItem
					icon={faMapLocation}
					title={'Location:'}
					text={'Local 04 Mello, Debre Tabor, Ethiopia'}
				/>
				<ContactItem
					icon={faVoicemail}
					title={'Email:'}
					text={
						'addisuhaile87@gmail.com &amp; addisu.haile@yahoo.com'
					}
				/>
				<ContactItem
					icon={faSquarePhone}
					title={'Phone:'}
					text={'+251 912 912 144'}
				/>
			</div>
		</Container>
	);
}

export default Contact;

const Container = styled.div``;
