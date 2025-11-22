import { useSiteData } from "../../hooks/useSiteData";
import styles from "./committee.module.css";
import messages from "./committee.messages";

const Committee = () => {
  const { committee, loading } = useSiteData();

  console.log("commitee here ", committee)

  if (loading) return <p>{messages.loading}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{messages.title}</h1>
      <div className={styles.grid}>
        {committee?.map((member) => (
          <div key={member.id} className={styles.card}>
            <img
              src={member.image}
              alt={member.name}
              className={styles.cardImage}
            />
            <h2 className={styles.name}>{member.name}</h2>
            <p className={styles.role}>{member.role}</p>
            <div className={styles.socialLinks}>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} ${styles.linkedin}`}
                >
                  LinkedIn
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} ${styles.github}`}
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;
