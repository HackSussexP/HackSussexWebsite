import styles from "./merch.module.css";
import messages from "./merch.messages";
import SketchyBorder from "../../../components/sketchy/sketch-border";

const Merch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.merch}>
        <h1 className={styles.header}>{messages.pageTitle.toUpperCase()}</h1>
        <p className={styles.description}>{messages.description}</p>
        <SketchyBorder>
            <div className={styles.merchGrid}>
                <div className="background-grid container"></div>
                {messages.merch.map((item, index) => (
                <div key={index} className={styles.merchItem}>
                    <img src={item.image} alt={`Merch ${item.title}`} className={styles.merchImage} />
                    <h2 className={styles.merchTitle}>{item.title}</h2>
                </div>
                ))}
            </div>
        </SketchyBorder>
      </div>
    </div>
  );
};

export default Merch;
