import React from "react";
import Product from "./Product";
import styles from "./ProductList.module.css";

const ProductList = ({ onShowDetails, toggleLike, products, searchTerm }) => {
    const filteredProducts = searchTerm
    ? products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())): products;

    return (
        <div className={styles.ProductList}>
            {filteredProducts.map((product,index)=>(
                <Product 
                key={index}
                title={product.title} 
                price={product.price} 
                time={product.time} 
                imageSrc={product.imageSrc} 
                isLiked={product.isLiked} // 하트 상태 전달
                onShowDetails={() => onShowDetails(product)} // 클릭 시 해당 제품 정보 전달
                toggleLike={() => toggleLike(product.title)} // 하트 상태 변경 함수 전달
            />
            ))}
        </div>
    );
};

export default ProductList;
