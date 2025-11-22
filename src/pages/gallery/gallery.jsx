import React, { useState } from "react";
import styles from "./gallery.module.css";
import messages from "./gallery.messages";

// Automatically import all images in src/assets/gallery
const importAll = (r) => r.keys().map(r);
const allImages = importAll(
  require.context("../../assets/gallery", false, /\.(png|jpe?g|gif)$/)
).map((img) => {
  const filename = img.split("/").pop();
  const category = filename.split("_")[0];
  return { src: img, category };
});

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [...new Set(allImages.map((img) => img.category))];

  const filteredImages =
    selectedCategory === "all"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{messages.title}</h1>

      <div className={styles.filters}>
        <button
          onClick={() => setSelectedCategory("all")}
          className={selectedCategory === "all" ? styles.active : ""}
        >
          {messages.allCategory}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? styles.active : ""}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredImages.map((img) => (
          <div key={img.src} className={styles.card}>
            <img src={img.src} alt={img.src} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
