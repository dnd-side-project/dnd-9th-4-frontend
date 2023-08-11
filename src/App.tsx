/** @jsxImportSource @emotion/react */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/homePage/homePage';
import LoginPage from 'pages/loginPage/loginPage';
import MatchingPage from 'pages/matchingPage/matchingPage';
import RedirectHandler from 'pages/loginPage/redirectHandler';
import SelectSportPage from 'pages/matchingPostWritePage/selectSportPage';
import DetailPostWritePage from 'pages/matchingPostWritePage/detailPostWritePage';
import SportSytleInterestPage from 'pages/matchingPostWritePage/sportSytleInterestPage';
import MatchingPostPage from 'pages/matchingPage/matchingPostPage';
import { Layout } from 'components/styles/layout';

function App() {
  return (
    <div css={Layout}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/matching" element={<MatchingPage />} />
          <Route path="/auth" element={<RedirectHandler />} />
          <Route path="/post/sport" element={<SelectSportPage />} />
          <Route path="/post/detail" element={<DetailPostWritePage />} />
          <Route path="/post/style" element={<SportSytleInterestPage />} />
          <Route path="/post/:id" element={<MatchingPostPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
