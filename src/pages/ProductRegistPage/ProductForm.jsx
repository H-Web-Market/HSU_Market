import React from "react";
import styles from "./ProductForm.module.css";

export const ProductForm = ({
  handleAppProduct,
  categories,
  title,
  price,
  description,
  category,
  setTitle,
  setPrice,
  setDescription,
  setCategory,
}) => (
  <form className={styles.formContainer} onSubmit={handleAppProduct}>
    {/* 제품명 */}
    <input
      type="text"
      id="productName"
      className={styles.formInput}
      placeholder="제품명 입력"
      value={title}
      onChange={(e) => setTitle(e.target.value)} // 상태 업데이트
      required
    />

    {/* 가격 */}
    <input
      type="number"
      id="productPrice"
      className={styles.formInput}
      placeholder="제품 판매가"
      value={price}
      onChange={(e) => setPrice(e.target.value)} // 상태 업데이트
      required
    />

    {/* 상세 설명 */}
    <textarea
      id="productDescription"
      className={styles.formTextarea}
      placeholder="제품 상세 설명"
      value={description}
      onChange={(e) => setDescription(e.target.value)} // 상태 업데이트
      required
    />

    {/* 카테고리 */}
    <div className={styles.categorySelect}>
      <select
        id="category"
        className={styles.selectInput}
        value={category}
        onChange={(e) => setCategory(e.target.value)} // 상태 업데이트
        required
      >
        <option value="" disabled>
          상품 카테고리 선택
        </option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>

    {/* 등록 버튼 */}
    <button type="submit" className={styles.submitButton}>
      등록하기
    </button>
  </form>
);

export default ProductForm;
