// ProductCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.css';

function ProductCard({ id, image, price, name, time }) {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/product-detail/${id}`);
  };

  return (
    <article className={styles.productCard}>
      <img src={image} alt={name} className={styles.productImage} />
      <p className={styles.productPrice}>{price}</p>
      <h3 className={styles.productName}>{name}</h3>
      <p className={styles.productTime}>{time}</p>
      <button
        className={styles.detailButton}
        onClick={handleDetailClick}
      >
        상품 상세
      </button>
    </article>
  );
}

export default ProductCard;