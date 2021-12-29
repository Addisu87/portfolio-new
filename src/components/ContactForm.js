import React from 'react';
import {
	Box,
	Button,
	Container,
	CssBaseline,
	Grid,
	TextField
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import useForm from './useForm';
import validate from './validateLogin';

const ContactForm = () => {
	const { handleChange, handleSubmit, values, errors } = useForm(
		submit,
		validate
	);

	function submit() {
		Swal.fire({
			icon: 'success',
			title: 'Message Sent Successfully'
		});
	}

	const theme = createTheme();

	return (
		<Wrap>
			<ThemeProvider theme={theme}>
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<Box
						sx={{
							marginTop: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					>
						<Box
							component="form"
							noValidation
							autoComplete="off"
							onSubmit={handleSubmit}
							sx={{ mt: 2 }}
						>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										className={`${
											errors.firstName && 'inputError'
										}`}
										id="firstName"
										label="First Name"
										name="firstName"
										type="text"
										required
										autoFocus
										value={values.firstName}
										onChange={handleChange}
									/>
									{errors.firstName && (
										<p className="error">
											{errors.firstName}
										</p>
									)}
								</Grid>

								<Grid item xs={12} sm={6}>
									<TextField
										className={`${
											errors.lastName && 'inputError'
										}`}
										id="lastName"
										label="Last Name"
										name="lastName"
										type="text"
										required
										value={values.lastName}
										onChange={handleChange}
									/>
									{errors.lastName && (
										<p className="error">
											{errors.lastName}
										</p>
									)}
								</Grid>

								<Grid item xs={12}>
									<TextField
										className={`${
											errors.email && 'inputError'
										}`}
										id="email"
										label="Email Address"
										name="email"
										type="email"
										fullWidth
										required
										value={values.email}
										onChange={handleChange}
									/>
									{errors.email && (
										<p className="error">{errors.email}</p>
									)}
								</Grid>

								<Grid item xs={12}>
									<TextField
										className={`${
											errors.subject && 'inputError'
										}`}
										id="subject"
										name="subject"
										label="Subject"
										type="text"
										required
										fullWidth
										value={values.subject}
										onChange={handleChange}
									/>
									{errors.subject && (
										<p className="error">
											{errors.subject}
										</p>
									)}
								</Grid>

								<Grid item xs={12}>
									<TextField
										className={`${
											errors.message && 'inputError'
										}`}
										id="message"
										multiline
										name="message"
										label="Message"
										rows={10}
										type="text"
										fullWidth
										required
										value={values.message}
										onChange={handleChange}
									/>
									{errors.message && (
										<p className="error">
											{errors.message}
										</p>
									)}
								</Grid>
							</Grid>
							<Button
								variant="contained"
								color="success"
								type="submit"
								fullWidth
								sx={{ mt: 3, mb: 2 }}
							>
								Submit
							</Button>
						</Box>
					</Box>
				</Container>
			</ThemeProvider>
		</Wrap>
	);
};

export default ContactForm;

const Wrap = styled.div`
	.error {
		color: red;
		font-size: 12px;
	}
	.inputError {
		border-color: red;
	}
`;
