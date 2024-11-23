import React from 'react';
import styles from './ReviewCard.module.css';

function ReviewCard({ name, rating, comment }) {
  return (
    <article className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <div className={styles.userInfo}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/69f16c3e7fa040711e6d4052f9a9587991a776be428c38c341e22c5446f64d2b?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c" alt={`${name}'s avatar`} className={styles.userAvatar} />
          <span className={styles.userName}>{name}</span>
        </div>
        <div className={styles.rating}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd570637cb41b4c9f57e50b9cdd93082b7533b2964f9112f801f85281c322e18?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c" alt="" className={styles.starIcon} />
          <span className={styles.ratingScore}>{rating}</span>
        </div>
      </div>
      <p className={styles.reviewComment}>{comment}</p>
    </article>
  );
}

export default ReviewCard;