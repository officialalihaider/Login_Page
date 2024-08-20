import React from "react";
import "./Style.css";

const LoginRegister = () => {
  function SwitchContent() {
    const content = document.getElementById("content");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    registerBtn.addEventListener("click", () => {
      content.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
      content.classList.remove("active");
    });
  }

  return (
    <div
      className="content d-flex justify-content-center align-items-center shadow-lg bg-light"
      id="content"
    >
      {/* Register-Form */}

      <div className="col-md-6 d-flex justify-content-center">
        <form action="">
          <div className="header-text mb-4">
            <h1>Create Account</h1>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              placeholder="Name"
              className="form-control form-control-lg bg-light fs-6"
              required
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="email"
              placeholder="Email"
              className="form-control form-control-lg bg-light fs-6"
              required
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="password"
              placeholder="Password"
              className="form-control form-control-lg bg-light fs-6"
              required
            />
          </div>

          <div className="input-group mb-3 justify-content-center">
            <button className="btn border-white  w-50 fs-6">Sign Up</button>
          </div>
        </form>
      </div>

      {/* Login Form */}

      <div className="col-md-6 right-box">
        <form action="">
          <div className="header-text mb-4">
            <h1>Sign in</h1>
          </div>

          <div className="input-group mb-3">
            <input
              type="email"
              placeholder="Email"
              className="form-control form-control-lg bg-light fs-6"
              required
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="password"
              placeholder="Password"
              className="form-control form-control-lg bg-light fs-6"
              required
            />
          </div>

          <div className="input-group mb-5 d-flex justify-content-between">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label
                htmlFor="formcheck"
                className="form-check-label text-secondary"
                type="checkbox"
              >
                <small >Remember me</small>
              </label>
            </div>
            <div className="forgot">
              <small>
                <a href="#">Forgot Password</a>
              </small>
            </div>
          </div>

          <div className="input-group mb-3 justify-content-center">
            <button className="btn border-white w-50 fs-6">Login</button>
          </div>
        </form>
      </div>

      {/* Switch panel */}

      <div className="switch-content">
        <div className="switch">
          <div className="switch-panel switch-left">
            <h1>Hello, Again</h1>
            <p>It's great to see you again!</p>
            <button
              className="hidden btn text-white w-50 fs-6"
              id="login"
              onClick={SwitchContent}
            >
              Login
            </button>
          </div>

          <div className="switch-panel switch-right">
            <h1>Welcome</h1>
            <p>Join Our Exclusive Platform, Unlock a New Journey </p>
            <button
              className="hidden btn border-white text-white w-50 fs-6"
              id="register"
              onClick={SwitchContent}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
