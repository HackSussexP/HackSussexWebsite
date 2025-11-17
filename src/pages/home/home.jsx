import Hero from "./hero/hero";
import UpcomingEvents from "./upcoming-events/upcomingEvents";
import styles from "./home.module.css";

const Home = () => {

  return (
    <div className={styles.homePage}>
      <Hero />
      <UpcomingEvents />
    </div>
  );
};

export default Home;



// hero

// upcoming events (if any)

// about us + stats

// gallery snippet

// previous sponsors

// meet the committee snippet

