import React, { useRef } from 'react';
import Button from "@reactComponents/Button";

import styles from './styles.module.scss';

const ContactForm = () => {
	const formRef: React.Ref<HTMLFormElement> = useRef(null);

	const handleSend = () => {
		formRef.current && formRef.current.submit()
	}

	return (
		<form className={styles.contactForm} name="contact" method="POST" data-netlify="true" ref={formRef}>
			<p>
				<label>Name <input type="text" name="name" /></label>
			</p>
			<p>
				<label>Email <input type="email" name="email" /></label>
			</p>
			<p>
				<Button color='primary' onClick={handleSend}>Send</Button>
			</p>
		</form>
	)
}

export default ContactForm;