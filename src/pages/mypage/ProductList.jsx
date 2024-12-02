import React from 'react';
import styles from './ProductList.module.css';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  return (
    <section className={styles.productListSection}>
      <h2 className={styles.sectionTitle}>판매중인 물품</h2>
      <div className={styles.productList}>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard product={product}/>
          ))
        ) : (
          <p className={styles.noProductsMessage}>판매 중인 상품이 없습니다.</p>
        )}
      </div>
    </section>
  );
}

export default ProductList;
