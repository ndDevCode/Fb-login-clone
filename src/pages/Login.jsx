import React from "react";
import LoginForm from "../components/LoginForm";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <div className="row form-section">
        <div className="col-6"></div>
        <div className="col-6">
          <LoginForm />
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default Login;
