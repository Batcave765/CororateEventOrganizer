import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import styles from "../assets/css/eventdetails.module.css";

function EventDetails() {
	const [toggled, setToggled] = React.useState(false);
	const [editMode, setEditMode] = useState(false);

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const encodedCardDetails = queryParams.get("details");

	// Parse the stringified object back into an object
	const initialCardDetails = encodedCardDetails
		? JSON.parse(decodeURIComponent(encodedCardDetails))
		: {
				title: "",
				description: "",
				thumbnail: "",
				tags: [], // Provide an empty array as the default value for tags
				date: "",
				// Add other properties with default values if needed
		  };

	const [cardDetails, setCardDetails] = useState(initialCardDetails);

	if (!cardDetails) {
		return <p>No event selected</p>;
	}

	const toggleEditMode = () => {
		setEditMode(!editMode);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		if (name === "tags") {
			// Split the input value into an array using commas
			const tagsArray = value.split(",").map((tag) => tag.trim());
			setCardDetails((prevDetails) => ({
				...prevDetails,
				[name]: tagsArray,
			}));
		} else {
			// For other fields, update as usual
			setCardDetails((prevDetails) => ({
				...prevDetails,
				[name]: value,
			}));
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		// Handle form submission (you can send an API request to update the details)
		// For now, let's just exit the edit mode
		setEditMode(false);
	};

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
	// The empty dependency array ensures that this effect runs only once when the component mounts

	const handleLogout = () => {
		localStorage.clear();
		window.location.href = "http://localhost:5173/";
	};

	return (
		<>
			<Sidebar
				onBackdropClick={() => setToggled(false)}
				toggled={toggled}
				breakPoint="all"
				collapsed={false}
				className={styles.reactSidebar}
			>
				<Menu>
					<MenuItem component={<Link to="/user" />}> Dashboard</MenuItem>
					<MenuItem component={<Link to="/eventlist" />}> Event List</MenuItem>
					<MenuItem onClick={handleLogout}> Logout</MenuItem>
				</Menu>
			</Sidebar>
			<div className={styles.dashboardContent}>
				<main
					className={styles.topBar}
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
					<h1>Welcome To your Dashboard</h1>
				</main>

				<div className={styles.cardContent + " " + styles.card}>
					<div className={styles.line}>
						<h2>Event Details</h2>
						<button className={styles.sidebarButton} onClick={toggleEditMode}>
							{editMode ? (
								<span
									className={
										styles.materialSymbolsOutlined + " " + styles.icons
									}
								>
									close
								</span>
							) : (
								<span
									className={
										styles.materialSymbolsOutlined + " " + styles.icons
									}
								>
									edit
								</span>
							)}
						</button>
					</div>
					{editMode ? (
						<form onSubmit={handleFormSubmit}>
							<img
								className={styles.displayTop}
								src={cardDetails.thumbnail}
								alt="thumbnail"
							/>
							<label>
								Title:
								<input
									type="text"
									name="title"
									value={cardDetails.title}
									onChange={handleInputChange}
								/>
							</label>
							<label>
								Description:
								<input
									type="text"
									name="description"
									value={cardDetails.description}
									onChange={handleInputChange}
								/>
							</label>
							<label>
								Tags:
								<input
									type="text"
									name="tags"
									value={cardDetails.tags.join(", ")}
									onChange={handleInputChange}
								/>
							</label>
							<label>
								Date:
								<input
									type="text"
									name="date"
									value={cardDetails.date}
									onChange={handleInputChange}
								/>
							</label>
							{/* Add input fields for other details */}
							<button className={styles.updateBtn} type="submit">
								Update
							</button>
						</form>
					) : (
						<>
							<form>
								<img
									className={styles.displayTop}
									src={cardDetails.thumbnail}
									alt="thumbnail"
								/>
								<label>
									Title:
									<input
										type="text"
										name="title"
										value={cardDetails.title}
										disabled
										className={styles.displayDisabled}
									/>
								</label>
								<label>
									Description:
									<input
										type="text"
										name="description"
										value={cardDetails.description}
										disabled
										className={styles.displayDisabled}
									/>
								</label>

								<label>
									Tags:
									<input
										type="text"
										name="tags"
										value={cardDetails.tags.join(", ")}
										disabled
										className={styles.displayDisabled}
									/>
								</label>
								<label>
									Date:
									<input
										type="text"
										name="date"
										value={cardDetails.date}
										disabled
										className={styles.displayDisabled}
									/>
								</label>
							</form>
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default EventDetails;
