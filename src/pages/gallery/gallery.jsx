import React, { useState } from "react";
import styles from "./gallery.module.css";
import messages from "./gallery.messages";

// Automatically import all images in src/assets/gallery
const importAll = (r) => r.keys().map(r);
const allImagesRaw = importAll(
  require.context("../../assets/gallery", false, /\.(png|jpe?g|gif)$/)
);

const allImages = allImagesRaw.map((img) => {
  // img could be a module object (CRA), get actual src
  const src = img.default || img;

  console.log(src)

  // Extract filename
  const filename = src.split("/").pop();

    console.log(filename);

  // Extract category before first underscore
  const category = filename.includes("_") ? filename.split("_")[0] : "uncategorized";


  return { src, category };
});

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories
  const categories = Array.from(new Set(allImages.map((img) => img.category)));

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
