import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import styles from "../assets/css/admineventlist.module.css";
import { ProductCard } from "react-ui-cards";
import axios from "axios";

function AdminEventList() {
	const [toggled, setToggled] = React.useState(false);
	const [eventData, setEventData] = useState([]);
	const navigate = useNavigate();
	const [addData, setAddData] = useState({
		eventName: "",
		eventDescription: "",
		eventImageUrl: "",
	});
	const [eventIdToDelete, setEventIdToDelete] = useState("");

	const deleteEvent = async () => {
		try {
			await axios.delete(
				`http://localhost:8081/api/event-list/${eventIdToDelete}`
			);
			console.log("Event deleted successfully");
			setEventIdToDelete("");
			// After successful deletion, you might want to update the state to reflect the change
			// For example, you could refetch the event data or remove the deleted event from the state directly.
		} catch (error) {
			console.error("Error deleting event:", error);
		}
	};

	const addNewEvent = async () => {
		if (
			addData.eventName.trim() === "" ||
			addData.eventDescription.trim() === "" ||
			addData.eventImageUrl.trim() === ""
		) {
			// Handle empty fields error, display a message or prevent submission
			return;
		}
		try {
			// Make a POST request to your backend API using addData
			const response = await axios.post(
				"http://localhost:8081/api/event-list",
				addData
			);
			console.log("Event added successfully:", response.data);

			// Update the local state with the newly added event
			setEventData((prevEvents) => [...prevEvents, response.data]);

			// Reset addData to initial state
			setAddData({
				eventName: "",
				eventDescription: "",
				eventImageUrl: "",
			});
		} catch (error) {
			console.error("Error adding new event:", error);
		}
	};

	const cancelAddEvent = () => {
		// Clear addData state
		setAddData({
			eventName: "",
			eventDescription: "",
			eventImageUrl: "",
		});
	};

	const handleChange = (e) => {
		// Update addData state based on input changes
		setAddData({
			...addData,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		// Create a link element for the Google Fonts stylesheet
		const linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		linkElement.href =
			"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0";

		// Append the link element to the head of the document
		document.head.appendChild(linkElement);
		const fetchEventData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8081/api/event-list"
				);
				setEventData(response.data);
				console.log(response.data);
			} catch (error) {
				console.error("Error fetching event data:", error);
			}
		};

		fetchEventData();
		// Cleanup function to remove the link element when the component is unmounted
		return () => {
			document.head.removeChild(linkElement);
		};
	}, []); // The empty dependency array ensures that this effect runs only once when the component mounts

	const staticData = [
		{
			photos: [
				"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"https://images.unsplash.com/photo-1561489404-42f13a2f09a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			],
			float: true,
			price: "#1",
			productName: "Seminars",
			description:
				"A Seminar event showcases the latest trends in the industry and connects the attendees with the experts in the field. ",
			buttonText: "Book Now",
		},
		{
			photos: [
				"https://images.unsplash.com/photo-1601996759374-f9aa091f3a25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			],
			float: true,
			price: "#2",
			productName: "Retreats",
			description:
				"A Retreat event is a great way to get away from the hustle and bustle of everyday life and focus on yourself. ",
			buttonText: "Book Now",
		},
		{
			photos: [
				"https://plus.unsplash.com/premium_photo-1661277666101-01fb123f2a4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"https://plus.unsplash.com/premium_photo-1661281345831-72aac72beb52?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			],
			float: true,
			price: "#3",
			productName: "Team Building",
			description:
				"An activity that strengthens the bonds and skills of a group of people who work together.",
			buttonText: "Book Now",
		},
		{
			photos: [
				"https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1440&dpr=1",
			],
			float: true,
			price: "#4",
			productName: "Milestones",
			description:
				"A significant point in a project that marks the completion of a major task or achievement.",
			buttonText: "Book Now",
		},
		{
			photos: [
				"https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			],
			float: true,
			price: "#5",
			productName: "Launch Party",
			description:
				"Host an event to celebrate and promote a new release, such as a product, business, or service.",
			buttonText: "Book Now",
		},
		{
			photos: [
				"https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
				"https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			],
			float: true,
			price: "#6",
			productName: "Fund Raising",
			description:
				"An organized effort to secure financial support involving a gathering of individuals or online campaign to collect donations.",
			buttonText: "Book Now",
		},
		{
			photos: [
				"https://images.pexels.com/photos/167478/pexels-photo-167478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
				"https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			],
			float: true,
			price: "#7",
			productName: "Conferences",
			description:
				"Curating events to connect experts, fostering knowledge exchange and networking on specific topics.",
			buttonText: "Book Now",
		},
		// {
		// 	photos: [
		// 		"https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		// 		"https://plus.unsplash.com/premium_photo-1661281345831-72aac72beb52?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		// 	],
		// 	float: true,
		// 	price: "#8",
		// 	productName: "Custom Events",
		// 	description:
		// 		"Crafting unique gatherings tailored to your preferences, creating memorable experiences for personalized events.",
		// 	buttonText: "Book Now",
		// },

		// Add more event data objects as needed
	];

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
					<MenuItem component={<Link to="/admin" />}> Dashboard</MenuItem>
					<MenuItem component={<Link to="/userdisplay" />}>Users</MenuItem>
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
					<h1>Available Events:</h1>
				</main>
				<div className={styles.containerTotal}>
					<div className={styles.sidebar}>
						<div className={styles.newEventData}>
							<label>Event Name: </label>
							<input
								className={styles.addEvent}
								type="text"
								name="eventName"
								value={addData.eventName}
								onChange={handleChange}
							/>
							<label>Event Description: </label>
							<input
								className={styles.addEvent}
								type="text"
								name="eventDescription"
								value={addData.eventDescription}
								onChange={handleChange}
							/>
							<label>Event Image URL: </label>
							<input
								className={styles.addEvent}
								type="text"
								name="eventImageUrl"
								value={addData.eventImageUrl}
								onChange={handleChange}
							/>
							<div>
								<button className={styles.updateBtn} onClick={addNewEvent}>
									Save Event
								</button>
								<button className={styles.updateBtn} onClick={cancelAddEvent}>
									Cancel
								</button>
							</div>
						</div>
						<div className={styles.newEventData}>
							<label>Enter Event ID:</label>
							<input
								className={styles.addEvent}
								type="text"
								name="eventIdToDelete"
								value={eventIdToDelete}
								onChange={(e) => setEventIdToDelete(e.target.value)}
							/>
							<button className={styles.updateBtn} onClick={deleteEvent}>
								Delete Event
							</button>
						</div>
					</div>
					<div className={styles.cardContent} id={styles.contentRightSide}>
						{staticData.map((event, index) => (
							<ProductCard key={index} {...event} />
						))}
						{eventData.map((event, index) => (
							<ProductCard
								key={index}
								photos={[event.eventImageUrl]} // Use eventImageUrl as photos
								float={true}
								price={"#" + event.eventId}
								productName={event.eventName} // Use eventName as productName
								description={event.eventDescription} // Use eventDescription as description
								buttonText="Book Now" // Hardcoded button text
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default AdminEventList;
