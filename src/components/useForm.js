import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

const service_id = process.env.REACT_APP_SERVICE_ID;
const template_id = process.env.REACT_APP_TEMPLATE_ID;
const user_id = process.env.REACT_APP_USER_ID;

function useForm(callback, validate) {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		subject: '',
		message: ''
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});

		// handle errors
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs.sendForm(service_id, template_id, e.target, user_id).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return { handleChange, handleSubmit, values, errors };
}

export default useForm;
