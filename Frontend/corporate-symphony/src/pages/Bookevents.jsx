import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import styles from "../assets/css/bookevents.module.css";

function Bookevents() {
	const [toggled, setToggled] = useState(false);
	const [eventName, setEventName] = useState("");
	const [email, setEmail] = useState("");
	const [description, setDescription] = useState("");
	const [eventDateTime, setEventDateTime] = useState("");
	const [bookingDateTime, setBookingDateTime] = useState("");

	useEffect(() => {
		// Create a link element for the Google Fonts stylesheet
		const linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		linkElement.href =
			"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";

		// Append the link element to the head of the document
		document.head.appendChild(linkElement);

		// Cleanup function to remove the link element when the component is unmounted
		return () => {
			document.head.removeChild(linkElement);
		};
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const eventData = {
				eventName,
				eventEmail: email,
				eventDescription: description,
				eventDate: eventDateTime,
				eventBookedDate: bookingDateTime,
			};
			const response = await axios.post(
				"http://localhost:8081/api/bookedevents",
				eventData
			);
			console.log("Form submitted!", response.data);
			// Clear form fields after successful submission
			clearFormFields();
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};

	const clearFormFields = () => {
		setEventName("");
		setEmail("");
		setDescription("");
		setEventDateTime("");
		setBookingDateTime("");
	};

	return (
		<>
			<Sidebar
				onBackdropClick={() => setToggled(false)}
				toggled={toggled}
				breakPoint="all"
				collapsed={false}
				backgroundColor="white"
			>
				<Menu>
					<MenuItem component={<Link to="/user" />}> Dashboard</MenuItem>
					<MenuItem component={<Link to="/eventlist" />}> Event List</MenuItem>
					<MenuItem> Logout</MenuItem>
				</Menu>
			</Sidebar>
			<div className={styles.dashboardContent}>
				<main
					style={{
						display: "flex",
						padding: 10,
						justifyContent: "start",
						alignItems: "center",
					}}
				>
					<div>
						<button
							className={styles.sidebarButton}
							onClick={() => setToggled(!toggled)}
						>
							<span className={styles.materialSymbolsOutlined}>menu</span>
						</button>
					</div>
					<h1>Book Events:</h1>
				</main>
				<div className={styles.content}>
					<div className={styles.cardContent}>
						<form onSubmit={handleSubmit}>
							<h1>Details of the Event:</h1>
							<div className={styles.formLine}>
								<label htmlFor="eventName">Event Name:</label>
								<input
									type="text"
									id="eventName"
									value={eventName}
									onChange={(e) => setEventName(e.target.value)}
								/>
							</div>
							<div className={styles.formLine}>
								<label htmlFor="email">Email:</label>
								<input
									type="text"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<div className={styles.formLine}>
								<label htmlFor="description">Description:</label>
								<input
									type="text"
									id="description"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								/>
							</div>

							<div className={styles.formLine}>
								<label htmlFor="eventDateTime">Event Date and Time:</label>
								<input
									type="datetime-local"
									id="eventDateTime"
									value={eventDateTime}
									onChange={(e) => setEventDateTime(e.target.value)}
								/>
							</div>
							<div className={styles.formLine}>
								<label htmlFor="bookingDateTime">Booking Date and Time:</label>
								<input
									type="datetime-local"
									id="bookingDateTime"
									value={bookingDateTime}
									onChange={(e) => setBookingDateTime(e.target.value)}
								/>
							</div>
							<button type="submit" className={styles.bookEventBtn}>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Bookevents;
