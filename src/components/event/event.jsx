import React from "react";
import styles from "./event.module.css";
import messages from "./event.messages";
import { githubRawToLocal } from "../../util/githubRawToLocal";

const Event = ({ event, sponsors }) => {
  const eventSponsors = sponsors?.filter((s) =>
    event.sponsors.includes(s.id)
  );

  return (
    <div className={styles.eventCard}>
      {/* Image */}
      <div className={styles.imageWrapper}>
        <img src={event.image} alt={event.title} className={styles.image} />
        <img src={githubRawToLocal(event.logo)} alt={`${event.title} Logo`} className={styles.logo} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.eventTitle}>{event.title}</h2>

        <p className={styles.date}>
          {new Date(event.date).toLocaleDateString("en-GB", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <p className={styles.location}>{event.location}</p>
        <p className={styles.description}>{event.description}</p>

        {/* Sponsors */}
        <div className={styles.bottomLine}>
          {eventSponsors?.length > 0 && (
            <div className={styles.sponsors}>
              <p className={styles.sponsorTitle}>
                {messages.sponsorsTitle}
              </p>
              <div className={styles.sponsorLogos}>
                {eventSponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={sponsor.logoUrl}
                      alt={sponsor.name}
                      className={styles.sponsorLogo}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className={styles.buttons}>
            <button>{messages.calendarBtnText}</button>

            <button
              onClick={() =>
                window.open(event.ticketsLink, "_blank", "noopener,noreferrer")
              }
            >
              {messages.ticketsBtnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
