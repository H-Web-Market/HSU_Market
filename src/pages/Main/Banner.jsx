import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.overlapGroup}>
            <div className={styles.HSU}>HSU</div>
            <div className={styles.textWrapper}>market</div>
        </div>
    );
};

export default Banner;
