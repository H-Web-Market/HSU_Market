import React from "react";
import { useNavigate } from "react-router-dom";
import emptyHeart from "../data/emptyheart.png";
import filledHeart from "../data/heart.svg";
import styles from "./Products.module.css";

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

const Products = ({ toggleLike, products = [] }) => {
  const navigate = useNavigate();

  const handleNavigate = (product) => {
    navigate(`/DetailedInform/${product.title}`, { state: { product } });
  };
  

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <article key={product.id} className={styles.productCard}>
          {/* 상품 이미지 */}
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

          {/* 액션 버튼들 */}
          <div className={styles.actionButtons}>
            <div
              className={styles.likeButton}
              onClick={() => toggleLike(product.title)}
              style={{
                backgroundImage: `url(${product.isLiked ? filledHeart : emptyHeart})`,
              }}
              aria-label={`Toggle like for ${product.title}`}
            />
            <button
              onClick={() => handleNavigate(product)}
              className={styles.detailButton}
              aria-label={`Show details of ${product.title}`}
            >
              상품 상세
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Products;
