/** @jsxImportSource @emotion/react */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/homePage';
import LoginPage from 'pages/loginPage/loginPage';
import { Layout } from 'components/styles/layout';

function App() {
  return (
    <div css={Layout}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
