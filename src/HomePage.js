import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container">
          <button
            className="btn btn-dark"
            onClick={() => navigate("/")} // Navigate to admin page
          >
            Admin
          </button>
          <a className="navbar-brand text-white fw-bold" href="#">
            <img
              src="./images/kisankartLogo.png"
              alt="Logo"
              style={{ width: "40px", marginRight: "10px" }}
            />
            KisanKart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="btn btn-warning"
                  onClick={() => navigate("/login")} // Navigate to Login page
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Stores
                </a>
              </li>
              {/* Dropdown for Account */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="accountDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="accountDropdown">
                  <li>
                    <label
                      className="dropdown-item"
                      onClick={() => navigate("/profile")}
                    >
                      Profile
                    </label>
                  </li>
                  <li>
                    <label
                      className="dropdown-item"
                      onClick={() => navigate("/orders")}
                    >
                      Orders
                    </label>
                  </li>
                  <li>
                    <label
                      className="dropdown-item"
                      onClick={() => navigate("/settings")}
                    >
                      Settings
                    </label>
                  </li>
                  <li>
                    <label
                      className="dropdown-item"
                      onClick={() => navigate("/login")}
                    >
                      Logout
                    </label>
                  </li>
                  <li>
                    <label
                      className="dropdown-item"
                      onClick={() => navigate("/ForgotPassword")}
                    >
                      Forgot Password
                    </label>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section with Sidebar */}
      <section className="hero-section text-center py-5">
        <div className="container d-flex">
          {/* Sidebar Categories */}
          <div className="sidebar">
            <h4 className="fw-bold">Categories</h4>
            <ul className="list-group">
              <li className="list-group-item">

                {/* label link button in categories */}
                <label
                  className="lbl lbl-link category-item"
                  onClick={() => navigate("/category/dairy-bread-eggs")}
                >
                  Dairy, Bread & Eggs 
                </label>
              </li>
              <li className="list-group-item">
                <label
                  className="lbl lbl-link category-item"
                  onClick={() => navigate("/category/snacks-munchies")}
                >
                  Snacks & Munchies <span className="arrow"></span>
                </label>
              </li>
              <li className="list-group-item">
                <label
                  className="lbl lbl-link category-item"
                  onClick={() => navigate("/category/fruits-vegetables")}
                >
                  Fruits & Vegetables <span className="arrow"></span>
                </label>
              </li>
              <li className="list-group-item">
                <label
                  className="lbl lbl-link category-item"
                  onClick={() => navigate("/category/cold-drinks-juices")}
                >
                  Cold Drinks & Juices <span className="arrow"></span>
                </label>
              </li>
              <li className="list-group-item">
                <label
                  className="lbl lbl-link category-item"
                  onClick={() => navigate("/category/breakfast-instant-food")}
                >
                  Breakfast & Instant Food <span className="arrow"></span>
                </label>
              </li>
              <li className="list-group-item">
                <label
                  className="lbl lbl-link category-item"
                  onClick={() => navigate("/category/bakery-biscuits")}
                >
                  Bakery & Biscuits <span className="arrow"></span>
                </label>
              </li>
              <li className="list-group-item">
                <label
                  className="lbl lbl-link category-item"
                  onClick={() => navigate("/category/chicken-meat-fish")}
                >
                  Chicken, Meat & Fish <span className="arrow"></span>
                </label>
              </li>
            </ul>
          </div>

          {/* Autumn Image with Text */}
          <div
            className="p-4 rounded flex-grow-1"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src="./images/autumn.jpg"
                alt="Basket"
                style={{ width: "500px", vh: "40" }}
              />
              <div>
                <h3 className="fw-bold">Welcome to KisanKart</h3>
                <p>
                  Download the app to get free delivery and ₹50 off on your
                  first order.
                </p>
              </div>
            </div>
            <button className="btn btn-dark mt-3">Download KisanKart App</button>
          </div>
        </div>
      </section>

      {/* Promotional Cards */}
      <section className="promotions py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center p-3 bg-light-blue">
                <h5>10% cashback on personal care</h5>
                <p>Max cashback: ₹50</p>
                <p>Code: CARE10</p>
                <button className="btn btn-dark">Shop Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center p-3 bg-light-yellow">
                <h5>Say yes to season's fresh</h5>
                <p>Refresh your day the fruity way</p>
                <button className="btn btn-dark">Shop Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center p-3 bg-light-blue">
                <h5>When in doubt, Drink Milk</h5>
                <p>Enjoy a scoop of summer today</p>
                <button className="btn btn-dark">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center my-4">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/login")} // Navigate to Login page
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
