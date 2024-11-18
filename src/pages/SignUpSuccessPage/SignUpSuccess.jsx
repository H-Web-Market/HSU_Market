import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpSuccess.module.css';

const SignUpSuccess = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/LoginMain'); // SignUpPage.jsx로 돌아가는 경로 설정
  };

  return (
    <div className={styles.successContainer}>
      <h2>회원가입이 완료되었습니다!</h2>
      <p>HSU Market에 가입해 주셔서 감사합니다.</p>
      <button onClick={handleClose} className={styles.closeButton}>
        확인
      </button>
    </div>
  );
};

export default SignUpSuccess;
