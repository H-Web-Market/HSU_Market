import React from 'react';
import styles from './EmailVerificationSuccess.module.css';

const EmailVerificationSuccess = () => {
  return (
    <main className={styles.emailVerificationSuccess}>
      <section className={styles.card}>
        <div className={styles.flexContainer}>
          <div className={styles.column}>
            <h1 className={styles.hsuTitle}>HSU</h1>
          </div>
          <div className={styles.column}>
            <h2 className={styles.marketTitle}>market</h2>
          </div>
        </div>
      </section>
      <div className={styles.formContainer}>
        <div className={styles.flexContainer}>
          <div className={styles.formColumn}>
            <div className={styles.formWrapper}>
              <div className={styles.formInner}>
                <div className={styles.formContent}>
                  <div className={styles.successMessage}>
                    <div className={styles.successText}>
                      <p className={styles.studentVerificationSuccess}>학생 인증 성공!</p>
                      <button className={styles.confirmButton}>확인</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.inputField}>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a8555322897cddae69a812102d53e0c3cd25424ec8e0cf72371bf9f82f79958?placeholderIfAbsent=true&apiKey=6376e04c41654ddfb6eca8ff98033b9c" className={styles.inputIcon} alt="" />
                <label htmlFor="schoolEmail" className={styles.visually_hidden}>학교 이메일을 입력해 주세요</label>
                <input
                  type="email"
                  id="schoolEmail"
                  className={styles.inputPlaceholder}
                  placeholder="학교 이메일을 입력해 주세요"
                  aria-label="학교 이메일을 입력해 주세요"
                />
              </div>
            </div>
          </div>
          <div className={styles.sideColumn}>
            <button className={styles.studentVerificationButton}>학생 인증</button>
          </div>
        </div>
      </div>
      <div className={styles.nameInputField}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a059a2dcf4dd1f80d14bc443c3fd70fa249df0501d7a2cd4f72632307db46325?placeholderIfAbsent=true&apiKey=6376e04c41654ddfb6eca8ff98033b9c" className={styles.nameInputIcon} alt="" />
        <label htmlFor="userName" className={styles.visually_hidden}>사용하실 이름을 입력해 주세요</label>
        <input
          type="text"
          id="userName"
          className={styles.nameInputPlaceholder}
          placeholder="사용하실 이름을 입력해 주세요"
          aria-label="사용하실 이름을 입력해 주세요"
        />
      </div>
      <button className={styles.signUpButton}>가입 완료</button>
    </main>
  );
};

export default EmailVerificationSuccess;