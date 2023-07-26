import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from 'pages/mainPage/mainPage'
import LoginPage from 'pages/loginPage/loginPage'

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="login" element={<LoginPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
