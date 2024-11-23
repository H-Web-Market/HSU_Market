import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo_img from "../data/avatar.png";
import home_img from "../data/heart.png";
import chat_img from "../data/chat.png";
import heart_img from "../data/heart.png";
import profile_img from "../data/avatar.png";
import plus_icon from "../data/plus.png";
import styles from "./SideBar.module.css";

const icons = [
    { id: 0, alt: "Home", src: home_img, link: "/home" },
    { id: 1, alt: "Chat", src: chat_img, link: "/chat" },
    { id: 2, alt: "Heart", src: heart_img, link: "/heart" },
    { id: 3, alt: "Profile", src: profile_img, link: "/profile" },
    { id: 4, alt: "Plus", src: plus_icon, link: "/plus" },
];

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleIconClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.groupWrapper}>
            <div className={styles.group}>
                <img className={styles.icon} alt="Logo" src={logo_img} />
                {icons.map((icon) => (
                    <Link to={icon.link} onClick={() => handleIconClick(icon.id)} key={icon.id}>
                        <img
                            className={styles.icon}
                            alt={icon.alt}
                            src={icon.src}
                            style={{
                                opacity: activeIndex === icon.id ? 0.5 : 1,
                            }}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
