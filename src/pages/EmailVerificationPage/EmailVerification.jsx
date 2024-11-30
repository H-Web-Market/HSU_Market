import React, { useState, useRef, useEffect } from 'react';
import styles from './EmailVerification.module.css';

const EmailVerification = ({ onSuccess }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState(''); // 오류 메시지 상태 추가
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    const email = sessionStorage.getItem('email');

    if (fullCode.length === 6 && email) {
      try {
        const response = await fetch('https://borhg6i9sk.execute-api.ap-northeast-2.amazonaws.com/verification_code', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, verification_code: fullCode }),
        });

        if (response.ok) {
          setError('');
          console.log('Verification successful!');
          sessionStorage.removeItem("email");
          onSuccess();
        } else {
          setError('잘못된 인증 코드입니다.');
        }
      } catch (error) {
        console.error('Error during verification:', error);
        setError('네트워크 오류가 발생했습니다. 다시 시도해 주세요.');
      }
    } else {
      setError('모든 입력란이 완료되지 않았습니다.');
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>이메일로 발송된 인증번호를 입력해 주세요</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          {code.map((digit, index) => (
            <React.Fragment key={index}>
              <label htmlFor={`code-${index}`} className={styles.visually_hidden}>
                Digit {index + 1}
              </label>
              <input
                id={`code-${index}`}
                ref={el => inputRefs.current[index] = el}
                className={styles.codeInput}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                aria-label={`Digit ${index + 1} of 6`}
              />
            </React.Fragment>
          ))}
          <button 
            type="submit" 
            className={styles.submitButton}
            aria-label="Submit verification code"
          >
            확인
          </button>
        </div>
        {error && <div className={styles.error}>{error}</div>}
      </form>
    </main>
  );
};

export default EmailVerification;