import React from 'react';
import styles from './ProductForm.module.css';

export const ProductForm = ({ product }) => (
    <form className={styles.formContainer}>
        <input 
            type="text" 
            id="productName" 
            className={styles.formInput} 
            value={product.title} 
            readOnly 
        />
        
        <input 
            type="number" 
            id="productPrice" 
            className={styles.formInput} 
            value={product.price} 
            readOnly 
        />
        
        <textarea 
            id="productDescription" 
            className={styles.formTextarea} 
            value={product.description} 
            readOnly 
        />
    </form>
);

export default ProductForm;
