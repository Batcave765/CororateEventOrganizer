import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import styles from "../assets/css/user.module.css";
import { NewsHeaderCard } from "react-ui-cards";
import EventDetails from "./EventDetails.jsx";
import axios from "axios";

function User() {
	const [toggled, setToggled] = useState(false);
	const [bookedEvents, setBookedEvents] = useState([]);
	const [pastEvents, setPastEvents] = useState([]);
	const [selectedCard, setSelectedCard] = useState(null);

	const navigate = useNavigate();
	const thumbnailUrls = [
		"http://tinyurl.com/msw44446",
		"http://tinyurl.com/3e7cu4h8",
		"http://tinyurl.com/mwwj26b3",
		"http://tinyurl.com/6jxb99v9",
		"http://tinyurl.com/6jxb99v9",
		"http://tinyurl.com/msw44446",
		// Add more URLs as needed
	];
	const getRandomThumbnail = () => {
		const randomIndex = Math.floor(Math.random() * thumbnailUrls.length);
		return thumbnailUrls[randomIndex];
	};
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
		const encodedCardDetails = encodeURIComponent(JSON.stringify(cardDetails));
		navigate(`/eventdetails?details=${encodedCardDetails}`);
	};

	useEffect(() => {
		const fetchEventData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8081/api/bookedevents"
				);
				const currentDate = new Date();
				// console.log(response.data[0].eventDate);
				const events = response.data.map((event) => ({
					thumbnail: getRandomThumbnail(),
					title: event.eventName,
					description: event.eventDescription,
					tags: [event.eventEmail],
					date: event.eventDate,
				}));

				const booked = [];
				const past = [];
				events.forEach((event) => {
					if (new Date(event.date) > currentDate) {
						booked.push(event);
					} else {
						past.push(event);
					}
				});

				setBookedEvents(booked);
				setPastEvents(past);
			} catch (error) {
				console.error("Error fetching events:", error);
			}
		};

		fetchEventData();
	}, []);

	useEffect(() => {
		if (selectedCard) {
			navigate("/eventdetails");
		}
	}, [selectedCard]);
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
					<MenuItem component={<Link to="/userprofile" />}> Profile</MenuItem>
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
				<div className={styles.containerTotal}>
					<div className={styles.sidebar}>
						<div className={styles.content} id={styles.sidebarInfo}>
							<h2>Upcoming Events: {bookedEvents.length}</h2>
							{bookedEvents.length > 0 && (
								<div>
									<h3>Next Event: {bookedEvents[0].title}</h3>
									<p>Description: {bookedEvents[0].description}</p>
									<p>Date: {bookedEvents[0].date}</p>
								</div>
							)}
						</div>
						<div className={styles.content} id={styles.sidebarInfo}>
							<h2>Past Events: {pastEvents.length}</h2>
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
