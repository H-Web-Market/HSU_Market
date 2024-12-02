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

const ProductCard = ({ product, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/ProductEdit/${encodeURIComponent(product.title)}`, {
      state: { product }, // 수정 버튼 클릭 시 product 객체를 전달
    });
  };

  return (
    <article className={styles.productCard}>
      <img
        loading="lazy"
        src={product.imageSrc}
        alt={`Product image of ${product.title}`}
        className={styles.productImage}
      />
      {/* 상품 가격 */}
      <h3 className={styles.productPrice}>
            {product.price ? formatPrice(product.price) : "가격 미정"}
      </h3>

      {/* 상품 제목 */}
      <h4 className={styles.productTitle}>{product.title || "제목 없음"}</h4>

      {/* 상품 업로드 시간 */}
      <time className={styles.timePosted}>
          {product.time ? getTimeDifference(product.time) : "업로드 시간 없음"}
      </time>
      
      <div className={styles.actionButtons}>
        <button
          onClick={onDelete}
          className={styles.deleteButton}
          aria-label={`Delete ${product.title}`}
        >
          삭제
        </button>
        <button
          onClick={handleEdit}
          className={styles.editButton}
          aria-label={`Edit ${product.title}`}
        >
          수정
        </button>
      </div>
    </article>
  );
};

export default ProductCard;