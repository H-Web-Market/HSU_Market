import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './SideBar.module.css';

function Sidebar() {
  const [activeIcon, setActiveIcon] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // icons를 useMemo로 메모이제이션하여 불필요한 재생성을 방지
  const icons = useMemo(() => [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/edc98a51d885f6d20c0aa77122a2579107cb4dcb117e95185ecd345757f5eb70?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c",
      alt: "Home",
      label: "Home",
      route: "/home"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/954533b6798e2a91ff2a8bf69d8f0d35f4d0912dd4ee3223eadd68d2eab1fba6?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c",
      alt: "Chat",
      label: "Chat",
      route: "/chat"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc19d3d0ac2295d31b612508fe19cac16e19bc3908a6e0c6f6dabe74a5a8255a?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c",
      alt: "Interests",
      label: "Interests",
      route: "/interests"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a555fc6b4a88c14838562078d24c02495dc2265c227da59b1a19f641c4f4a65?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c",
      alt: "mypage",
      label: "mypage",
      route: "/mypage"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0332f606a7a37e6d291e5be1211e986535552d8f8ef00677455498845de62d03?placeholderIfAbsent=true&apiKey=4ff31f8795cd4edc98e7741aaa589c6c",
      alt: "Add Product",
      label: "Add Product",
      route: "/ProductRegist"
    },
  ], []);

  useEffect(() => {
    const currentIcon = icons.find(icon => location.pathname.startsWith(icon.route));
    if (currentIcon) {
      setActiveIcon(currentIcon.label);
    }
  }, [icons, location.pathname]); // icons를 의존성 배열에 포함

  const handleIconClick = (icon) => {
    setActiveIcon(icon.label);
    navigate(icon.route);
  };

  return (
    <aside className={styles.sideBar}>
      <div className={styles.logo} />
      <nav className={styles.navList}>
        {icons.map((icon, index) => (
          <button
            key={index}
            className={`${styles.navButton} ${activeIcon === icon.label ? styles.active : ''}`}
            aria-label={icon.label}
            onClick={() => handleIconClick(icon)}
          >
            <img 
              src={icon.src} 
              alt={icon.alt} 
              className={`${styles.navIcon} ${activeIcon === icon.label ? styles.active : ''}`} 
            />
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
