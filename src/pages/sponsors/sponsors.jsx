import { useSiteData } from "../../hooks/useSiteData";
import styles from "./sponsors.module.css";
import messages from "./sponsors.messages";
import { githubRawToLocal } from "../../util/githubRawToLocal";

const Sponsors = () => {
  const { sponsors, loading } = useSiteData();

  console.log("Sponsors ", sponsors)

  if (loading) return <p>{messages.loading}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{messages.title}</h1>
      <div className={styles.grid}>
        {sponsors?.map((sponsor) => (
          <div key={sponsor.id} className={styles.card}>
            <img
              src={githubRawToLocal(sponsor.logoUrl)}
              alt={sponsor.name}
              className={styles.cardImage}
            />
            <h2 className={styles.name}>{sponsor.name}</h2>
            <p className={styles.description}>{sponsor.description}</p>
            {sponsor.website && (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.websiteLink}
              >
                Visit Website
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
