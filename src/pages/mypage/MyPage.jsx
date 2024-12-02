import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MyPage.module.css';
import SideBar from './SideBar';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import ProductList from './ProductList';
import ReviewList from './ReviewList';

function MyPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // 상품 목록 상태
  const studentId = localStorage.getItem("student_id"); // 현재 로그인된 사용자 ID

  // **1. LocalStorage에서 데이터 불러오기**
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  const handleNotificationClick = () => {
    navigate('/notification');
  };

  const handleUserAvatarClick = () => {
    navigate('/mypage');
  };

  // **2. 현재 사용자 ID와 일치하는 상품 필터링**
  const filteredProducts = products.filter(
    (product) => product.userId === studentId
  );

  return (
    <div className={styles.myPageContainer}>
      <SideBar />
      <main className={styles.mainContent}>
        <header className={styles.pageHeader}>
          <SearchBar />
          <h1 className={styles.pageTitle}>마이페이지</h1>
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
          <ProductList products={filteredProducts} /> {/* 필터링된 상품 전달 */}
          <ReviewList />
        </section>
      </main>
    </div>
  );
}

export default MyPage;
