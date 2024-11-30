import React from 'react';
import styles from './DetailedInform.module.css';

export function UserInfo({ username, avatarSrc }) {
  return (
    <div className={styles.userInfo}>
      <img
        src={avatarSrc}
        className={styles.avatar}
        alt={`${username}'s profile picture`}
      />
      <span className={styles.username}>{username}</span>
    </div>
  );
}