import React from "react";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="container">
      <div className="row">
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
