import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import styles from "../assets/css/userdisplay.module.css";
import axios from "axios";

function UserDisplay() {
	const [toggled, setToggled] = useState(false);
	const [users, setUsers] = useState([]);

	// const users = [
	// 	{
	// 		userId: 42235,
	// 		customerName: "John Doe",
	// 		events: "Seminar",
	// 		date: "2024-02-01",
	// 	},
	// 	{
	// 		userId: 42442,
	// 		customerName: "Jennifer Smith",
	// 		events: "Product Launch",
	// 		date: "2024-02-02",
	// 	},
	// 	{
	// 		userId: 42257,
	// 		customerName: "John Smith",
	// 		events: "Conference",
	// 		date: "2024-02-03",
	// 	},
	// 	{
	// 		userId: 42311,
	// 		customerName: "John Carpenter",
	// 		events: "Retreat",
	// 		date: "2024-02-04",
	// 	},
	// ];

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8081/api/v1/auth/users"
				);
				setUsers(response.data); // Assuming response.data is an array of user objects
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		};

		fetchData();
		const linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		linkElement.href =
			"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";

		document.head.appendChild(linkElement);

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
					<MenuItem component={<Link to="/admin" />}> Dashboard</MenuItem>
					<MenuItem component={<Link to="/userdisplay" />}> Users</MenuItem>
					<MenuItem component={<Link to="/admineventlist" />}>
						{" "}
						Event List
					</MenuItem>

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
					<h1>Users List</h1>
				</main>
			</div>
			<div className={styles.cardContent}>
				<h1>All Users</h1>
				<ul className={styles.responsiveTable}>
					<ul className={styles.responsiveTable}>
						<li className={styles.tableHeader}>
							<div className={`${styles.col} ${styles.col1}`}>User Id</div>
							<div className={`${styles.col} ${styles.col1}`}>User Name</div>
							<div className={`${styles.col} ${styles.col1}`}>user Email</div>
							<div className={`${styles.col} ${styles.col1}`}>Role</div>
						</li>
						{users.map((user) => (
							<li key={user.userId} className={styles.tableRow}>
								<div
									className={`${styles.col} ${styles.col1}`}
									data-label="User ID"
								>
									{user.id}
								</div>
								<div
									className={`${styles.col} ${styles.col1}`}
									data-label="User Name"
								>
									{user.name.toUpperCase()}
								</div>
								<div
									className={`${styles.col} ${styles.col1}`}
									data-label="User Email"
								>
									{user.email} {/* Assuming user.email is the user's email */}
								</div>
								<div
									className={`${styles.col} ${styles.col1}`}
									data-label="Role"
								>
									{user.role} {/* Assuming user.role is the user's role */}
								</div>
							</li>
						))}
					</ul>
				</ul>
			</div>
		</>
	);
}

export default UserDisplay;
