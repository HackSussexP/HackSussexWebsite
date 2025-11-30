import { useState } from "react";
import SketchyBorder from "../../../components/sketchy/sketch-border";
import styles from "./video.module.css";

const Video = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <SketchyBorder>
          {!play ? (
            <div className={styles.thumbnailWrapper} onClick={() => setPlay(true)}>
              <img 
                src="/my-custom-thumbnail.jpg" 
                alt="Custom thumbnail" 
                className={styles.thumbnail}
              />
              <div className={styles.playButton}>▶</div>
            </div>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/I0szBuNtyLs?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </SketchyBorder>
      </div>
    </div>
  );
};

export default Video;
