import React, { useState } from "react";
import styles from "./ProductForm.module.css";

export const ProductForm = ({ product, onSubmit }) => {
  const [price, setPrice] = useState(product?.price || "");
  const [description, setDescription] = useState(product?.description || "");
  const [category, setCategory] = useState(product?.category || "");

  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 폼 동작 차단
    const updatedData = { price, description, category }; // 수정된 데이터
    onSubmit(updatedData); // 상위 컴포넌트로 전달
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      {/* 상품명 */}
      <input
        type="text"
        id="productName"
        className={styles.formInput}
        placeholder="상품명 (수정 불가)"
        value={product?.title || ""}
        disabled
      />

      {/* 상품 가격 */}
      <input
        type="number"
        id="productPrice"
        className={styles.formInput}
        placeholder="상품 가격 입력"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      {/* 상품 설명 */}
      <textarea
        id="productDescription"
        className={styles.formTextarea}
        placeholder="상품 설명 입력"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* 상품 카테고리 */}
      <div className={styles.categorySelect}>
        <select
          id="category"
          className={styles.selectInput}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>
            상품 카테고리 선택
          </option>
          <option value="가전제품">가전제품</option>
          <option value="패션">패션</option>
          <option value="전자기기">전자기기</option>
          <option value="생활용품">생활용품</option>
        </select>
      </div>

      {/* 수정 버튼 */}
      <button type="submit" className={styles.submitButton}>
        수정하기
      </button>
    </form>
  );
};

export default ProductForm;
