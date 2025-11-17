import HeroImage from "../../../assets/hackSussex/wideWhite.png";
import styles from "./hero.module.css";
import messages from "./hero.messages";
import Socials from "./socials/socials";

const Hero = () => {
    return (
        <div className={styles.hero}>
            {/* Background image */}

            {/* Centered logo */}
            <div className={styles.logoContainer}>
                <img src={HeroImage} alt="Hero Logo" className={styles.logo} />
            </div>

            <div className={styles.background}>
                <a
                    className={styles.mlhBadge}
                    href={messages.mlhBadgeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
                        alt={messages.mlhBadgeAlt}
                    />
                </a>
            </div>

            {/* Info boxes */}
            <div className={styles.infoBoxes}>
                <div className={styles.infoLeft}>
                    <div className={styles.infoBox}>
                        <iframe
                            width="100%"
                            height="200" // adjust as needed
                            src="https://www.youtube.com/embed/I0szBuNtyLs"
                            title="Intro Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/* Second info box as text */}
                    <div className={styles.infoBox}>{messages.infoBox2}</div>
                </div>
                <div className={styles.infoRight}>
                    <Socials />
                </div>

            </div>


        </div>
    );
};

export default Hero;
