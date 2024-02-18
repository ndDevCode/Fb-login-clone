import React from "react";
import LoginForm from "../components/LoginForm";
import Hero from "../components/Hero";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <div className="row form-section ps-5 pe-5">
        <div className="col-6 d-flex align-items-center">
          <Hero />
        </div>
        <div className="col-6">
          <LoginForm />
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default Login;
