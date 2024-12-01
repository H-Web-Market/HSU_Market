import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductEdit.module.css";
import Sidebar from "../mypage/SideBar";
import SearchBar from "../mypage/SearchBar";
import ImageUpload from "./ImageUpload";
import ProductForm from "./ProductForm";

export const ProductEdit = () => {
    const { title } = useParams(); // URL에서 제품 제목을 가져옵니다.
    const navigate = useNavigate();
    const fileInputRef = useRef(null); // 파일 input을 참조하기 위한 ref

    const[product, setProduct] = useState(null);
    const[products, setProducts]= useState([]);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [imageSrc, setImageSrc] = useState(null);
    
    const categories = ["가전제품", "패션", "전자기기", "생활용품"]; // 카테고리 목록

    // **1. 로컬 스토리지에서 데이터 로드**
    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
        setProducts(storedProducts);
        const currentProduct = storedProducts.find((p) => p.title === title);
        if (currentProduct) {
            setProduct(currentProduct);
            setPrice(currentProduct.price);
            setDescription(currentProduct.description);
            setCategory(currentProduct.category);
            setImageSrc(currentProduct.imageSrc);
        }
    }, [title]);
      // **이미지 변경**
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file); // 파일 미리보기 URL 생성
            setImageSrc(imageUrl);
        }
    };
    // **3. 상품 수정**
    const handleEdit = () => {
        if (!product) return;
        const updatedProduct = {
            ...product,
            price,
            description,
            category,
            imageSrc,
            time: "방금 전", // 수정 시간을 업데이트
        };
        const updatedProducts = products.map((p) =>
            p.title === product.title ? updatedProduct : p
    );

    // 업데이트된 데이터 로컬 스토리지에 저장
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);

    // 홈 페이지로 이동
    alert("상품이 수정되었습니다.");
    navigate("/home");
};

const handleEditImageClick = () => {
    fileInputRef.current.click(); // 버튼 클릭 시 input 요소 클릭
};
  
const handleNotificationClick = () => {
    navigate('/notification');
};

const handleUserAvatarClick = () => {
    navigate('/mypage');
};
    

    return (
        <div className={styles.productEditContainer}>
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
                    <div className={styles.productEdit}>
                        <div className={styles.header}>
                            <h1 className={styles.title}>상품 수정</h1>
                        </div>

                        <div className={styles.productContent}>
                            <div className={styles.imageContainer}>
                                <ImageUpload handleImageChange={handleImageChange} imageSrc={imageSrc}/>
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

export default ProductEdit;
