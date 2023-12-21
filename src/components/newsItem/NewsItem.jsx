import React from "react";
import styles from "./styles.module.css";
import formatTimeAgo from "../helpers/formatTimeAgo";

const NewsItem = ({ item }) => {
  return (
    <div className={styles.newsItemBox}>
      <div
        className={styles.imgNews}
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className={styles.articleNewsItem}>
        <h3 className={styles.titleNews}>{item.title}</h3>
        <p className={styles.descNews}>{formatTimeAgo(item.published)}</p>
      </div>
    </div>
  );
};

export default NewsItem;
