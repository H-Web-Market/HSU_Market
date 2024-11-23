import React from 'react';
import styles from './UserProfile.module.css';

function UserProfile() {
  return (
    <section className={styles.userProfile}>
      <div className={styles.userInfo}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6d0823220c568e0992c67bf77cc21dad32e13f73dda7a7fe2b8be0d14f020de?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c" alt="User profile" className={styles.profileImage} />
        <div className={styles.userDetails}>
          <p className={styles.userId}>2071015</p>
          <h2 className={styles.userName}>hyundo</h2>
        </div>
      </div>
      <div className={styles.userActions}>
        <div className={styles.userRating}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1da4b2b400db017d8d253b01e51b24555fa6f9e79422aa23cc8243a49c55aeb?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c" alt="" className={styles.starIcon} />
          <span className={styles.ratingScore}>4.8</span>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;