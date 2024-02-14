import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import styles from "../assets/css/admin.module.css";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import axios from "axios";
import { NewsHeaderCard } from "react-ui-cards";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

function Admin() {
	const data = {
		labels: [
			"Seminar",
			"Retreats",
			"Team Building",
			"Milestones",
			"LaunchParties",
			"Fund Raising",
			"Conferences",
			"Custom Events",
		],
		datasets: [
			{
				label: "Events trends",
				data: [5, 3, 4, 4, 7, 3, 4, 10],
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
		],
	};
	const options = {
		scales: {
			r: {
				grid: {
					lineWidth: 2,
				},
				angleLines: {
					lineWidth: 2,
				},
				gridLines: {
					display: false,
				},
				ticks: {
					display: false,
					maxTicksLimit: 1,
				},
				suggestedMin: 0,
				// suggestedMax: 10,
			},
		},
	};
	const [bookedEvents, setBookedEvents] = useState([]);

	const [toggled, setToggled] = React.useState(false);

	useEffect(() => {
		const fetchBookedEvents = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8081/api/bookedevents"
				);
				const formattedEvents = response.data.map((event) => ({
					thumbnail: getRandomThumbnail(), // thumbnail can be null
					title: event.eventName,
					description: event.eventDescription,
					tags: [event.eventEmail], // eventEmail goes to tags
					date: event.eventDate,
				}));
				setBookedEvents(formattedEvents);
			} catch (error) {
				console.error("Error fetching booked events:", error);
			}
		};

		fetchBookedEvents();

		const linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		linkElement.href =
			"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";

		document.head.appendChild(linkElement);

		return () => {
			document.head.removeChild(linkElement);
		};
	}, []);
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
					<MenuItem component={<Link to="/userdisplay" />}> Users</MenuItem>
					<MenuItem component={<Link to="/admineventlist" />}>
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
					<h1>Welcome To your Dashboard</h1>
				</main>
			</div>
			<div className={styles.containerTotal}>
				<div className={styles.sidebar}>
					<div className={styles.content}>
						<h2>Event Statistics:</h2>
						<Radar
							className={styles.radarChart}
							data={data}
							options={options}
						/>
					</div>
					<div className={styles.content} id={styles.sidebarInfo}>
						<h2>Upcoming Events: {bookedEvents.length}</h2>
					</div>
				</div>
				<div className={styles.container}>
					<div className={styles.content} id={styles.center}>
						<h1>Upcoming Events:</h1>
						<div className={styles.cardContent}>
							{bookedEvents.map((event, index) => (
								<NewsHeaderCard
									className={styles.card}
									key={index}
									{...event}
									// onClick={() => handleCardClick(event)}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Admin;
