import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfilePage.module.css';
import SideBar from './SideBar';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import ProductList from './ProductList';
import ReviewList from './ReviewList';

function ProfilePage() {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate('/notification');
  };

  const handleUserAvatarClick = () => {
    navigate('/mypage');
  };

  return (
    <div className={styles.ProfilePageContainer}>
      <SideBar />
      <main className={styles.mainContent}>
        <header className={styles.pageHeader}>
          <SearchBar />
          <h1 className={styles.pageTitle}>프로필</h1>
          <div className={styles.userIcons}>
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/03ed7ff2fb1e7c53557240672da85ebfc178133bd4f13717960dbae4d0118d17?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c" 
              alt="Notifications" 
              className={styles.notificationIcon} 
              onClick={handleNotificationClick}
              style={{ cursor: 'pointer' }}
            />
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf7a9a8e05d2698d57ae5e99b196bf039513b5a28e9d9c00b4aa82e8636b86f6?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c" 
              alt="User avatar" 
              className={styles.userAvatar} 
              onClick={handleUserAvatarClick}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </header>
        <UserProfile />
        <section className={styles.contentSection}>
          <ProductList />
          <ReviewList />
        </section>
      </main>
    </div>
  );
}

export default ProfilePage;