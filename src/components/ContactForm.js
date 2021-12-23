import React from 'react';
import { Button, Input, TextareaAutosize, TextField } from '@mui/material';
import { FaMailBulk, FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components';

const ContactForm = () => {
	return (
		<Wrap>
			<form>
				<TextField
					id="form-input-control-name"
					control={Input}
					label="Full name"
					name="user_name"
					placeholder="Name..."
					required
					icon={<FaUserCircle />}
					iconPosition="left"
				/>
				<TextField
					id="form-input-control-email"
					control={Input}
					label="Email"
					name="user_email"
					placeholder="Email…"
					required
					icon={<FaMailBulk />}
					iconPosition="left"
				/>
				<TextField
					id="form-textarea-control-opinion"
					control={TextareaAutosize}
					label="Message"
					name="user_message"
					placeholder="Message..."
					required
				/>
				<Button variant="contained" color="primary" type="submit">
					Submit
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
	form {
		display: flex;
		flex-direction: column;
		border: 1px solid lightgray;
		border-radius: 10px;
		padding: 20px;

		Button {
			width: 30%;
			align-items: center;
		}
	}
`;
