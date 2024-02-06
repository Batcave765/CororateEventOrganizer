import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import styles from "../assets/css/userdisplay.module.css";

function UserDisplay() {
	const [toggled, setToggled] = useState(false);

	const users = [
		{
			userId: 42235,
			customerName: "John Doe",
			events: "Seminar",
			date: "2024-02-01",
		},
		{
			userId: 42442,
			customerName: "Jennifer Smith",
			events: "Product Launch",
			date: "2024-02-02",
		},
		{
			userId: 42257,
			customerName: "John Smith",
			events: "Conference",
			date: "2024-02-03",
		},
		{
			userId: 42311,
			customerName: "John Carpenter",
			events: "Retreat",
			date: "2024-02-04",
		},
	];

	useEffect(() => {
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
					<MenuItem component={<Link to="/eventlist" />}> Event List</MenuItem>
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
					<li className={styles.tableHeader}>
						<div className={`${styles.col} ${styles.col1}`}>User Id</div>
						<div className={`${styles.col} ${styles.col1}`}>Customer Name</div>
						<div className={`${styles.col} ${styles.col1}`}>Events</div>
						<div className={`${styles.col} ${styles.col1}`}>Date</div>
					</li>
					{users.map((user) => (
						<li key={user.userId} className={styles.tableRow}>
							<div
								className={`${styles.col} ${styles.col1}`}
								data-label="User Id"
							>
								{user.userId}
							</div>
							<div
								className={`${styles.col} ${styles.col1}`}
								data-label="Customer Name"
							>
								{user.customerName}
							</div>
							<div
								className={`${styles.col} ${styles.col1}`}
								data-label="Events"
							>
								{user.events}
							</div>
							<div className={`${styles.col} ${styles.col1}`} data-label="Date">
								{user.date}
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default UserDisplay;
