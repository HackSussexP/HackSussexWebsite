import React from "react";
import styles from "./topHeader.module.css";

const TopHeader = ({ title, ctaText, ctaButtonLabel, onCtaClick, className }) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      <div className={styles.topLine}>
        <h1 className={styles.title}>{title}</h1>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomText}>{ctaText}</div>

        {ctaButtonLabel && (
          <div className={styles.ctaContainer}>
            <button className={styles.ctaButton} onClick={onCtaClick}>
              {ctaButtonLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
