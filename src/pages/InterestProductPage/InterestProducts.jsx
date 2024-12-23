import React, { useState, useEffect } from "react"; 
import Sidebar from '../SideBar'; 
import styles from "./InterestProducts.module.css"; 
import SearchBar from "../mypage/SearchBar"; 
import InterestProductList from "./InterestProductList"; 
import { useNavigate } from 'react-router-dom'; 
import avatar from "../data/avatar.png";
 
export const InterestProducts = () => { 
  const navigate = useNavigate(); 
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [isNotificationVisible, setIsNotificationVisible] = useState(false); // 알림 창 상태
  
  // **1. LocalStorage에서 데이터 불러오기**
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);
 
  const handleNotificationClick = () => { 
    setIsNotificationVisible(!isNotificationVisible); // 알림 창 표시 상태 전환
  }; 
 
  const handleUserAvatarClick = () => { 
    navigate('/mypage'); 
  }; 
 
  const handleSearch = (term) => { 
    setSearchTerm(term); 
  }; 

  const toggleLike = (productTitle) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.title === productTitle ? { ...product, isLiked: !product.isLiked } : product));
  };
 
  // 좋아요가 눌린 상품만 필터링 
  const likedProducts = products.filter(product => product.isLiked); 
 
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
          <InterestProductList 
            toggleLike={toggleLike} 
            products={likedProducts} // 필터링된 상품 전달 
            searchTerm={searchTerm} 
          /> 
      </main> 
    </div> 
  ); 
}; 
 
export default InterestProducts;