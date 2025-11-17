import React from "react";
import { useSiteData } from "../../../hooks/useSiteData";
import styles from "./upcomingEvents.module.css";
import messages from "./upcomingEvents.messages";
import Event from "../../../components/event/event";

const UpcomingEvents = () => {
  const { events, sponsors, loading } = useSiteData();

  if (loading) return <p className={styles.loading}>{messages.loadingText}</p>;

  if (!events.upcomingEvents || events.upcomingEvents.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h1 className="page-title">{messages.pageTitle}</h1>
      <p className="top-description">{messages.description}</p>

      {events.upcomingEvents.map((event) => (
        <Event key={event.id} event={event} sponsors={sponsors} />
      ))}
    </div>
  );
};

export default UpcomingEvents;
