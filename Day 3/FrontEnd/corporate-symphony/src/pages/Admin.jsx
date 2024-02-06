import React, { useEffect } from "react";
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
	const [toggled, setToggled] = React.useState(false);

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
						<h2>Upcoming Events: 2</h2>
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
