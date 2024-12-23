import React, { useState, useEffect } from "react";
import Sidebar from "../SideBar";
import styles from "./Main.module.css";
import SearchBar from "../mypage/SearchBar";
import Products from "./Products";
import Banner from "./Banner";
import { useNavigate } from "react-router-dom";
import avatar from "../data/avatar.png";

const Main = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false); // 알림 창 상태

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // **1. LocalStorage에서 데이터 불러오기**
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  // **2. 검색 기능**
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleNotificationClick = () => { 
    setIsNotificationVisible(!isNotificationVisible); // 알림 창 표시 상태 전환
  }; 
 
  const handleUserAvatarClick = () => { 
    navigate('/mypage'); 
  }; 

  // **3. 좋아요 토글 & LocalStorage 업데이트**
  const toggleLike = (productTitle) => {
    const updatedProducts = products.map((product) =>
      product.title === productTitle
        ? { ...product, isLiked: !product.isLiked }
        : product
    );
    setProducts(updatedProducts); // 상태 업데이트
    localStorage.setItem("products", JSON.stringify(updatedProducts)); // LocalStorage 업데이트
  };

  // **4. 필터링된 데이터 생성**
  const filteredProducts =
    searchTerm.trim() === "" // 검색어가 비어 있으면 전체 데이터를 반환
      ? products
      : products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <header className={styles.pageHeader}>
          <SearchBar onSearch={handleSearch} />
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
            {isNotificationVisible && (
                <div className={styles.notificationDropdown}>
                    <h4>알림</h4>
                    <p>새로운 알림이 있습니다!</p>
                    <ul className={styles.notificationUl}>
                        <li className={styles.notificationLi}>
                            <img className={styles.notificationAvatar} alt="User Avatar" src={avatar} />
                            <span> 사용자1: 제품이 입고되었습니다.</span>
                        </li>
                        <li className={styles.notificationLi}>
                            <img className={styles.notificationAvatar} alt="User Avatar" src={avatar} />
                            <span> 사용자2: 세일이 시작되었습니다.</span>
                        </li>
                        <li className={styles.notificationLi}>
                            <img className={styles.notificationAvatar} alt="User Avatar" src={avatar} />
                            <span> 사용자3: 새로운 메시지가 도착했습니다.</span>
                        </li>
                    </ul>
                    <button onClick={handleNotificationClick}>닫기</button>
                </div>
            )}
          </div> 
        </header>
        <section className={styles.contentSection}>
          <Banner />
          <h2 className={styles.sectionTitle}>당신을 위한 추천</h2>
          <Products products={filteredProducts} toggleLike={toggleLike} />
        </section>
      </main>
    </div>
  );
};

export default Main;
