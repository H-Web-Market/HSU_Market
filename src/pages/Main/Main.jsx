import React, { useState } from "react";
import Sidebar from './SideBar';
import Header from './Header';
import Content from "../MainPage/Content";
import DetailedInform from '../DetailedInformPage/DetailedInform';
import image from "../data/image.png";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductRegist from "../ProductRegistPage/ProductRegist";
import ProductEdit from "../ProductEditPage/ProductEdit";

export const Main = () => {
    const [products, setProducts] = useState([
        { title: "에어팟 프로 1", price: "200,000원", time: "1시간 전", imageSrc: image, isLiked: false },
        { title: "바이레도 블랑쉬 50ml", price: "150,000원", time: "3시간 전", imageSrc: image, isLiked: false },
        { title: "아이폰 13 프로 맥스", price: "1,000,000원", time: "7시간 전", imageSrc: image, isLiked: false },
        { title: "커피 머신", price: "470,000원", time: "3일 전", imageSrc: image, isLiked: false },
    ]);

    const [searchTerm, setSearchTerm]=useState("");

    const handleAppProduct = (newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
    };

    const toggleLike = (productTitle) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.title === productTitle
                    ? { ...product, isLiked: !product.isLiked } // 클릭한 제품의 isLiked 상태 반전
                    : product
            )
        );
    };

    const handleSearch = (term) => {
        setSearchTerm(term); // 검색어 상태 업데이트
    };

    return (
        <Router>
            <Sidebar />
            <Header onSearch={handleSearch} />
            <Routes>
                <Route path="/home" element={<Content 
                    products={products} 
                    toggleLike={toggleLike}
                    searchTerm={searchTerm}
                />} />
                <Route path="/plus" element={<ProductRegist onAddProduct={handleAppProduct} />} />
                <Route path="/product/:title" element={<DetailedInform products={products} toggleLike={toggleLike} />} />
                <Route path="/product/edit/:title" element={<ProductEdit products={products} onAddProduct={handleAppProduct}/>} />
            </Routes>
        </Router>
    );
};

export default Main;
