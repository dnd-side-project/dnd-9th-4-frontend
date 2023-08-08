/** @jsxImportSource @emotion/react */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/homePage';
import LoginPage from 'pages/loginPage/loginPage';
import MatchingPage from 'pages/MatchingPage/matchingPage';
import RedirectHandler from 'pages/loginPage/redirectHandler';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
