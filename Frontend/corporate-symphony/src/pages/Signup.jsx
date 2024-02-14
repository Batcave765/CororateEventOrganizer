import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../assets/css/Login.module.css";
import signupImage from "../assets/images/signup.svg";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";

const Signup = () => {
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [role, setRole] = useState("User"); // Default role is User
	const [error, setError] = useState("");

	const isEmailValid = (email) => {
		// Basic email validation using a regex
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleSignup = async (e) => {
		e.preventDefault();

		if (!username || !email || !mobileNumber || !password || !confirmPassword) {
			setError("Please fill in all fields");
			return;
		}

		if (!isEmailValid(email)) {
			setError("Please enter a valid email address");
			return;
		}

		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		try {
			// Make a POST request using Axios
			const response = await axios.post(
				"http://localhost:8081/api/v1/auth/register",
				{
					name: username,
					email,
					mobileno: mobileNumber,
					password,
					role,
				}
			);
			console.log("Signup Success:", response.data);

			// Reset form fields and error state
			setUsername("");
			setEmail("");
			setMobileNumber("");
			setPassword("");
			setConfirmPassword("");
			setRole("User");
			setError("");

			// Redirect to login page
			navigate("/login");
		} catch (error) {
			console.error("Signup Error:", error.response.data);
			setError(
				error.response.data.message || "An error occurred during signup"
			);
		}
	};

	return (
		<>
			<Navbar />
			<div className={styles.contentContainer}>
				<div className={styles.loginContainer}>
					<div className={styles.loginImage}>
						<img src={signupImage} alt="Login" />
					</div>
					<form onSubmit={handleSignup}>
						<h1>Signup</h1>
						<label>
							Username:
							<input
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								placeholder="Enter your username"
								required
							/>
						</label>
						<label>
							Email:
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter your email"
								required
							/>
						</label>
						<label>
							Mobile Number:
							<input
								type="tel" // Use type "tel" for mobile numbers
								pattern="[+]{1}[0-9]{11,14}"
								value={mobileNumber}
								onChange={(e) => setMobileNumber(e.target.value)}
								placeholder="Enter your mobile number"
								required
							/>
						</label>
						<label>
							Password:
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Enter your password"
								required
							/>
						</label>
						<label>
							Confirm Password:
							<input
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								placeholder="Confirm your password"
								required
							/>
						</label>
						<label>
							Role:
							<select value={role} onChange={(e) => setRole(e.target.value)}>
								<option value="User">User</option>
								<option value="Admin">Admin</option>
							</select>
						</label>
						{error && <p className={styles.errormessage}>{error}</p>}
						<button className={styles.loginform} type="submit">
							Signup
						</button>
						Already have an account? <Link to="/login">Login</Link>
					</form>
				</div>
			</div>
		</>
	);
};

export default Signup;
