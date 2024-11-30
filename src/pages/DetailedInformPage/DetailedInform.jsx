import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./DetailedInform.module.css";
import Sidebar from "../mypage/SideBar";
import SearchBar from "../mypage/SearchBar";
import { LikeCounter } from "./LikeCounter";
import { UserInfo } from "./UserInfo";
import { ProductForm } from "./ProductForm";

export const DetailedInform = ({ products, toggleLike }) => {
    const { title } = useParams(); // URL 파라미터에서 제목 가져오기
    const product = products.find(p => p.title === title); // 제품 정보 검색

    const navigate = useNavigate();

    const handleNotificationClick = () => {
        navigate('/notification');
    };
    
    const handleUserAvatarClick = () => {
        navigate('/mypage');
    };

    const handleChatBtnClick = () => {
        navigate('/Chat');
    };

    if (!product) return null; // 제품 정보가 없으면 아무것도 렌더링하지 않음


    return (
        <div className={styles.detailInformPageContainer}>
        <Sidebar/>
        <main className={styles.mainContent}>
            <header className={styles.pageHeader}>
                <SearchBar/>
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
            <section className={styles.contentSection}>
                <div className={styles.detailedInform}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>상세 정보</h1>
                    </div>
                    <div className={styles.contentWrapper}>
                        <section className={styles.productInfo}>
                            <nav className={styles.category} aria-label="Product category">
                                카테고리 &gt; 생활 가전
                            </nav>
                            <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/56e760a1f263e8e1d80e01b05702795a6eb8982a1c1b293519e37746554e9467?placeholderIfAbsent=true&apiKey=8c4d60d027684d439facb424f5fad44b"
                            className={styles.productImage}
                            alt="Coffee machine product"
                            />
                        </section>
                        <section className={styles.detailsSection}>
                            <ProductForm/>
                        </section>
                    </div>

                    <footer className={styles.productActions}>
                        <div className={styles.likeSection}>
                            <button className={styles.likeButton} aria-label="좋아요">
                                <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbbd14404ec534286996716d6f4c030bdcb0df60d4a929d9ff5b98d91475c250?placeholderIfAbsent=true&apiKey=8c4d60d027684d439facb424f5fad44b"
                                alt=""
                                className={styles.likeIcon}
                                />
                            </button>
                            <span className={styles.likeCount}>32</span>
                        </div>
                        <div className={styles.actionButtons}>
                            <button className={styles.chatButton}>채팅하기</button>
                            <div className={styles.sellerInfo}>
                                <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7034da8a03ce4b89697220952b75e5bb70040125bb2f96edb292d0a74c5dcb1f?placeholderIfAbsent=true&apiKey=8c4d60d027684d439facb424f5fad44b"
                                className={styles.sellerAvatar}
                                alt=""
                                />
                            <span className={styles.sellerName}>hyundo</span>
                            </div>
                        </div>
                    </footer>

        
                    
                    
                </div>
            </section>
        </main>
    </div>
    );
};

export default DetailedInform;
