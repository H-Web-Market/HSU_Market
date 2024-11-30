import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import avatar from "../data/avatar.png";
import heart from "../data/heart.svg";
import emptyHeart from "../data/emptyheart.png";
import styles from "./DetailedInform.module.css";
import Sidebar from "../mypage/SideBar";
import SearchBar from "../mypage/SearchBar";

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
                        <div className={styles.description}>{product.description}</div>
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
                <button className={styles.chatButton} onClick={handleChatBtnClick}>채팅하기</button>
                
                    <div className={styles.userInfo}>
                        <span className={styles.username} onClick={handleUserAvatarClick}>
                            <img className={styles.avatar} alt="Avatar" src={avatar} />
                            hyundo
                        </span>
                    </div>
                </div>
                </div>  
            </section>
        </main>
    </div>
    );
};

export default DetailedInform;
