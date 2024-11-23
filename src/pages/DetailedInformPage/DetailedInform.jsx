import React from "react";
import { useParams } from "react-router-dom";
import avatar from "../data/avatar.png";
import heart from "../data/heart.png";
import emptyHeart from "../data/emptyheart.png";
import styles from "./DetailedInform.module.css";

export const DetailedInform = ({ products, toggleLike }) => {
    const { title } = useParams(); // URL 파라미터에서 제목 가져오기
    const product = products.find(p => p.title === title); // 제품 정보 검색

    if (!product) return null; // 제품 정보가 없으면 아무것도 렌더링하지 않음

    return (
        <div className={styles.detailInform}>
            <div className={styles.header}>
                <h1 className={styles.title}>상세 정보</h1>
            </div>
            <h1 className={styles.categoryText}>카테고리 : 생활 가전</h1>
            
            <div className={styles.productContent}>
                <div className={styles.imageContainer}>
                    <img src={product.imageSrc} alt="Product" className={styles.productImage} />
                </div>
                
                <div className={styles.productInfoContainer}>
                    <div className={styles.productName}>{product.title}</div>
                    <div className={styles.price}>{product.price}</div>
                    <div className={styles.description}>이 제품은 ...</div>
                </div>
            </div>

            <div className={styles.userContent}>
                <div className={styles.likes}>
                    <img 
                        className={styles.heart} 
                        alt="Heart" 
                        src={product.isLiked ? heart : emptyHeart} 
                        onClick={() => toggleLike(product.title)} // 하트 클릭 시 상태 변경
                    />
                    <span className={styles.likesCount}>32</span>
                </div>
                <button className={styles.chatButton}>채팅하기</button>
                
                <div className={styles.userInfo}>
                    <span className={styles.username}>
                        <img className={styles.avatar} alt="Avatar" src={avatar} />
                        hyundo
                    </span>
                </div>
            </div>
        </div>  
    );
};

export default DetailedInform;
