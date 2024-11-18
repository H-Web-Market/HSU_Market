import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 가져오기
import styles from './LoginMain.module.css';

const LoginMain = () => {
  const navigate = useNavigate(); // 라우터 이동을 위한 navigate 함수

  const handleSignUpClick = () => {
    navigate('/SignUpForm'); // "/SignUpForm"으로 이동
  };

  const handleLoginClick = () => {
    navigate('/Login'); // "/Login"으로 이동
  };

  return (
    <main className={styles.signUpPage}>
      <section className={styles.card}>
        <div className={styles.content}>
          <div className={styles.column}>
            <h1 className={styles.title}>HSU Market</h1>
          </div>
        </div>
      </section>
      <nav>
        <button
          className={styles.button}
          aria-label="Login"
          onClick={handleLoginClick} // 로그인 버튼에 클릭 이벤트 추가
        >
          로그인
        </button>
        <button
          className={styles.signUpButton}
          aria-label="Sign Up"
          onClick={handleSignUpClick} // 회원가입 버튼에 클릭 이벤트 추가
        >
          회원가입
        </button>
      </nav>
    </main>
  );
};

export default LoginMain;
