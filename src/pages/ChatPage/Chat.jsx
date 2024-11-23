import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';  // Link를 사용해 URL 이동
import homeIcon from '../../assets/image/Home.png';
import chatIcon from '../../assets/image/Chat.png';
import heartIcon from '../../assets/image/Heart.png';
import profileIcon from '../../assets/image/Profile.png';
import plusIcon from '../../assets/image/Plus.png';
import defaultProfile from '../../assets/image/DefaultProfile.png';

// 스타일 모듈 임포트
import styles from './Chat.module.css';

// 상품 이미지 경로 임포트
import Product1Img from '../../assets/image/Product1.jpeg';
import Profile1Img from '../../assets/image/Profile1.jpeg';

const Chat = () => {
  const navigate = useNavigate();  // navigate 함수 선언

  // 버튼 클릭 시 이동하는 함수
  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleChatClick = (chatId) => {
    // 클릭한 채팅방으로 이동
    navigate(`/chat/${chatId}`);
  };

  const chatRooms = [
    { id: 1, name: '상대방 이름 1', lastMessage: '마지막 메시지 1', profileImg: Profile1Img, productImg: Product1Img },
    { id: 2, name: '상대방 이름 2', lastMessage: '마지막 메시지 2', profileImg: '', productImg: 'product2.jpg' },
    { id: 3, name: '상대방 이름 3', lastMessage: '마지막 메시지 3', profileImg: '', productImg: 'product3.jpg' },
  ];

  // 프로필 이미지가 없을 경우 기본 프로필 이미지 사용
  const getProfileImage = (profileImg) => {
    return profileImg || defaultProfile; // 기본 프로필 이미지 사용
  };

  return (
    <div className={styles.page}>
      <div className={styles.sidebar}>
        <ul>
          <li>
            <img src='' alt="로고" />
          </li>
          <li>
          <button onClick={() => handleNavigation('/')}>
            <img src={homeIcon} alt="홈" />
          </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/')}>
              <img src={chatIcon} alt="채팅" />
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/')}>
              <img src={heartIcon} alt="찜" />
            </button></li>
          <li>
            <button onClick={() => handleNavigation('/')}>
              <img src={profileIcon} alt="프로필" />
            </button></li>
          <li>
            <button onClick={() => handleNavigation('/')}>
              <img src={plusIcon} alt="상품추가" />
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.chatArea}>
        <div className={styles.chatTitle}>채팅</div>
        <div className={styles.chatList}>
          <ul>
            {chatRooms.map((chatRoom) => (
              <li key={chatRoom.id} onClick={() => handleChatClick(chatRoom.id)}>
                <div className={styles.chatRoom}>
                <img className={styles.profileImg} src={getProfileImage(chatRoom.profileImg)} alt={`Profile ${chatRoom.id}`} />
                  <div className={styles.chatRoomContents}>
                    <div className={styles.chatRoomHeader}>
                      <span className={styles.chatRoomName}>{chatRoom.name}</span>
                      <span className={styles.chatDate}>오늘</span>
                    </div>
                    <div className={styles.lastMessage}>{chatRoom.lastMessage}</div>
                  </div>
                  <img className={styles.productImg} src={chatRoom.productImg} alt={`Product ${chatRoom.id}`} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chat;
