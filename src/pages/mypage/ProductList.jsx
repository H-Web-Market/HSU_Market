// ProductList.jsx
import React, { useState, useEffect } from 'react';
import styles from './ProductList.module.css';
import ProductCard from './ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);

  // 상품 목록을 가져오는 함수
  const fetchProducts = async () => {
    try {
      // 실제로는 API 호출이 들어갈 자리입니다.
      // 임시 데이터를 사용
      const data = [
        { 
          id: 1, 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bb6d8d7f84246f24ee604634fa5529ea2e715a9c838350c6ca508a38dbb3865?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c", 
          price: "200,000원", 
          name: "에어팟 프로 1", 
          time: "1시간 전" 
        },
        { 
          id: 2, 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1863cc47b95a259abd736faea489862f6f3461d812c60e0276107392f5d7d2c?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c", 
          price: "150,000원", 
          name: "바이레도 블랑쉬 50ml", 
          time: "3시간 전" 
        },
        { 
          id: 3, 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/497c947a0b2d371e2ddd8e6e1ccd766eb3c96d3d81495e9d51fe1e0d02562ef5?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c", 
          price: "1,000,000원", 
          name: "아이폰 13 프로 맥스", 
          time: "7시간 전" 
        },
        { 
          id: 4, 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/90231d60f89e69aa1c139cce64d7d6ec24d23e6a53e08ac15396c63c0a13c6b4?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c", 
          price: "470,000원", 
          name: "커피 머신", 
          time: "3일 전" 
        },
        { 
          id: 5, 
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/90231d60f89e69aa1c139cce64d7d6ec24d23e6a53e08ac15396c63c0a13c6b4?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c", 
          price: "1,000,000원", 
          name: "이선빈", 
          time: "3초 전" 
        },
      ];
      setProducts(data);
    } catch (error) {
      console.error('상품 목록을 불러오는데 실패했습니다:', error);
    }
  };

  // 컴포넌트가 마운트될 때 상품 목록을 가져옵니다
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className={styles.productListSection}>
      <h2 className={styles.sectionTitle}>판매중인 물품</h2>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;