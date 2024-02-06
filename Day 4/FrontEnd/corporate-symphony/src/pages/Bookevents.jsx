import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import styles from "../assets/css/bookevents.module.css";

function Bookevents() {
	const [toggled, setToggled] = useState(false);
	const [eventName, setEventName] = useState("");
	const [username, setUsername] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [contact, setContact] = useState("");
	const [location, setLocation] = useState("");
	const [numberOfPeople, setNumberOfPeople] = useState("");
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
	}, []); // The empty dependency array ensures that this effect runs only once when the component mounts

	const handleSubmit = (e) => {
		e.preventDefault();
		// Perform form submission logic here
		console.log("Form submitted!");
		console.log("Event Name:", eventName);
		console.log("Username:", username);
		console.log("Company Name:", companyName);
		console.log("Contact:", contact);
		console.log("Location:", location);
		console.log("Number of People:", numberOfPeople);
		console.log("Event Date and Time:", eventDateTime);
		console.log("Booking Date and Time:", bookingDateTime);
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
								<label htmlFor="username">Username:</label>
								<input
									type="text"
									id="username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div className={styles.formLine}>
								<label htmlFor="companyName">Company Name:</label>
								<input
									type="text"
									id="companyName"
									value={companyName}
									onChange={(e) => setCompanyName(e.target.value)}
								/>
							</div>
							<div className={styles.formLine}>
								<label htmlFor="contact">Contact:</label>
								<input
									type="text"
									id="contact"
									value={contact}
									onChange={(e) => setContact(e.target.value)}
								/>
							</div>
							<div className={styles.formLine}>
								<label htmlFor="location">Location:</label>
								<input
									type="text"
									id="location"
									value={location}
									onChange={(e) => setLocation(e.target.value)}
								/>
							</div>
							<div className={styles.formLine}>
								<label htmlFor="numberOfPeople">Number of People:</label>
								<input
									type="number"
									id="numberOfPeople"
									value={numberOfPeople}
									onChange={(e) => setNumberOfPeople(e.target.value)}
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
