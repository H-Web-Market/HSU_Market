import React, { useState } from "react";
import styles from "./ProductRegist.module.css";
import simpleLineIcon from "../data/simpleLineIcon.png";
import { SplitButton } from 'primereact/splitbutton';

export const ProductRegist = ({ onAddProduct }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [imageSrc, setImageSrc] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const categories = ["가전제품", "패션", "전자기기", "생활용품"]; // 카테고리 목록

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
        <div className={styles.productRegist}>
            <div className={styles.header}>
                <h1 className={styles.title}>상세 등록</h1>
            </div>

            <div className={styles.productContent}>
                <div className={styles.imageContainer}
                    style={{ backgroundImage: imageSrc ? `url(${imageSrc})` : null }}>
                    
                    {/* 이미지가 선택되지 않았을 때만 렌더링 */}
                    {!imageSrc && (
                        <>
                            <img
                                className={styles.simpleIcon}
                                alt="Simple line icon"
                                src={simpleLineIcon}
                            />
                            <input 
                                className={styles.textWrapper}
                                type="file"
                                accept="image/*"
                                placeholder="판매 물품에 대한 사진을 등록해주세요" 
                                onChange={handleImageChange} 
                            />
                        </>
                    )}
                </div>

                <div className={styles.productInfoContainer}>
                    <input 
                        className={styles.productName}
                        type="text" 
                        placeholder="제품명 입력" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                    <input 
                        className={styles.price}
                        type="text" 
                        placeholder="제품 판매가" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                    />
                    <textarea 
                        className={styles.description}
                        placeholder="제품 상세 알림" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                    <SplitButton 
                        label={category || "상품 카테고리 선택"} 
                        model={categoryItems} 
                        className={styles.category} 
                        onClick={(e) => e.preventDefault()} // 기본 동작 방지
                        menuStyle={{backgroundColor:"white", width:"530px" }} // 드롭다운 메뉴의 폭을 전체 버튼 폭으로 설정
                    />

                    <button className={styles.registButton} onClick={handleSubmit}>등록하기</button>
                </div>
            </div>
        </div>  
    );
};

export default ProductRegist;
