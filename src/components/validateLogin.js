export default function validateLogin(values) {
	let errors = {};

	if (!values.firstName.trim()) {
		errors.firstName = 'First name is required.';
	}
	if (!values.lastName.trim()) {
		errors.lastName = 'Last name is required.';
	}
	if (!values.email) {
		errors.email = 'Email address is required.';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'Email address is invalid.';
	}
	if (!values.subject.trim()) {
		errors.subject = 'Subject is required.';
	}
	if (!values.message.trim()) {
		errors.message = 'Message is required.';
	}

	return errors;
}
