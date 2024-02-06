import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "../assets/css/navbar.module.css";



const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" }
];

function Navbar() {
    const [activeLink, setActiveLink] = useState(null);
    const location = useLocation();

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    
                    <h1>Corporate Symphony</h1>
                </div>
                <div className={styles.links}>
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            onClick={() => handleLinkClick(index)}
                            className={location.pathname === link.to ? styles.active : ''}
                        >
                            {link.text}
                        </Link>
                    ))}
                </div>
            </div>
            <div className={styles.links}>
                <Link
                    to="/login"
                    className={styles.login}
                >
                    Login/SignUp
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
