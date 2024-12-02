// ProductCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.css';

// **시간 차이 계산 함수**
const getTimeDifference = (timestamp) => {
  const now = Date.now();
  const difference = Math.floor((now - timestamp) / 1000); // 초 단위 차이 계산

  if (difference < 60) return `${difference}초 전`;
  const minutes = Math.floor(difference / 60);
  if (minutes < 60) return `${minutes}분 전`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;
  const days = Math.floor(hours / 24);
  return `${days}일 전`;
};

// **가격 포맷 함수**
const formatPrice = (price) => {
  const number = parseInt(price.replace(/[^0-9]/g, ""), 10); // 숫자만 추출
  return new Intl.NumberFormat("ko-KR").format(number) + "원";
};


function ProductCard({ product}) {
  const navigate = useNavigate();

  const handleNavigate = (title) => {
    navigate(`/DetailedInform/${title}`);
  };

  return (
    <article className={styles.productCard}>
      <img src={product.imageSrc} alt={product.title} className={styles.productImage} />
      <p className={styles.productPrice}>{formatPrice(product.price)}</p>
      <h3 className={styles.productName}>{product.title}</h3>
      <p className={styles.productTime}>{getTimeDifference(product.time)}</p>
      <button
        className={styles.detailButton}
        onClick={() => handleNavigate(product.title)}
      >
        상품 상세
      </button>
    </article>
  );
}

export default ProductCard;