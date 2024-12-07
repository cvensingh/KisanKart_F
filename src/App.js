import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import CreateAccount from './CreateAccount';
import HomePage from './HomePage';
import ForgotPassword from './ForgotPassword';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Set HomePage as default */}
        <Route path="/login" element={<Login />} /> {/* Route for Login */}
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path = "/ForgotPassword" element = {<ForgotPassword />} />
      </Routes>
    </Router>
  );
}
