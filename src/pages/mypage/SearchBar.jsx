import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchText); // 검색어를 부모 컴포넌트로 전달
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <label htmlFor="searchInput" className={styles.visuallyHidden}>제품명 / 카테고리 검색</label>
      <input
        type="search"
        id="searchInput"
        className={styles.searchInput}
        placeholder="제품명 / 카테고리 검색"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)} // 입력 값 관리
      />
      <button type="submit" className={styles.searchButton}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7742e19cac6ba1c5edf387f7f4910c2ac0ce69bbd2083e3f08746a1c919f7e71?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c" alt="Search" className={styles.searchIcon} />
      </button>
    </form>
  );
}

export default SearchBar;
