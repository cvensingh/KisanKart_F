import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './CreateAccount.css'; // Custom CSS for animations


export default function CreateAccount() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('Farmer');

  return (
    <div className="vh-300 d-flex justify-content-center align-items-center bg-light">
      <div className="shadow p-4 rounded bg-white" style={{ width: '800px' }}>
        {/* App Logo with Background */}
        <div
          className="d-flex align-items-center justify-content-center mb-4"
          style={{
            fontWeight: 'bold',
            gap: '10px',
            backgroundColor: '#a5d6a7', // Light green background
            padding: '15px',
            borderRadius: '8px',
          }}
        >
          <img
            src="./images/kisankartLogo.png"
            alt="KisanKartLogo"
            style={{ width: '100px', height: '100px' }}
          />
          <h2 style={{ color: 'green', margin: 0 }}>KisanKart</h2>
        </div>

        {/* Space between Logo and Toggle Buttons */}
        <div className="mb-4"></div>

        {/* Toggle Buttons for Farmer and Consumer */}
        <div className="d-flex justify-content-center mb-4" style={{ gap: '20px' }}>
          <button
            className={`btn me-2 ${userType === 'Farmer' ? 'btn-success' : 'btn-outline-secondary'}`}
            onClick={() => setUserType('Farmer')}
          >
            Farmer
          </button>
          <button
            className={`btn ${userType === 'Consumer' ? 'btn-success' : 'btn-outline-secondary'}`}
            onClick={() => setUserType('Consumer')}
          >
            Consumer
          </button>
        </div>

        {/* Farmer and Consumer Sections */}
        <div className="d-flex" style={{ gap: '20px' }}>
          {/* Image and Caption Section */}
          <div
            style={{
              width: '40%',
              backgroundColor: userType === 'Farmer' ? '#c8e6c9' : '#E8F8F5',
              padding: '10px',
              borderRadius: '8px',
            }}
            className="pe-3"
          >
            <img
              src={userType === 'Farmer' ? './images/farmer.webp' : './images/consumer.webp'}
              alt={`${userType} Illustration`}
              className="img-fluid rounded"
            />
            <p className="text-center mt-2">
              {userType === 'Farmer'
                ? '"Empowering farmers through direct access to consumers."'
                : '"Connecting consumers with the freshest products, directly from farmers."'}
            </p>
          </div>

          {/* Form Section */}
          <div style={{ width: '60%' }}>
            <CSSTransition
              in={userType === 'Farmer'}
              timeout={300}
              classNames="form-animation"
              unmountOnExit
            >
              <div>
                <h4 className="mb-3">Create Account for Farmer</h4>
                <form>
                  {/* Form Fields */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      className="form-control"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="At least 6 characters"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="repassword" className="form-label">
                      Re-enter Password
                    </label>
                    <input
                      type="password"
                      id="repassword"
                      className="form-control"
                      placeholder="Re-enter your password"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="farmingName" className="form-label">
                      Farming Name
                    </label>
                    <input
                      type="text"
                      id="farmingName"
                      className="form-control"
                      placeholder="Enter farming name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="farmingAddress" className="form-label">
                      Farming Address
                    </label>
                    <textarea
                      id="farmingAddress"
                      className="form-control"
                      placeholder="Enter farming address"
                      rows="3"
                    />
                  </div>
                  <button type="submit" className="btn btn-warning w-100 mb-3">
                    Create Your Account
                  </button>
                </form>
              </div>
            </CSSTransition>

            {/* Consumer Form */}
            <CSSTransition
              in={userType === 'Consumer'}
              timeout={300}
              classNames="form-animation"
              unmountOnExit
            >
              <div>
                <h4 className="mb-3">Create Account for Consumer</h4>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      className="form-control"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="At least 6 characters"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="repassword" className="form-label">
                      Re-enter Password
                    </label>
                    <input
                      type="password"
                      id="repassword"
                      className="form-control"
                      placeholder="Re-enter your password"
                    />
                  </div>
                  <button type="submit" className="btn btn-warning w-100 mb-3">
                    Create Your Account
                  </button>
                </form>
              </div>
            </CSSTransition>
          </div>
        </div>

        {/* Already have an account */}
        <p className="text-center mt-3">
          Already have an account?{' '}
          <a href="#" onClick={() => navigate('/')}>Sign In</a>
        </p>
      </div>
    </div>
  );
}
