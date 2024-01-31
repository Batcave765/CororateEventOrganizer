import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import styles from "../assets/css/user.module.css";
import { NewsHeaderCard } from "react-ui-cards";
import EventDetails from "./EventDetails.jsx";

function User() {
	const [toggled, setToggled] = React.useState(false);

	const [selectedCard, setSelectedCard] = useState(null);

	const navigate = useNavigate();

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

	const handleCardClick = (cardDetails) => {
		// Stringify the cardDetails object
		const encodedCardDetails = encodeURIComponent(JSON.stringify(cardDetails));

		// Pass the entire object as a query parameter
		navigate(`/eventdetails?details=${encodedCardDetails}`);
	};

	useEffect(() => {
		if (selectedCard) {
			// Log the selectedCard details

			// Navigate to another component (assuming you have a route set up for it)
			navigate("/eventdetails");
		}
	}, [selectedCard]);

	const bookedEvents = [
		{
			thumbnail: "http://tinyurl.com/msw44446",
			title: "Seminar",
			description: "A seminar event for user purpose",
			tags: ["Seminar", "Small", "Professional"],
			date: "01-02-2024",
		},
		{
			thumbnail: "http://tinyurl.com/3e7cu4h8",
			title: "Conference",
			description: "Team Conference",
			tags: ["Conference", "Medium", "Professional"],
			date: "05-02-2024",
		},
	];

	const pastEvents = [
		{
			thumbnail: "http://tinyurl.com/mwwj26b3",
			title: "Launch Party",
			description: "New Product Launch Party",
			tags: ["Launch", "Large", "Professional"],
			date: "05-01-2024",
		},
		{
			thumbnail: "http://tinyurl.com/msepafkp",
			title: "Milestone Completion",
			description: "A seminar event for user purpose",
			tags: ["Milestone", "Small", "Professional"],
			date: "10-01-2024",
		},
		{
			thumbnail: "http://tinyurl.com/6jxb99v9",
			title: "Team Building Event",
			description: "ABZ company Team building event",
			tags: ["Coop", "Small", "Casual"],
			date: "13-01-2024",
		},
		{
			thumbnail: "http://tinyurl.com/msw44446",
			title: "Seminar",
			description: "A seminar event for user purpose",
			tags: ["Seminar", "Small", "Professional"],
			date: "20-01-2024",
		},
	];

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
					<h1>Welcome To your Dashboard</h1>
				</main>
				<div className={styles.containerTotal}>
					<div className={styles.sidebar}>
						<div className={styles.content} id={styles.sidebarInfo}>
							<h2>Upcoming Events: 2</h2>
							{bookedEvents.length > 0 && (
								<div>
									<h3>Next Event: {bookedEvents[0].title}</h3>
									<p>Description: {bookedEvents[0].description}</p>
									<p>Date: {bookedEvents[0].date}</p>
								</div>
							)}
						</div>
						<div className={styles.content} id={styles.sidebarInfo}>
							<h2>Events Visited: 4</h2>
						</div>
					</div>
					<div className={styles.container}>
						<div className={styles.content} id={styles.center}>
							<h1>Booked Events:</h1>
							<div className={styles.cardContent}>
								{bookedEvents.map((event, index) => (
									<NewsHeaderCard
										className={styles.card}
										key={index}
										{...event}
										onClick={() => handleCardClick(event)}
									/>
								))}
							</div>
						</div>
						<div className={styles.content} id={styles.center}>
							<h1>Past Events:</h1>
							<div className={styles.cardContent}>
								{pastEvents.map((event, index) => (
									<NewsHeaderCard
										className={styles.card}
										key={index}
										{...event}
									/>
								))}
							</div>
						</div>
					</div>
					{selectedCard && <EventDetails selectedCard={selectedCard} />}
				</div>
			</div>
		</>
	);
}

export default User;
