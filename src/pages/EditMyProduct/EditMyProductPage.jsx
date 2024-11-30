import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EditMyProductPage.module.css';
import SideBar from './SideBar';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/aca576df317bea8af42f897b628c8d9f6dfc92b788756779d9b0cca9eafb7ac7?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c",
    price: "200,000원",
    title: "에어팟 프로 1",
    time: "1시간 전"
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc66222347b4703b32bfe188ac02f82645fddea2809bd9b02af20a9fc25c1529?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c",
    price: "150,000원",
    title: "바이레도 블랑쉬 50ml",
    time: "3시간 전"
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4857398a57f09ad667810cff1bbf8b74aee3e35326fac1f8b22eb33d8ef613e?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c",
    price: "1,000,000원",
    title: "아이폰 13 프로 맥스",
    time: "7시간 전"
  },
  {
    id: 4,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/faa30e506d4552352abd8504a617deda09718efe4ef9124ddc36c761a61a39cf?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c",
    price: "470,000원",
    title: "커피 머신",
    time: "3일 전"
  },
  {
    id: 5,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/faa30e506d4552352abd8504a617deda09718efe4ef9124ddc36c761a61a39cf?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c",
    price: "300,000원",
    title: "애플 워치",
    time: "1일 전"
  }
];

function EditMyProductPage() {
  const navigate = useNavigate();

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
          {/* 판매중인 물품 섹션 */}
          <h2 className={styles.sectionTitle}>판매중인 물품</h2>
          <section className={styles.productsGrid}>
            {products.map(product => (
              <ProductCard
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                time={product.time}
                onDelete={() => {}}
                onEdit={() => {}}
              />
            ))}
          </section>
        </section>
      </main>
    </div>
  );
}

export default EditMyProductPage;
