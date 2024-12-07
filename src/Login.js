import React,{ useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate(); // Hook for navigation
  const [email,  setEmail] = useState(''); // To track the value of email field

  // to handle the form submission
  const handleFormSubmit = (e) => {
    e.preventDefault (); // it will handle to default page behaviour and prevent page reload
    if(!email){
      alert('Please enter your email or mobile number before login');
    } else {
      console.log('Form submitted with email : ', email); // here is the logic of empty field
    }
  };



  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="d-flex shadow rounded w-50 bg-white">
        {/* Left Section */}
        <div className="bg-primary text-white p-4 d-flex flex-column justify-content-center" style={{ width: '50%' }}>
          <h1 className="mb-3">KisanKart (KK)</h1>
          <p>Get access to your Orders, Wishlist, and Recommendations</p>
          <div className="mt-auto">
            <img
              src="./images/farmer-consumer.webp"
              alt="Illustration"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="p-4" style={{ width: '50%' }}>
          <h2 className="mb-3">Login</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Enter Email/Mobile Number
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email or mobile number"
                className="form-control"
                value = { email} // bindup withte state
                onChange = {(e) => setEmail (e.target.value)} // update state when change in input
              />
            </div>

            {/* division tag for password */}

            
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
              By continuing, you agree to KisanKart's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
            </p>
            <button type="submit" className="btn btn-warning w-100 mb-3">
              Request OTP
            </button>

            <p className="text-center">
              New to KisanKart?{''} 
              <a href="#" onClick={() => navigate('/create-account')} >
                Create an account
                </a>

            </p>
          </form>
        </div>
      </div>
    </div>
  );
}