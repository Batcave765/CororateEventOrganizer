// ContactUs.js

import React, { useState } from "react";
import "../assets/css/contactus.css";
import Navbar from "../components/Navbar";
const ContactUs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your logic to handle form submission
		console.log("Form submitted:", { name, email, message });
		// You can make an API call or perform any other necessary actions here
	};

	return (
		<>
			<Navbar />
			<div className="contact-us-container">
				<h2 className="title">Contact Us</h2>
				<form className="form-container" onSubmit={handleSubmit}>
					<div className="cline">
						<label className="label" htmlFor="name">
							Name:
						</label>
						<input
							className="input-field"
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className="cline">
						<label className="label" htmlFor="email">
							Email:
						</label>
						<input
							className="input-field"
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="cline">
						<label className="label" htmlFor="message">
							Message:
						</label>
						<textarea
							className="textarea-field"
							id="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
						></textarea>
					</div>
					<div className="c   line">
						<button className="submit-button" type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactUs;
