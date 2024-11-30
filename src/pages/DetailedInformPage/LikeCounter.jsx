import React from 'react';
import styles from './DetailedInform.module.css';

export function LikeCounter({ count, onLike }) {
  return (
    <div className={styles.likeCounter}>
      <button 
        className={styles.likeWrapper}
        onClick={onLike}
        aria-label="Like product"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbbd14404ec534286996716d6f4c030bdcb0df60d4a929d9ff5b98d91475c250?placeholderIfAbsent=true&apiKey=8c4d60d027684d439facb424f5fad44b"
          className={styles.likeIcon}
          alt=""
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/704f9a0827f1be2578b79484a6b31ecfb25e0da025f15260143bdea8e9bb8235?placeholderIfAbsent=true&apiKey=8c4d60d027684d439facb424f5fad44b"
          className={styles.heartIcon}
          alt=""
        />
        <span>{count}</span>
      </button>
    </div>
  );
}