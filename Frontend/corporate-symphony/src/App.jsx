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

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/user" element={<User />} />
				<Route path="/eventlist" element={<Eventlist />} />
				<Route path="/bookevents" element={<Bookevents />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/eventdetails" element={<EventDetails />} />
				<Route path="/userprofile" element={<Profile />} />
				<Route path="/admineventlist" element={<AdminEventList />} />
				<Route path="/userdisplay" element={<UserDisplay />} />
				<Route path="/contactus" element={<ContactUs />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</Router>
	);
}

export default App;
