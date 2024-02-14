import styles from "../assets/css/login.module.css";
import React, { useState } from "react";
import loginImage from "../assets/images/login.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";

const LoginPage = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const isEmailValid = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		if (!email || !password) {
			setError("Please fill in all fields");
			return;
		}

		if (!isEmailValid(email)) {
			setError("Please enter a valid email address");
			return;
		}

		try {
			// Make a POST request to the login endpoint
			const response = await axios.post(
				"http://localhost:8081/api/v1/auth/authenticate",
				{
					email,
					password,
				}
			);
			console.log("Login Success:", response.data);
			console.log("role", response.data.role);
			localStorage.setItem("role", JSON.stringify(response.data.role));
			// Reset email, password, and error state
			setEmail("");
			setPassword("");
			setError("");

			// Redirect to the user page or any other desired page upon successful login
			if (response.data.role == "USER") {
				window.location.href = "http://localhost:5173/user";
			} else {
				window.location.href = "http://localhost:5173/admin";
			}
		} catch (error) {
			// If an error occurs, set the error state with the error message
			console.error("Login Error:", error.response.data);
			setError(error.response.data.message || "An error occurred during login");
		}
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
