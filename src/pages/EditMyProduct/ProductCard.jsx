import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ image, price, title, time, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/ProductEdit/${encodeURIComponent(title)}`); // Navigate to `/ProductEdit/:title` with encoded title
  };

  return (
    <article className={styles.productCard}>
      <img 
        loading="lazy"
        src={image}
        alt={`Product image of ${title}`}
        className={styles.productImage}
      />
      <h3 className={styles.productPrice}>{price}</h3>
      <h4 className={styles.productTitle}>{title}</h4>
      <time className={styles.timePosted}>{time}</time>
      <div className={styles.actionButtons}>
        <button 
          onClick={onDelete} 
          className={styles.deleteButton}
          aria-label={`Delete ${title}`}
        >
          삭제
        </button>
        <button 
          onClick={handleEdit} 
          className={styles.editButton}
          aria-label={`Edit ${title}`}
        >
          수정
        </button>
      </div>
    </article>
  );
};

export default ProductCard;