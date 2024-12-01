import React from "react";
import Products from "../Main/Products"; // 기존 컴포넌트로 전체 목록 처리
import Banner from "../Main/Banner";
import styles from "./InterestProductList.module.css";

const InterestProductList = ({ toggleLike, products, searchTerm }) => {
    // 좋아요가 눌린 상품만 필터링
    const likedProducts = products.filter(product => product.isLiked);

    // 검색어에 따라 필터링
    const filteredProducts = searchTerm
        ? likedProducts.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : likedProducts;

    return (
        <div className={styles.content}>
            <Banner />
            <h2 className={styles.sectionTitle}>나의 관심 목록</h2>
            <div className={styles.productList}>
                <Products 
                    products={filteredProducts} // 필터링된 상품 전달
                    toggleLike={toggleLike} // 하트 상태 변경 함수 전달
                />
            </div>
        </div>
    );
};

export default InterestProductList;