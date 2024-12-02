import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EditMyProductPage.module.css';
import SideBar from '../SideBar';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import ProductCard from './ProductCard';
import avatar from "../data/avatar.png";

function EditMyProductPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false); // 알림 창 상태

  // Fetch products from localStorage on component mount
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(savedProducts);
  }, []);


  // Handle delete product
  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    // Update localStorage
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  // Handle edit product (example: just toggling a placeholder field for demo)
  const handleEditProduct = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, title: `${product.title} (edited)` } : product
    );
    setProducts(updatedProducts);
  };

  const handleNotificationClick = () => {
    setIsNotificationVisible(!isNotificationVisible); // 알림 창 표시 상태 전환
  };

  const handleUserAvatarClick = () => {
    navigate('/mypage');
  };

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
        </header>
        <UserProfile />
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>판매중인 물품</h2>
          <section className={styles.productsGrid}>
            {products.map((product) => (
              <ProductCard
                product={product}
                onDelete={() => handleDeleteProduct(product.id)}
                onEdit={() => handleEditProduct(product.id)}
              />
            ))}
          </section>
        </section>
      </main>
    </div>
  );
}

export default EditMyProductPage;
