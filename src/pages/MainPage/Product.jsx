import React from "react";
import { useNavigate } from "react-router-dom";
import emptyHeart from "../data/emptyheart.png";
import filledHeart from "../data/heart.png";
import styles from "./Product.module.css";

const Product = ({ title, price, time, imageSrc, isLiked, toggleLike }) => {
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동

    const handleShowDetails = () => {
        navigate(`/product/${title}`); // 상세 페이지로 이동
    };

    return (
        <div className={styles.Product}>
            <div className={styles.group}>
                <div 
                    className={styles.group2} 
                    onClick={toggleLike} 
                    style={{ backgroundImage: `url(${isLiked ? filledHeart : emptyHeart})` }} 
                />
                <button className={styles.btn} onClick={handleShowDetails}>
                    <div className={styles.divWrapper}>
                        <div className={styles.textWrapper}>상품 상세</div>
                    </div>
                </button>
            </div>
            <div className={styles.group3}>
                <div className={styles.textWrapper2}>{title}</div>
                <div className={styles.textWrapper3}>{time}</div>
                <div className={styles.textWrapper4}>{price}</div>
            </div>
            <img className={styles.rectangle} alt="Rectangle" src={imageSrc} />
        </div>
    );
};

export default Product;