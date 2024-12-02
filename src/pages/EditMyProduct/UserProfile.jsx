import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UserProfile.module.css';

function UserProfile() {
  const navigate = useNavigate();

  const handleEditComplete = () => {
    navigate('/mypage');
  };

  return (
    <section className={styles.userProfile}>
      <div className={styles.userInfo}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6d0823220c568e0992c67bf77cc21dad32e13f73dda7a7fe2b8be0d14f020de?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c" 
          alt="User profile" 
          className={styles.profileImage} 
        />
        <div className={styles.userDetails}>
          <p className={styles.userId}>{localStorage.getItem("student_id")}</p>
          <h2 className={styles.userName}>{localStorage.getItem("nickname")}</h2>
        </div>
      </div>
      <div className={styles.userActions}>
        <div className={styles.actionButtons}>
          <button 
            className={styles.editButton} 
            onClick={handleEditComplete}
          >
            수정 완료
          </button>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;