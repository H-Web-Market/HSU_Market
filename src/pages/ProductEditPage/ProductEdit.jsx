import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductEdit.module.css";
import Sidebar from "../SideBar";
import SearchBar from "../mypage/SearchBar";
import ImageUpload from "./ImageUpload";
import ProductForm from "./ProductForm";

export const ProductEdit = () => {
  const { title } = useParams(); // URL에서 제품 제목을 가져옵니다.
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // 파일 input을 참조하기 위한 ref

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [imageSrc, setImageSrc] = useState(null);

  // **1. 로컬 스토리지에서 데이터 로드**
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
    const currentProduct = storedProducts.find((p) => p.title === title);
    if (currentProduct) {
      setProduct(currentProduct);
      setImageSrc(currentProduct.imageSrc);
    }
  }, [title]);

  // **2. 이미지 변경**
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // 파일 미리보기 URL 생성
      setImageSrc(imageUrl);
    }
  };

  // **3. 상품 수정**
  const handleEdit = (updatedData) => {
    if (!product) return;

    const updatedProduct = {
      ...product,
      ...updatedData,
      imageSrc,
      time: Date.now(), // 수정 시간을 업데이트
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

  return (
    <div className={styles.productEditContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <header className={styles.pageHeader}>
          <SearchBar />
        </header>
        <section className={styles.contentSection}>
          <div className={styles.productEdit}>
            <div className={styles.header}>
              <h1 className={styles.title}>상품 수정</h1>
            </div>

            <div className={styles.productContent}>
              {/* 이미지 업로드 */}
              <div className={styles.imageContainer}>
                <ImageUpload
                  handleImageChange={handleImageChange}
                  imageSrc={imageSrc}
                />
              </div>

              {/* 상품 정보 수정 */}
              <div className={styles.productInfoContainer}>
                <ProductForm
                  product={product}
                  onSubmit={handleEdit} // 수정 로직 전달
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductEdit;
