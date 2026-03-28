import React, { useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
export const Login = () => {
  const [formData,setFormData]=useState({
    password:"",
    email:""
  })
  async function handleSubmit(e) {
    e.preventDefault()
   setFormData({
      password: "",
      email: "",
    });
  
  }
  function handleChange(e) {
setFormData({
  ...formData,[e.target.name]:e.target.value
})
  }

  return (
    <div className="auth">
      <div className="signup-container">
        <h2>Welcome Back</h2>
        <h3>Login to your account</h3>
        <form className="sign-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
            onChange={handleChange}
            value={formData.email}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword"> Password</label>
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
          Don't have an account?{" "}
          <span>
            <Link to="/sign-up" className="auth-link">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
