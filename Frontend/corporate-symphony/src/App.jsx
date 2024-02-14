import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Eventlist from "./pages/Eventlist";
import Signup from "./pages/Signup";
import User from "./pages/User";
import Bookevents from "./pages/Bookevents";
import Admin from "./pages/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventDetails from "./pages/EventDetails";
import Profile from "./pages/Profile";
import UserDisplay from "./pages/UsersDisplay";
import AdminEventList from "./pages/AdminEventList";
import ContactUs from "./pages/ContactUs";
import { useEffect, useState } from "react";

function refreshPage() {
	window.location.href = window.location.href;
}

function App() {
	const [user, setUser] = useState(null);
	// window.location.reload();
	useEffect(() => {
		const storedUserRole = localStorage.getItem("role");
		if (storedUserRole) {
			const userObject = JSON.parse(storedUserRole);
			setUser(userObject);
		}
	}, []);

	console.log(user);

	return (
		<Router>
			{!user ? (
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="*" element={<h1>Not Found</h1>} />
				</Routes>
			) : user === "USER" ? (
				<Routes>
					<Route path="/user" element={<User />} />
					<Route path="/eventlist" element={<Eventlist />} />
					<Route path="/bookevents" element={<Bookevents />} />
					<Route path="/eventdetails" element={<EventDetails />} />
					<Route path="/userprofile" element={<Profile />} />
				</Routes>
			) : (
				<Routes>
					<Route path="/admin" element={<Admin />} />
					<Route path="/admineventlist" element={<AdminEventList />} />
					<Route path="/userdisplay" element={<UserDisplay />} />
				</Routes>
			)}
		</Router>

		// <Router>
		// 	<Routes>

		// 	</Routes>
		// </Router>
	);
}

export default App;
