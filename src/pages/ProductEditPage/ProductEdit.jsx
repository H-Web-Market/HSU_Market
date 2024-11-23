import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductEdit.module.css";
import { SplitButton } from 'primereact/splitbutton';

export const ProductEdit = ({ products, onUpdateProduct }) => {
    const { title } = useParams(); // URL에서 제품 제목을 가져옵니다.
    const product = products.find(p => p.title === title); // 제품 정보 검색

    const [price, setPrice] = useState(product.price);
    const [description, setDescription] = useState(product.description || '');
    const [category, setCategory] = useState(product.category || '');
    const [imageSrc, setImageSrc] = useState(product.imageSrc || null);
    const [imageFile, setImageFile] = useState(null);
    
    const fileInputRef = useRef(null); // 파일 input을 참조하기 위한 ref

    const categories = ["가전제품", "패션", "전자기기", "생활용품"]; // 카테고리 목록

    const categoryItems = categories.map(cat => ({
        label: cat,
        command: () => setCategory(cat), // 카테고리 설정
    }));

    useEffect(() => {
        if (product) {
            setPrice(product.price);
            setDescription(product.description || '');
            setCategory(product.category || '');
            setImageSrc(product.imageSrc || null);
        }
    }, [product]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageSrc(imageUrl);
            setImageFile(file);
        }
    };

    const handleEdit = () => {
        const updatedProduct = {
            title: product.title,
            price,
            time: "방금 전", // 예시로 현재 시간을 설정
            imageSrc,
            isLiked: product.isLiked,
            category, // 선택한 카테고리 추가
            description // 수정된 설명 추가
        };
        
        // onUpdateProduct는 상위 컴포넌트에서 전달받은 함수
        onUpdateProduct(updatedProduct);

        // 입력 필드 초기화
        setPrice('');
        setDescription('');
        setCategory('');
        setImageSrc(null);
        setImageFile(null);
    };

    const handleEditImageClick = () => {
        fileInputRef.current.click(); // 버튼 클릭 시 input 요소 클릭
    };

    return (
        <div className={styles.productEdit}>
            <div className={styles.header}>
                <h1 className={styles.title}>상품 수정</h1>
            </div>
            
            <div className={styles.productContent}>
                <div className={styles.imageContainer}>
                    {imageSrc && <img src={imageSrc} alt="Product" className={styles.productImage} />}
                    <input 
                        ref={fileInputRef} // ref 설정
                        className={styles.textWrapper}
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }} // 기본 input은 숨김
                        onChange={handleImageChange} 
                    />
                    <button 
                        className={styles.editImageButton}
                        type="button" // type을 'button'으로 설정
                        onClick={handleEditImageClick}>사진 수정</button>
                </div>
                
                <div className={styles.productInfoContainer}>
                    <input 
                        className={styles.productName}
                        type="text" 
                        placeholder="제품명 입력" 
                        value={product.title} 
                        readOnly // 제품명은 수정 불가
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
                    <button className={styles.editButton} onClick={handleEdit}>수정 완료</button>
                </div>
            </div>
        </div>  
    );
};

export default ProductEdit;
