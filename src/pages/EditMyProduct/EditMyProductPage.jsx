import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EditMyProductPage.module.css';
import SideBar from '../SideBar';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import ProductCard from './ProductCard';

function EditMyProductPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // Fetch products from localStorage on component mount
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(savedProducts);
  }, []);


  // Handle delete product
  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  // Handle edit product (example: just toggling a placeholder field for demo)
  const handleEditProduct = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, title: `${product.title} (edited)` } : product
    );
    setProducts(updatedProducts);
  };

  const handleNotificationClick = () => {
    navigate('/notification');
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
