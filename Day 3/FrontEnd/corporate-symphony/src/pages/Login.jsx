import styles from "../assets/css/login.module.css";
import React, { useState } from "react";
import loginImage from "../assets/images/login.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const LoginPage = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const isEmailValid = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleLogin = (e) => {
		e.preventDefault();

		if (!email || !password) {
			setError("Please fill in all fields");
			return;
		}

		if (!isEmailValid(email)) {
			setError("Please enter a valid email address");
			return;
		}

		console.log("Email:", email);
		console.log("Password:", password);

		setEmail("");
		setPassword("");
		setError("");
		navigate("/user");
	};

	return (
		<>
			<Navbar />
			<div className={styles.contentContainer}>
				<div className={styles.loginContainer}>
					<div className={styles.loginImage}>
						<img src={loginImage} alt="Login" />
					</div>
					<form onSubmit={handleLogin}>
						<h1>Login</h1>
						<label>
							Email:
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter your email"
							/>
						</label>
						<label>
							Password:
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Enter your password"
							/>
						</label>
						{error && <p className={styles.errormessage}>{error}</p>}
						<button className={styles.loginform} type="submit">
							Login
						</button>
						Don't have an account?
						<Link to="/signup"> Sign up</Link>
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
