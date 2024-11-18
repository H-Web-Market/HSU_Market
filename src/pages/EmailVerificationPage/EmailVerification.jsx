
import React, { useState, useRef, useEffect } from 'react';
import styles from './EmailVerification.module.css';

const EmailVerification = ({ onSuccess }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      console.log('Submitted code:', fullCode);
      onSuccess(); // 인증 성공 시 콜백 호출
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
        </div>
        <button 
          type="submit" 
          className={styles.submitButton}
          aria-label="Submit verification code"
        >
          확인
        </button>
      </form>
    </main>
  );
};

export default EmailVerification;