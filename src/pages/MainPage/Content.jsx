import React from "react";
import Banner from "./Banner";
import ProductList from "./ProductList";
import styles from "./Content.module.css";

const Content = ({ onShowDetails, toggleLike, products, searchTerm }) => {
    return (
        <div className={styles.content}>
            <Banner />
            <div className={styles.textWrapper}>당신을 위한 추천</div>
            <ProductList onShowDetails={onShowDetails} toggleLike={toggleLike} products={products} searchTerm={searchTerm} /> {/* toggleLike 전달 */}
        </div>
    );
};

export default Content;
