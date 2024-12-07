import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', mobile: '' });
  const [errors, setErrors] = useState({ email: '', mobile: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear error as user types
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Please enter your email.';
    }
    if (!formData.mobile) {
      newErrors.mobile = 'Please enter your mobile number.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form Data:', formData);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="d-flex shadow rounded w-50 bg-white">
        <div className="bg-primary text-white p-4 d-flex flex-column justify-content-center" style={{ width: '50%' }}>
          <h1 className="mb-3">KisanKart (KK)</h1>
          <p>Reset your password to continue accessing your account.</p>
          <div className="mt-auto">
            <video autoPlay loop muted className="w-100" style={{ borderRadius: '8px' }}>
              <source src="./images/ForgotPassword.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="p-4" style={{ width: '50%' }}>
          <h2 className="mb-3">Forgot Password</h2>
          <p className="text-muted" style={{ fontSize: '0.9rem' }}>
            Enter your registered email address and Mobile Number to reset your password.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="form-control"
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}

               
            </div>

            <div>
            <label htmlFor="mobile" className="form-label mb-2">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="form-control"
              />
              {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
              
            </div>

            <button type="submit" className="btn btn-warning w-100 mt-3">Reset Password</button>
            <button type="button" className="btn btn-light w-100 mt-3" onClick={() => navigate('/login')}>
              Back to Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
