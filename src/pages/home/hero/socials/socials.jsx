import styles from "./socials.module.css";
import { FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa"; // Using react-icons
import { SiDevpost } from "react-icons/si"; // Devpost icon from simple-icons

const socials = [
  { name: "YouTube", url: "https://youtube.com/@yourchannel", icon: <FaYoutube /> },
  { name: "Instagram", url: "https://instagram.com/yourhandle", icon: <FaInstagram /> },
  { name: "Discord", url: "https://devpost.com/yourprofile", icon: <FaDiscord /> },
];

const Socials = () => {
  return (
    <div className={styles.socialsContainer}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <span className={styles.icon}>{social.icon}</span>
          <span className={styles.name}>{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Socials;
