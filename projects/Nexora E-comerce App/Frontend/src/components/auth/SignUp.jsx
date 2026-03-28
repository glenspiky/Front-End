import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="auth">
      <div className="signup-container">
        <h2>Create Account</h2>
        <h3>Join Us today</h3>
        <form className="sign-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password (min. 6 characters)"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <hr />
        <p>
          Already have an account?{" "}
          <span>
            <Link  to="/login" className="auth-link">
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
