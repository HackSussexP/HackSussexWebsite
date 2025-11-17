import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import messages from "./navbar.messages";
import HSLogo from "../../assets/hackSussex/gradient.png"
import { useNavigate } from "react-router-dom";
import ThemeButton from "./themeButton/themeButton";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.navbarContainer}>
            {/* Logo on the left */}
            <div className={styles.logoContainer} onClick={() => {navigate("/")}}>
                <img src={HSLogo} alt="MyApp Logo" className={styles.logo} />
            </div>

            {/* Navigation links */}
            <div className={styles.navLinks}>
                {messages.links.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }
                >
                    {link.name}
                </NavLink>
                ))}
            </div>
            <NavLink
                className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
                >
                {messages.workWithUs}
            </NavLink>
        </div>
    );
};

export default Navbar;
