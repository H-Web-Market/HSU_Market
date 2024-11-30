import React from "react";
import { useNavigate } from "react-router-dom";
import emptyHeart from "../data/emptyheart.png";
import filledHeart from "../data/heart.svg";
import styles from "./Products.module.css";

const Products = ({ toggleLike, products = [] }) => {
  const navigate = useNavigate();

  const handleNavigate = (title) => {
    navigate(`/DetailedInform/${title}`);
  };

  return (
    <div className={styles.productList}>
      {products.map((product, index) => (
        <article key={index} className={styles.productCard}>
          <img
            loading="lazy"
            src={product.imageSrc}
            alt={`Product image of ${product.title}`}
            className={styles.productImage}
          />
          <h3 className={styles.productPrice}>{product.price}</h3>
          <h4 className={styles.productTitle}>{product.title}</h4>
          <time className={styles.timePosted}>{product.time}</time>
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
              onClick={() => handleNavigate(product.title)}
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