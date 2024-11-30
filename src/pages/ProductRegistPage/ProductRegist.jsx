import React, { useState } from "react";
import styles from "./ProductRegist.module.css";
import Sidebar from "../mypage/SideBar";
import SearchBar from "../mypage/SearchBar";
import { useNavigate } from 'react-router-dom';
import { ImageUpload } from "./ImageUpload";
import { ProductForm } from "./ProductForm";

export const ProductRegist = ({ onAddProduct }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [imageSrc, setImageSrc] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const categories = ["가전제품", "패션", "전자기기", "생활용품"]; // 카테고리 목록

    const navigate = useNavigate();

    const handleNotificationClick = () => {
        navigate('/notification');
      };
    
      const handleUserAvatarClick = () => {
        navigate('/mypage');
      };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageSrc(imageUrl);
            setImageFile(file);
        }
    };

    const handleSubmit = () => {
        const newProduct = {
            title,
            price,
            time: "방금 전", // 예시로 현재 시간을 설정
            imageSrc,
            isLiked: false,
            category, // 선택한 카테고리 추가
        };
        
        // onAddProduct는 상위 컴포넌트에서 전달받은 함수
        onAddProduct(newProduct);
        navigate('/home');

        // 입력 필드 초기화
        setTitle('');
        setPrice('');
        setDescription('');
        setCategory('');
        setImageSrc(null);
        setImageFile(null);
    };

    // 카테고리 선택 시 호출되는 함수
    const categoryItems = categories.map(cat => ({
        label: cat,
        command: () => setCategory(cat), // 카테고리 설정
    }));

    return (
        <div className={styles.registPageContainer}>
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
                    <div className={styles.productRegist}>
                        <div className={styles.header}>
                            <h1 className={styles.title}>상품 등록</h1>
                        </div>
                        <div className={styles.productContent}>
                        
                            <div className={styles.imageContainer}>
                                <ImageUpload/>
                            </div>

                            <div className={styles.productInfoContainer}>
                                <ProductForm/>
                            </div>
                        </div>
                    </div>  
                </section>
        </main>
      </div>

        
    );
};

export default ProductRegist;