import styles from "../assets/css/home.module.css";
import event from "../assets/images/Events.svg";
import Navbar from "../components/Navbar.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/seminar1.jpg";
import img4 from "../assets/images/googleEvent.jpg";
import img5 from "../assets/images/homepageevent.jpg";

function Home() {
	return (
		<>
			<Navbar />
			<div className={styles.content}>
				<div className={styles.card} id={styles.cardOne}>
					<div className={styles.cardInner}>
						<img className={styles.mainImg} src={event} alt="Event" />
					</div>
					<div className={styles.cardInner}>
						<div className={styles.textContainer}>
							<h1>Plan Like a Pro</h1>
						</div>
						<p>
							Planning your upcoming event for your corporation requires the
							expertise of a seasoned corporate event planner. At Corpporate
							Symphony we have the knowledge and experience to insure your
							success from business meetings to corporate events. We are the
							industry leader in event management and organizing events. We have
							helped corporations foster strong relationships with their
							audiences and employees around the globe.
						</p>
						<button className={styles.homeButton}>Contact Us!</button>
					</div>
				</div>
				<div className={styles.textContent}>
					<h3>Corporate Event Planning</h3>

					<h4>Event Planning</h4>
					<p>
						Event planning for corporate events requires the full understanding
						of logistics, entertainment, audio visual, fabrication, catering,
						presentations, breakout sessions, social engagement and the
						marketing leading up to and following up after your corporate event.
						We'll handle all the logistics associated with Corporate event
						planning for optimum results. Our scope of services ranges from
						executing on the program topics designed to resonate with your
						audience and developing the schedules for presenters and catering
						staff. Our Corporate event planners are also pros at venue
						selection. Event Marketing is right in our wheel-house from creating
						event websites to creation of programs including speakers, agenda,
						social media, venue and registration.
					</p>
					<Carousel
						className={styles.Carousel}
						showArrows={true}
						autoPlay={true}
						interval={1500}
						infiniteLoop={true}
						dynamicHeight={true}
						showIndicators={false}
						animationHandler={"flip"}
						swipeable={false}
					>
						<div>
							<img src={img1} />
						</div>
						<div>
							<img src={img2} />
						</div>
						<div>
							<img src={img3} />
						</div>
						<div>
							<img src={img4} />
						</div>
						<div>
							<img src={img5} />
						</div>
					</Carousel>
				</div>
			</div>
			<footer>
				<div className={styles.footerContainer}>
					<div className={styles.footerContent}>
						<h4>Contact Us</h4>
						<p>123 Main Street, City</p>
						<p>Email: info@corporate-symphony.com</p>
						<p>Phone: 123-456-7890</p>
					</div>
					<div className={styles.footerContent}>
						<h4>Follow Us</h4>
						<div className={styles.socialMediaIcons}>
							<a href="#">
								<i className="fab fa-facebook"></i>
							</a>
							<a href="#">
								<i className="fab fa-twitter"></i>
							</a>
							<a href="#">
								<i className="fab fa-instagram"></i>
							</a>
						</div>
					</div>
				</div>
				<p className={styles.footerText}>
					© 2022 Corporate Symphony. All rights reserved.
				</p>
			</footer>
		</>
	);
}
export default Home;
