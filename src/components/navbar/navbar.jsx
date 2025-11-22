import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import messages from "./navbar.messages";
import HSLogo from "../../assets/hackSussex/gradient.png";
import ThemeButton from "./themeButton/themeButton";
import { useSiteData } from "../../hooks/useSiteData";

const Navbar = () => {
  const navigate = useNavigate();
  const { siteData, loading } = useSiteData();

  if (loading) return null;

  const links = messages.links.map((link) => {
    if (link.name === "Merch Store") {
      return { ...link, path: siteData?.merch || "#" };
    }
    return link;
  });

  return (
    <div className={styles.navbarContainer}>
      {/* Logo */}
      <div className={styles.logoContainer} onClick={() => navigate("/")}>
        <img src={HSLogo} alt="Hack Sussex Logo" className={styles.logo} />
      </div>

      {/* Navigation links */}
      <div className={styles.navLinks}>
        {links.map((link) => (
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

      {/* Work With Us */}
      <NavLink
        to="/work-with-us"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        {messages.workWithUs}
      </NavLink>

      {/* Theme button */}
      <ThemeButton />
    </div>
  );
};

export default Navbar;
