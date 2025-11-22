import { useSiteData } from "../../hooks/useSiteData";
import styles from "./events.module.css";
import messages from "./events.messages";

const Events = () => {
  const { events, loading } = useSiteData();

  if (loading) return <p className={styles.container}>{messages.loading}</p>;

  // Merge or choose a section to display
  const upcomingEvents = events?.upcomingEvents || [];
  const pastEvents = events?.pastEvents || [];

  const allEvents = [...upcomingEvents, ...pastEvents]; // optional: merge both

  if (allEvents.length === 0)
    return <p className={styles.container}>{messages.noEvents}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{messages.title}</h1>
      <div className={styles.grid}>
        {allEvents.map((event) => (
          <div key={event.id} className={styles.card}>
            <img src={event.logo} alt={event.title} className={styles.cardImage} />
            <h2>{event.title}</h2>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.location}</p>
            {event.ticketsLink && (
              <a
                href={event.ticketsLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.eventLink}
              >
                Get Tickets
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
