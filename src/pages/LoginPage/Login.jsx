import React, { useState } from 'react';
import styles from './Login.module.css';
import InputField from './InputField';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (studentId === '2071122' && password === '1234') {
      setErrorMessage('');
      console.log('로그인 성공!');
      navigate('/home');
    } else {
      setErrorMessage('로그인에 실패했습니다. 학번, 비밀번호를 다시 확인해주세요.');
    }
  };

  return (
    <main className={styles.loginContainer}>
      <header className={styles.logoContainer}>
        <h1 className={styles.title}>HSU Market</h1>
      </header>
      <form onSubmit={handleLogin} className={styles.formContainer}>
        <InputField
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a80411b4e7d3a6119bfdef2b981dda8b5b27d1fbd656a086d3834a3f3bb695fb"
          label="학번"
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <InputField
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a420df9ef944595ff289101beb72537cfc3de75c98b940df4fca1e9cc6ec089b"
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.loginButton}>Login</button>
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
      </form>
    </main>
  );
};

export default LoginPage;