import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// LoginMain 컴포넌트 임포트
import LoginMain from './pages/LoginMainPage/LoginMain';
import SignUpForm from './pages/SignUpFormPage/SignUpForm';
import EmailVerification from './pages/EmailVerificationPage/EmailVerification';
import EmailVerificationSuccess from './pages/EmailVerificationSuccessPage/EmailVerificationSuccess';
import SignUpSuccess from './pages/SignUpSuccessPage/SignUpSuccess';
import Login from './pages/LoginPage/Login';
import MyPage from './pages/mypage/MyPage';
import Profile from './pages/userprofile/ProfilePage';
import Chat from './pages/ChatPage/Chat';
import ChattingRoom from './pages/ChattingRoomPage/ChattingRoom';
import AddReview from './pages/AddReviewPage/AddReview';
import Main from './pages/Main/Main';
import ProductRegist from "./pages/ProductRegistPage/ProductRegist";
import ProductEdit from "./pages/ProductEditPage/ProductEdit";
import DetailedInform from './pages/DetailedInformPage/DetailedInform';

function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 LoginMainPage를 렌더링 */}
        <Route path="/" element={<LoginMain />} />
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
        {/* 마이페이지 */}
        <Route path="/mypage" element={<MyPage />} />
        {/* 유저 프로필 */}
        <Route path="/userprofile" element={<Profile />} />
        {/* 채팅 페이지 수정됨*/}
        <Route path="/Chat" element={<Chat />} /> 
        {/* 채팅방 페이지 */}
        <Route path="/Chat/:chatId" element={<ChattingRoom />} />
        {/* 리뷰 작성 페이지 */}
        <Route path="/AddReview/:chatId" element={<AddReview/>}/>
        {/* 메인 페이지 */}
        <Route path="/Main" element={<Main />} />
        {/* 상품 등록 페이지 */}
        <Route path="/ProductRegist" element={<ProductRegist />} />
        {/* 상품 수정 페이지 */}
        <Route path="/ProductEdit" element={<ProductEdit />} />
        {/* 상품 상세 페이지 */}
        <Route path="/DetailedInform" element={<DetailedInform />} />
      </Routes>
    </Router>
  );
}

export default App;
