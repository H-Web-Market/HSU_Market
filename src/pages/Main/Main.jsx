import React, { useState } from "react";
import Sidebar from './SideBar';
import styles from "./Main.module.css";
import SearchBar from "../mypage/SearchBar";
import Products from "../MainPage/Products"; // Products의 실제 파일 경로로 수정
import Banner from "../MainPage/Banner";
import { useNavigate } from 'react-router-dom'; 

export const Main = ({ products, toggleLike }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleNotificationClick = () => {
    navigate('/notification');
  };

  const handleUserAvatarClick = () => {
    navigate('/mypage');
  };

  const handleSearch = (term) => {
    setSearchTerm(term); // 검색어 상태 업데이트
  };

  // 검색어를 통해 products 필터링
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <header className={styles.pageHeader}>
          <SearchBar onSearch={handleSearch} /> {/* onSearch prop 전달 */}
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
        <section className={styles.contentSection}>
          <Banner />
          <h2 className={styles.sectionTitle}>당신을 위한 추천</h2>
          {/* 필터링된 products 전달 */}
          <Products products={filteredProducts} toggleLike={toggleLike} />
        </section>
      </main>
    </div>
  );
};

export default Main;