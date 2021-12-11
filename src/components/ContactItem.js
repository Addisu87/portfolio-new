import React from 'react';

function ContactItem(icon, title, text) {
	return (
		<div>
			<div className="address">
				<img src={icon} alt="" />
				<div className="right-items">
					<h4>{title}</h4>
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
}

export default ContactItem;
