/** @jsxImportSource @emotion/react */
// import React, { useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/homePage/homePage';
import LoginPage from 'pages/loginPage/loginPage';
import { Global } from '@emotion/react';
import { globalStyle } from 'components/styles/common/globalStyle';
import MatchingPage from 'pages/matchingPage/matchingPage';
import RedirectHandler from 'pages/loginPage/redirectHandler';
import SelectSportPage from 'pages/matchingPostWritePage/selectSportPage';
import DetailPostWritePage from 'pages/matchingPostWritePage/detailPostWritePage';
import MatchingPostPage from 'pages/matchingPage/matchingPostPage';
import MatchingRequestListPage from 'pages/matchingPage/matchingRequestListPage';
import OnBoardingPage from 'pages/onBoardingPage/OnBoardingPage';
import OnBoardingPage1 from 'pages/onBoardingPage/OnBoardingPage1';
import OnBoardingPage2 from 'pages/onBoardingPage/OnBoardingPage2';
import OnBoardingPage3 from 'pages/onBoardingPage/OnBoardingPage3';
import OnBoardingPage4 from 'pages/onBoardingPage/OnBoardingPage4';
import OnBoardingPage5 from 'pages/onBoardingPage/OnBoardingPage5';
import OnBoardingPage6 from 'pages/onBoardingPage/OnBoardingPage6';
import OnBoardingPage7 from 'pages/onBoardingPage/OnBoardingPage7';
import OnBoardingFinishPage from 'pages/onBoardingPage/OnBoardingFinishPage';
import SearchPage from 'pages/matchingPage/searchPage';
import MyPage from 'pages/myPage/MyPage';
import MatchingRecordPage from 'pages/myPage/MatchingRecordPage';
import MyProfilePage from 'pages/myPage/MyProfilePage';
import ProfileEditPage from 'pages/myPage/ProfileEditPage';
import MyArticlePage from 'pages/myPage/MyArticlePage';
import MessageListPage from 'pages/message/MessageListPage';
import MessagePage from 'pages/message/MessagePage';
import MessageWritePage from 'pages/message/MessageWritePage';
import WithdrawPage from 'pages/myPage/WithdrawPage';
import ProfilePage from 'pages/profilePage/ProfilePage';
import WriteReviewPage from 'pages/profilePage/WriteReviewPage';
import OnBoardingPage8 from 'pages/onBoardingPage/OnBoardingPage8';
import EditStyleInterestedPage from 'pages/myPage/EditStyleInterestedPage';
import EditDetailPostPage from 'pages/matchingPostWritePage/editDetailPostWritePage';
import EditMatePage from 'pages/myPage/EditMatePage';
import ReviewDetailPage from 'pages/myPage/ReviewDetailPage';
// import { getJwtToken, getMemberId } from 'api/localStorage';

function App() {
  // useEffect(() => {
  //   const token = getJwtToken();
  //   const memberId = getMemberId();
  //   if (
  //     (token == null || memberId == null) &&
  //     window.location.pathname !== '/login' &&
  //     window.location.pathname !== '/auth'
  //   ) {
  //     // jwtToken, memberId 가 없으면 로그인 페이지로
  //     window.location.href = '/login';
  //   }
  // }, []);

  return (
    <>
      <Global styles={globalStyle} />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/matching" element={<MatchingPage />} />
          <Route path="/matching/search" element={<SearchPage />} />
          <Route
            path="/post/:id/request"
            element={<MatchingRequestListPage />}
          />
          <Route path="/auth" element={<RedirectHandler />} />
          <Route path="/post/sport" element={<SelectSportPage />} />
          <Route path="/post/detail" element={<DetailPostWritePage />} />
          <Route path="/post/:id/edit" element={<EditDetailPostPage />} />
          <Route path="/post/:id" element={<MatchingPostPage />} />
          <Route path="onboarding">
            <Route index element={<OnBoardingPage />} />
            <Route path="1" element={<OnBoardingPage1 />} />
            <Route path="2" element={<OnBoardingPage2 />} />
            <Route path="3" element={<OnBoardingPage3 />} />
            <Route path="4" element={<OnBoardingPage4 />} />
            <Route path="5" element={<OnBoardingPage5 />} />
            <Route path="6" element={<OnBoardingPage6 />} />
            <Route path="7" element={<OnBoardingPage7 />} />
            <Route path="8" element={<OnBoardingPage8 />} />
            <Route path="finish" element={<OnBoardingFinishPage />} />
          </Route>
          <Route path="/message" element={<MessageListPage />} />
          <Route path="/message/:receiverId" element={<MessagePage />} />
          <Route
            path="/message/:receiverId/write"
            element={<MessageWritePage />}
          />
          <Route path="my">
            <Route index element={<MyPage />} />
            <Route path="profile">
              <Route index element={<MyProfilePage />} />
              <Route path="edit" element={<ProfileEditPage />} />
              <Route path="edit/style" element={<EditStyleInterestedPage />} />
              <Route path="edit/mate" element={<EditMatePage />} />
              <Route path="review" element={<ReviewDetailPage />} />
            </Route>
            <Route path="upload" element={<MyArticlePage />} />
            <Route path="record" element={<MatchingRecordPage />} />
            <Route path="withdraw" element={<WithdrawPage />} />
          </Route>
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/review/:id" element={<ReviewDetailPage />} />
          <Route path="/review/:id/send" element={<WriteReviewPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
