
import React, { useState, useCallback } from 'react';
import styles from './SignUpForm.module.css';
import EmailVerification from '../EmailVerificationPage/EmailVerification';
import SignUpSuccess from '../SignUpSuccessPage/SignUpSuccess';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    password: '',
    email: '',
    name: ''
  });

  const [errors, setErrors] = useState({
    studentId: '',
    password: '',
    email: '',
    form: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value.trim()
    }));

    setErrors(prev => ({
      ...prev,
      [id]: '',
      form: ''
    }));
  }, []);

  const validateEmail = useCallback((email) => {
    const emailRegex = /^[^\s@]+@hansung\.ac\.kr$/;
    return emailRegex.test(email.trim());
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    if (!formData.studentId) {
      newErrors.studentId = '학번을 입력해주세요.';
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = '이메일을 입력해주세요.';
      isValid = false;
    }
    if (!formData.name) {
      newErrors.name = '이름을 입력해주세요.';
      isValid = false;
    }

    setErrors(prev => ({
      ...prev,
      ...newErrors,
      form: isValid ? '' : '모든 필드를 채워주세요.'
    }));

    return isValid;
  }, [formData]);

  const handleVerifyClick = useCallback(async () => {
    if (!formData.email) {
      setErrors(prev => ({
        ...prev,
        email: '이메일을 입력해 주세요.'
      }));
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrors(prev => ({
        ...prev,
        email: '유효한 한성대학교 이메일 주소를 입력해 주세요.'
      }));
      return;
    }

    sessionStorage.setItem("email", formData.email);
    
    try {
      const response = await fetch('https://borhg6i9sk.execute-api.ap-northeast-2.amazonaws.com/email_Auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      if (response.ok) { // Assume the response has a "success" field
        setIsModalOpen(true);
        setErrors(prev => ({ ...prev, email: '' }));
      } else {
        setErrors(prev => ({ ...prev, email: '인증 요청 실패. 다시 시도해 주세요.' }));
      }
    } catch (error) {
      console.error('Error sending email verification request:', error);
      setErrors(prev => ({ ...prev, email: '인증 요청 실패. 네트워크를 확인해 주세요.' }));
    }
  }, [formData.email, validateEmail]);

  const handleVerificationSuccess = useCallback(() => {
    setIsVerified(true);
    setIsModalOpen(false);
    setErrors(prev => ({ ...prev, email: '', form: '' }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    if (!isVerified) {
      setErrors(prev => ({
        ...prev,
        form: '이메일 인증을 완료해 주세요.'
      }));
      return;
    }
  
    try {
      const response = await fetch('https://borhg6i9sk.execute-api.ap-northeast-2.amazonaws.com/web_register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          student_id: formData.studentId,
          password: formData.password,
          nickname: formData.name,
        }),
      });
  
      if (!response.ok) {
        throw new Error('서버 응답에 문제가 있습니다.');
      }
  
      // 요청 성공 시 처리
      const data = await response.json();
      console.log('가입 성공:', data);
      setIsSuccessModalOpen(true); // 성공 모달 표시
    } catch (error) {
      console.error('가입 요청 실패:', error);
      setErrors(prev => ({
        ...prev,
        form: '가입 요청 실패. 다시 시도해 주세요.',
      }));
    }
  }, [formData, isVerified, validateForm]);

  const closeSuccessModal = useCallback(() => {
    setIsSuccessModalOpen(false); // 성공 모달 닫기
  }, []);

  const renderInput = (id, placeholder, type = 'text', iconSrc, iconAlt) => (
    <div className={styles.inputContainer}>
      <div className={styles.inputIcon}>
        <img src={iconSrc} alt={iconAlt} className={styles.icon} />
      </div>
      <input
        type={type}
        id={id}
        className={styles.inputText}
        placeholder={placeholder}
        value={formData[id]}
        onChange={handleInputChange}
      />
      {errors[id] && <div className={styles.error}>{errors[id]}</div>}
    </div>
  );

  return (
    <main className={styles.signUpContainer}>
      <section className={styles.card}>
        <header className={styles.headerContainer}>
          <div className={styles.column}>
            <h1 className={styles.title}>HSU Market</h1>
          </div>
        </header>

        <form onSubmit={handleSubmit} className={styles.formContainer}>
          {renderInput(
            'studentId',
            '학번을 입력해 주세요',
            'text',
            'https://cdn.builder.io/api/v1/image/assets/TEMP/28b87cc4672319214848c3b38c1e19f871f5adc7946e8b50b6a78ef16f6846c3',
            'Student ID icon'
          )}

          {renderInput(
            'password',
            '사용하실 비밀번호를 입력해 주세요',
            'password',
            'https://cdn.builder.io/api/v1/image/assets/TEMP/cab9a2e1392c31181c6e87d7b39e4677f1a2c6bdf2ba006a882331b978856d80',
            'Password icon'
          )}
          
        <div className={styles.EmailContainer}>
          <div className={styles.EmailInputContainer} style={{ margin: 0 }}>
            <div className={styles.inputIcon}>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a8555322897cddae69a812102d53e0c3cd25424ec8e0cf72371bf9f82f79958"
                alt="Email icon"
                className={styles.icon}
              />
            </div>
            <input
              type="email"
              id="email"
              className={styles.inputText}
              placeholder="학교 이메일을 입력해 주세요"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}
          </div>
          <button
            type="button"
            className={styles.studentVerification}
            onClick={handleVerifyClick}
            disabled={isVerified}
          >
            {isVerified ? '인증완료' : '학생 인증'}
          </button>
          {isVerified && (
            <span className={styles.verificationSuccess}>인증 완료!</span>
          )}
        </div>

          {renderInput(
            'name',
            '사용하실 이름을 입력해 주세요',
            'text',
            'https://cdn.builder.io/api/v1/image/assets/TEMP/f295fd62d77827668d8257fd82ae4b866e3842cb7103217d885d018708fdb498',
            'Name icon'
          )}

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={!formData.studentId || !formData.password || !formData.email || !formData.name || !isVerified}
          >
            가입 완료
          </button>

          {errors.form && <div className={styles.error}>{errors.form}</div>}
        </form>
      </section>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <EmailVerification 
              email={formData.email}
              onSuccess={handleVerificationSuccess} 
            />
          </div>
        </div>
      )}

      {isSuccessModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <SignUpSuccess onClose={closeSuccessModal} />
          </div>
        </div>
      )}
    </main>
  );
};

export default SignUpForm;