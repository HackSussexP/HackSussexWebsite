import React, { useEffect, useState } from "react";
import { useSiteData } from "../../../hooks/useSiteData";
import styles from "./upcomingEvents.module.css";
import messages from "./upcomingEvents.messages";
import Event from "../../../components/event/event";

const UpcomingEvents = () => {
  const { events, sponsors, loading } = useSiteData();
  const [timers, setTimers] = useState({});
  const ticketsClosed = false;

  // Set up countdown timers
  useEffect(() => {
    if (!events?.upcomingEvents) return;

    const interval = setInterval(() => {
      const newTimers = {};

      events.upcomingEvents.forEach((event) => {
        const eventDate = new Date(event.date);
        const targetDate = new Date(eventDate.getTime() - 7 * 24 * 60 * 60 * 1000); // 1 week before

        const now = Date.now();
        const diff = targetDate - now;

        if (diff <= 0) {
          newTimers[event.id] = "Tickets Closed";
          ticketsClosed = true;
        } else {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          const seconds = Math.floor((diff / 1000) % 60);

          newTimers[event.id] = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
      });

      setTimers(newTimers);
    }, 1000);

    return () => clearInterval(interval);
  }, [events]);

  if (loading) return <p className={styles.loading}>{messages.loadingText}</p>;

  if (!events.upcomingEvents || events.upcomingEvents.length === 0) {
    return <div className={styles.container}></div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.upComingEvent}>
        <img
          className={styles.mlhBanner}
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
        />

        <h1 className={styles.pageTitle}>{messages.pageTitle.toUpperCase()}</h1>

        {events.upcomingEvents.map((event) => (
          <div key={event.id} className={styles.eventWrapper}>
            <Event event={event} sponsors={sponsors} ticketsClosed={ticketsClosed}/>
            {!ticketsClosed ? 
            <p className={styles.countdown}>
              {timers[event.id]}
            </p> : <p className={styles.countdown}>Tickets Closed</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
