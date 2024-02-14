import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import styles from "../assets/css/eventdetails.module.css";
// import { ProductCard } from "react-ui-cards";

function Profile() {
	const [toggled, setToggled] = React.useState(false);
	const [editMode, setEditMode] = useState(false);

	const initialUserData = {
		firstName: "John",
		lastName: "Doe",
		email: "john.doe@example.com",
		bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	};

	const [userData, setUserData] = useState(initialUserData);

	const toggleEditMode = () => {
		setEditMode(!editMode);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setUserData((prevData) => ({
			...prevData,
			[name]: value,
		}));
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
					<MenuItem component={<Link to="/userprofile" />}> Profile</MenuItem>
					<MenuItem> Logout</MenuItem>
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
					<h1>Profile:</h1>
				</main>

				<div
					className={styles.cardContent + " " + styles.card}
					id={styles.profileDetails}
				>
					<div className={styles.line}>
						<h1>User Profile</h1>
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
							<label>
								First Name:
								<input
									type="text"
									name="firstName"
									value={userData.firstName}
									onChange={handleInputChange}
								/>
							</label>
							<label>
								Last Name:
								<input
									type="text"
									name="lastName"
									value={userData.lastName}
									onChange={handleInputChange}
								/>
							</label>
							<label>
								Email:
								<input
									type="email"
									name="email"
									value={userData.email}
									onChange={handleInputChange}
								/>
							</label>
							<label>
								Bio:
								<input
									name="bio"
									value={userData.bio}
									onChange={handleInputChange}
								/>
							</label>
							<button className={styles.updateBtn} type="submit">
								Save
							</button>
						</form>
					) : (
						<>
							<form onSubmit={handleFormSubmit}>
								<label>
									First Name:
									<input
										type="text"
										name="firstName"
										value={userData.firstName}
										onChange={handleInputChange}
										disabled
										className={styles.displayDisabled}
									/>
								</label>
								<label>
									Last Name:
									<input
										type="text"
										name="lastName"
										value={userData.lastName}
										onChange={handleInputChange}
										disabled
										className={styles.displayDisabled}
									/>
								</label>
								<label>
									Email:
									<input
										type="email"
										name="email"
										value={userData.email}
										onChange={handleInputChange}
										disabled
										className={styles.displayDisabled}
									/>
								</label>
								<label>
									Bio:
									<input
										name="bio"
										value={userData.bio}
										onChange={handleInputChange}
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

export default Profile;
