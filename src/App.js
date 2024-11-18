import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// LoginMain 컴포넌트 임포트
import LoginMain from './pages/LoginMainPage/LoginMain';
import SignUpForm from './pages/SignUpFormPage/SignUpForm';
import EmailVerification from './pages/EmailVerificationPage/EmailVerification';
import EmailVerificationSuccess from './pages/EmailVerificationSuccessPage/EmailVerificationSuccess';
import SignUpSuccess from './pages/SignUpSuccessPage/SignUpSuccess';
import Login from './pages/LoginPage/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 LoginMainPage를 렌더링 */}
        <Route path="/LoginMain" element={<LoginMain />} />
        {/* 회원가입 버튼 클릭 시 이동할 페이지 */}
        <Route path="/SignUpForm" element={<SignUpForm />} />
        {/* 학생 인증 버튼 클릭 시 이동할 페이지 */}
        <Route path="/EmailVerification" element={<EmailVerification />} />
        {/* 학생 인증 성공 시 이동할 페이지 */}
        <Route path="/EmailVerificationSuccess" element={<EmailVerificationSuccess />} />
        {/* 회원가입 성공 시 이동할 페이지 */}
        <Route path="/SignUpSuccess" element={<SignUpSuccess />} />
        {/* 로그인 페이지 */}
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
