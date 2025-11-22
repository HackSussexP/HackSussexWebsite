import React from "react";
import styles from "./events.module.css";
import messages from "./events.messages";

import GameJamBackground from "../../../assets/images/events/GameJam/GJBackground.png"
import HackathonBackground from "../../../assets/images/events/Hackathon/HSBackground.png"
import CodersCup from "../../../assets/images/events/CodersCup/CodersCupBackground.png"
import LeetCoding from "../../../assets/images/events/PwnSussex/PwnSussexBackground.png"

const Events = () => {
    return (
        <section className={styles.eventsSection}>

        <h1 className="page-title right">{messages.pageTitle}</h1>
        <p className="top-description right">{messages.description}</p>

        <div className={styles.grid}>
            {/* Row 1: Large full-width image */}
            <div className={styles.largeImage}>
                <img
                    src={HackathonBackground}
                    alt="Event 1"
                />
                <h1 className={styles.title}>{messages.hackathons}</h1>
            </div>

            <div className={styles.columnContainer}>
                <div className={styles.leftColumn}>
                    <img
                        src={GameJamBackground}
                        alt="Event 2"
                    />
                    <h1 className={styles.title}>{messages.gameJams}</h1>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.rightImage}>
                        <img
                            src={LeetCoding}
                            alt="Event 3"
                        />
                        <h1 className={styles.title}>{messages.leetCoding}</h1>
                    </div>
                    <div className={styles.rightImage}>
                        <img
                            src={CodersCup}
                            alt="Event 4"
                        />
                        <h1 className={styles.title}>{messages.codersCup}</h1>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Events;
