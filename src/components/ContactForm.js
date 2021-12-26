import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import validator from 'validator';

const service_id = process.env.REACT_APP_SERVICE_ID;
const template_id = process.env.REACT_APP_TEMPLATE_ID;
const user_id = process.env.REACT_APP_USER_ID;

const ContactForm = () => {
	//form Validation
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	// Error validation
	// const [emailError, setEmailError] = useState('');
	const [errorMessages, setErrorMessages] = useState([]);
	const [showErrors, setShowErrors] = useState(false);

	const validateEmail = (e) => {
		if (validator.isEmail(email)) {
			return true;
			// setEmailError('Valid Email :)');
		} else {
			return false;
			// setEmailError('Enter valid Email!');
		}
	};

	let errors = [];

	const formValidation = () => {
		setErrorMessages([]);

		const isNameValid = name !== ('' || /^[a-zA-Z]+$/);
		const isSubjectValid = subject !== '';
		const isMessageValid = message !== '';

		if (!isNameValid) {
			errors.push('Name is not valid');
		}
		if (!validateEmail(email) || email === '') {
			errors.push('Enter valid Email!');
		}
		if (!isSubjectValid) {
			errors.push('Subject is not valid.');
		}
		if (!isMessageValid) {
			errors.push('Message is not valid.');
		}
		// if (errors.length > 0) {
		// 	setShowErrors({ showErrors: true });
		// 	setErrorMessages(errors);
		// } else {
		// 	setShowErrors({ showErrors: false });
		// }
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(service_id, template_id, e.target, user_id).then(
			(result) => {
				setShowErrors({ showErrors: false });
				console.log(result.text);
				Swal.fire({
					icon: 'success',
					title: 'Message Sent Successfully'
				});
			},
			(error) => {
				setShowErrors({ showErrors: true });
				setErrorMessages(errors);
				console.log(error.text);
				Swal.fire({
					icon: 'error',
					title: 'Oops, something went wrong',
					text: error.text
				});
			}
		);
		e.target.reset();
	};

	return (
		<Wrap>
			<form onSubmit={sendEmail}>
				<TextField
					id="outlined-basic-name"
					label="Full name"
					variant="outlined"
					fullWidth
					placeholder="Name..."
					required
					margin="normal"
					onChange={(e) => setName({ name: e.target.value })}
				/>

				<TextField
					id="outlined-basic-email"
					variant="outlined"
					fullWidth
					label="Email"
					placeholder="Email…"
					required
					margin="normal"
					onChange={(e) =>
						setEmail({ email: validateEmail(e.target.value) })
					}
				/>

				<TextField
					id="outlined-basic-subject"
					variant="outlined"
					fullWidth
					label="Subject"
					placeholder="Subject…"
					required
					margin="normal"
					onChange={(e) => setSubject({ subject: e.target.value })}
				/>

				<TextField
					id="outlined-basic-opinion"
					multiline
					variant="outlined"
					rows={10}
					fullWidth
					label="Message"
					placeholder="Message..."
					required
					margin="normal"
					onChange={(e) => setMessage({ message: e.target.value })}
				/>

				{showErrors
					? errorMessages.map((item, index) => {
							return <ul key={index}>{item}</ul>;
					  })
					: null}

				<Button
					variant="contained"
					color="primary"
					type="submit"
					onClick={formValidation}
				>
					Send Message
				</Button>
			</form>
		</Wrap>
	);
};

export default ContactForm;

const Wrap = styled.div`
	text-align: center;
	max-width: 100%;
	margin: 18px auto;
	height: 100%;
	flex: 0.7;
	form {
		border: 1px solid lightgray;
		border-radius: 10px;
		padding: 20px;
		margin: 25px 0;
		Button {
			width: 40%;
		}
	}
`;
