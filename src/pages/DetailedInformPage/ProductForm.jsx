import React from 'react';
import styles from './ProductForm.module.css';

export const ProductForm = () => (
  <form className={styles.formContainer}>
  
    <input 
      type="text" 
      id="productName" 
      className={styles.formInput} 
      placeholder="제품명 입력"
    />
    
    <input 
      type="number" 
      id="productPrice" 
      className={styles.formInput} 
      placeholder="제품 판매가"
    />
    
    <textarea 
      id="productDescription" 
      className={styles.formTextarea} 
      placeholder="제품 상세 설명"
    />
    
 </form>
);